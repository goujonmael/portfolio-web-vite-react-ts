import { Route, Routes, useParams, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import React, { Suspense, lazy, useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { fetchWithCache } from "./utils/fetchWithCache";
import SEO from "./components/SEO/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants } from "./utils/animations";

// Lazy-loaded route components for better performance
const Welcome = lazy(() => import("./Home/Welcome/Welcome"));
const Me = lazy(() => import("./Home/Me/Me"));
const Contacts = lazy(() => import("./Home/Contacts/Contacts"));
const CyberSecurity = lazy(() => import("./CyberSecurity/CyberSecurity"));
const List = lazy(() => import("./Projects/List").then((m) => ({ default: m.List })));
const Item = lazy(() => import("./Projects/Item").then((m) => ({ default: m.Item })));
const ListPerso = lazy(() => import("./Projects/ListPerso").then((m) => ({ default: m.ListPerso })));
const ItemPerso = lazy(() => import("./Projects/ItemPerso").then((m) => ({ default: m.ItemPerso })));
const Competences = lazy(() => import("./Competences/Competences"));
const Scolarite = lazy(() => import("./Scolarite/Scolarite"));

interface GitHubRepo {
  id: number | string;
  name?: string;
  pushed_at?: string;
  html_url?: string;
  [key: string]: unknown;
}

// Lightweight UI-facing project shape (id as string for UI keys)
interface ProjetUI {
  id: string;
  name?: string;
  html_url?: string;
  [key: string]: unknown;
}

interface StoreProps {
  typeOfList?: string;
  // can be GitHubRepo[] (for university projects) or a local personal projets shape
  projets?: unknown[];
}

const Store: React.FC<StoreProps> = React.memo(({ typeOfList, projets }) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <SEO
        title={typeOfList === "univ" ? t('seo.projectsUniv.title') : t('seo.projectsPerso.title')}
        description={typeOfList === "univ" ? t('seo.projectsUniv.description') : t('seo.projectsPerso.description')}
        keywords={typeOfList === "univ" ? t('seo.projectsUniv.keywords') : t('seo.projectsPerso.keywords')}
        url={typeOfList === "univ" ? "/projets-univ" : "/projets-perso"}
      />
      <div className="competences-div">
        <h1 className="title">
          <span className="title-first-letter">P</span>rojets{" "}
          {typeOfList === "univ" ? t('projects.university.title').split(' ')[1] : t('projects.personal.title').split(' ')[1]}
        </h1>
      </div>
      <div className="content">
        <div className="description">
          <div className="projets-title">
            {typeOfList === "univ" ? (
              <div>
                <p>
                  {t('projects.university.description')}
                </p>
                <p>
                  {t('projects.university.teamwork')}
                </p>
              </div>
            ) : (
              <div>
                <p>{t('projects.personal.description')}</p>
                <p>
                  {t('projects.personal.motivation')}
                </p>
              </div>
            )}
          </div>
        </div>
        {typeOfList === "univ" ? (
          <List selectedId={id ?? ""} />
        ) : (
          // Cast to the expected personal project shape for ListPerso
          <ListPerso selectedId={id ?? ""} projets={(projets ?? []) as PersoProjet[]} />
        )}
      </div>
    </motion.div>
  );
});

interface ItemWrapperProps {
  type: string;
  projetsPerso?: unknown[];
}

// Local representation for personal project items used by ItemPerso/ListPerso
interface PersoProjet {
  id: string;
  name?: string;
  category?: string;
  imageLink?: string;
  github?: string;
  pdf?: string;
  title?: string;
  description?: string;
  customComponent?: React.ReactNode;
  html_url?: string;
  [key: string]: unknown;
}

const ItemWrapper: React.FC<ItemWrapperProps> = React.memo(({ type, projetsPerso }) => {
  const { id } = useParams<{ id: string }>();
  return type === "univ" ? (
    <Item id={id ?? ""} />
  ) : (
    // Cast to the personal project shape expected by ItemPerso
    <ItemPerso id={id ?? ""} projetsPerso={(projetsPerso ?? []) as PersoProjet[]} />
  );
});

