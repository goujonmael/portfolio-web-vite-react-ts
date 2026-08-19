import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { Suspense, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "./utils/animations";

// Lazy-loaded route components for better performance
const Welcome = lazy(() => import("./Home/Welcome/Welcome"));
const Me = lazy(() => import("./Home/Me/Me"));
const Contacts = lazy(() => import("./Home/Contacts/Contacts"));
const CyberSecurity = lazy(() => import("./CyberSecurity/CyberSecurity"));
const Skills = lazy(() => import("./Skills/Skills"));
const Scolarite = lazy(() => import("./Scolarite/Scolarite"));

export default function AppRoutes() {
  const location = useLocation();
  const { t } = useTranslation();

  // Update document title and meta description on route change for basic SEO
  useEffect(() => {
    const path = location.pathname;
    let title = t('meta.title', "Maël Goujon — Portfolio");
    const description = t('meta.description', 'Discover the portfolio of Maël Goujon, computer science student.');

    if (path.startsWith('/cybersecurity')) {
      title = t('cybersecurity.title', 'CyberSecurity') + ' — ' + title;
    } else if (path.startsWith('/competences')) {
      title = t('header.skills', 'Skills') + ' — ' + title;
    } else if (path.startsWith('/scolarite')) {
      title = t('header.education', 'Education') + ' — ' + title;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
  }, [location, t]);

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
        <Suspense fallback={null}>
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
              <Route path="/competences" element={<Skills />} />
              <Route path="/scolarite" element={<Scolarite />} />
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
    </div>
  );
}
