import { Route, Routes, useParams } from "react-router-dom";
import Header from "./Header/Header";
import React, { Suspense, lazy, useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { fetchWithCache } from "./utils/fetchWithCache";

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

interface StoreProps {
  typeOfList?: string;
  projets?: any[];
}

const Store: React.FC<StoreProps> = React.memo(({ typeOfList, projets }) => {
  let { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  return (
    <>
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
          <ListPerso selectedId={id ?? ""} projets={projets ?? []} />
        )}
      </div>
    </>
  );
});

interface ItemWrapperProps {
  type: string;
  projetsPerso?: any[];
}

const ItemWrapper: React.FC<ItemWrapperProps> = React.memo(({ type, projetsPerso }) => {
  let { id } = useParams<{ id: string }>();
  return type === "univ" ? (
    <Item id={id ?? ""} />
  ) : (
    <ItemPerso id={id ?? ""} projetsPerso={projetsPerso ?? []} />
  );
});

export default function AppRoutes() {
  const [projets, setProjets] = useState<any[]>([]);
  const [scrollY, setScrollY] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      // Use fetchWithCache util with 1 hour TTL
      const data = await fetchWithCache<any[]>(
        "https://api.github.com/users/goujonmael/repos",
        { key: "github_repos", ttlMs: 1000 * 60 * 60 }
      );
      if (Array.isArray(data)) {
        data.sort(
          (a: { pushed_at: string }, b: { pushed_at: string }) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
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
        if (raw) setProjets(JSON.parse(raw));
      } catch (_) {
        // ignore
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
          <Routes>
          <Route
            path="/"
            element={
              <>
                <Welcome />
                <Me />
                <Contacts />
              </>
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
                <Store typeOfList="perso" projets={projets} />
                <div
                  style={{
                    position: "absolute",
                    top: scrollY,
                    left: 0,
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <ItemWrapper type="perso" projetsPerso={projets} />
                </div>
              </>
            }
          />
          <Route path="/projets-univ" element={<Store typeOfList="univ" />} />
          <Route
            path="/projets-perso"
            element={<Store typeOfList="perso" projets={projets} />}
          />
          <Route path="/competences" element={<Competences />} />
          <Route path="/scolarite" element={<Scolarite />} />
          <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