export default function AppRoutes() {
  const location = useLocation();
  const { t } = useTranslation();

  // Update document title and meta description on route change for basic SEO
  useEffect(() => {
    const path = location.pathname;
    let title = t('meta.title', 'Portfolio de Mael Goujon');
    const description = t('meta.description', 'Découvrez le portfolio de Mael Goujon, étudiant en informatique.');

    if (path.startsWith('/projets-univ')) {
      title = t('projects.university.title', 'Projets universitaires') + ' — ' + title;
    } else if (path.startsWith('/projets-perso')) {
      title = t('projects.personal.title', 'Projets personnels') + ' — ' + title;
    } else if (path.startsWith('/cybersecurity')) {
      title = t('cybersecurity.title', 'CyberSecurity') + ' — ' + title;
    } else if (path.startsWith('/competences')) {
      title = t('header.skills', 'Compétences') + ' — ' + title;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
  }, [location, t]);
  const [projets, setProjets] = useState<GitHubRepo[]>([]);
  const [scrollY, setScrollY] = useState(0);

  // Map GitHubRepo (id:number|string) to a lightweight UI-friendly Projet shape with id as string
  const projetsForUI: ProjetUI[] = projets.map((p) => ({
    ...p,
    id: String(p.id),
    name: (p.name as string) ?? undefined,
    html_url: (p.html_url as string) ?? undefined,
  }));

  const fetchData = useCallback(async () => {
    try {
      // Use fetchWithCache util with 1 hour TTL
      const data = await fetchWithCache<GitHubRepo[]>(
        "https://api.github.com/users/goujonmael/repos",
        { key: "github_repos", ttlMs: 1000 * 60 * 60 }
      );
      if (Array.isArray(data)) {
        data.sort(
          (a: { pushed_at?: string }, b: { pushed_at?: string }) =>
            new Date(b.pushed_at ?? 0).getTime() - new Date(a.pushed_at ?? 0).getTime()
        );
        setProjets(data);
      } else {
        console.error("Unexpected API response format:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // try to fall back to any stale cache if fetch failed
      try {
        const raw = localStorage.getItem("github_repos");
        if (raw) {
          const parsed = JSON.parse(raw) as GitHubRepo[];
          setProjets(parsed);
        }
      } catch (e) {
        console.warn('fetchData: fallback cache read failed', e);
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const floatingBall = document.querySelector(
      ".floating-ball3"
    ) as HTMLElement;
    if (floatingBall) {
      const randomTop = 20 + Math.random() * 30;
      const randomLeft = 20 + Math.random() * 50;
      floatingBall.style.setProperty("--random-top", `${randomTop}%`);
      floatingBall.style.setProperty("--random-left", `${randomLeft}%`);
    }
  }, []);

  return (
    <div className="main">
      <div className="floating-ball1"></div>
      <div className="floating-ball2"></div>
      <div className="floating-ball3"></div>
      <div className="blur-background"></div>
      <Header />
      <div className="container">
        <Suspense fallback={<div aria-busy="true">Loading…</div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <Welcome />
                    <Me />
                    <Contacts />
                  </motion.div>
                }
              />

              <Route path="/cybersecurity" element={<CyberSecurity />} />
              <Route
                path="/projets-univ/:id"
                element={
                  <>
                    <Store typeOfList="univ" projets={projets} />
                    <div
                      style={{
                        position: "absolute",
                        top: scrollY,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <ItemWrapper type="univ" />
                    </div>
                  </>
                }
              />
              <Route
                path="/projets-perso/:id"
                element={
                  <>
                    <Store typeOfList="perso" projets={projetsForUI} />
                    <div
                      style={{
                        position: "absolute",
                        top: scrollY,
                        left: 0,
                        width: "100%",
                        height: "auto",
                      }}
                    >
                      <ItemWrapper type="perso" projetsPerso={projetsForUI} />
                    </div>
                  </>
                }
              />
              <Route path="/projets-univ" element={<Store typeOfList="univ" />} />
              <Route
                path="/projets-perso"
                element={<Store typeOfList="perso" projets={projetsForUI} />}
              />
              <Route path="/competences" element={<Competences />} />
              <Route path="/scolarite" element={<Scolarite />} />
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
    </div>
  );
}
