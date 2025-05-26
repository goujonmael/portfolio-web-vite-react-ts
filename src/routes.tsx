import { Route, Routes, useParams } from "react-router-dom";
import Welcome from "./Home/Welcome/Welcome";
import StarOfLife from "./Home/StarOfLife/StarOfLife";
import Me from "./Home/Me/Me";
import { List } from "./Projects/List";
import { AnimatePresence, motion } from "framer-motion";
import { Item } from "./Projects/Item";
import Header from "./Header/Header";
import { ListPerso } from "./Projects/ListPerso";
import { ItemPerso } from "./Projects/ItemPerso";
import Competences from "./Competences/Competences";
import React, { useEffect, useState, useCallback } from "react";
import Contacts from "./Home/Contacts/Contacts";
import Scolarite from "./Scolarite/Scolarite";

interface StoreProps {
  typeOfList?: string;
  projets?: any[];
}

const Store: React.FC<StoreProps> = ({ typeOfList, projets }) => {
  let { id } = useParams<{ id: string }>();

  return (
    <>
      <div className="competences-div">
        <h1 className="title">
          <span className="title-first-letter">P</span>rojets{" "}
          {typeOfList === "univ" ? "Universitaires" : "Personnels"}
        </h1>
      </div>
      <div className="content">
        <div className="description">
          <div className="projets-title">
            {typeOfList === "univ" ? (
              <div>
                <p>
                  Projets réalisés dans le cadre de mes études en informatique.
                </p>
                <p>
                  Tous ont étés effectués en groupe grâce aux méthodes agiles et
                  Kanban.
                </p>
              </div>
            ) : (
              <div>
                <p>Projets réalisés en dehors du cadre universitaire.</p>
                <p>
                  Ces travaux résultent de ma curiosité pour l'informatique,
                  l'électronique et les nouvelles technologies.
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
};

interface ItemWrapperProps {
  type: string;
  projetsPerso?: any[];
}

export default function AppRoutes() {
  const [projets, setProjets] = useState<any[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const cachedData = localStorage.getItem("github_repos");
      if (cachedData) {
        setProjets(JSON.parse(cachedData));
        return;
      }

      const response = await fetch(
        "https://api.github.com/users/goujonmael/repos"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        data.sort(
          (a: { pushed_at: string }, b: { pushed_at: string }) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );
        setProjets(data);
        localStorage.setItem("github_repos", JSON.stringify(data));
      } else {
        console.error("Unexpected API response format:", data);
      }
    } catch (error) { }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const ItemWrapper: React.FC<ItemWrapperProps> = ({ type, projetsPerso }) => {
    let { id } = useParams<{ id: string }>();
    return type === "univ" ? (
      <Item id={id ?? ""} />
    ) : (
      <ItemPerso id={id ?? ""} projetsPerso={projetsPerso ?? []} />
    );
  };

  // compter les px scrollés
  const [scrollY, setScrollY] = useState(0);

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
      <motion.div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Welcome />
                <StarOfLife />
                  <Me />
                <Contacts />
              </>
            }
          />
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
                  <AnimatePresence>
                    <ItemWrapper type="univ" />
                  </AnimatePresence>
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
                  <AnimatePresence>
                    <ItemWrapper type="perso" projetsPerso={projets} />
                  </AnimatePresence>
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
      </motion.div>
    </div>
  );
}