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

interface StoreProps {
  typeOfList?: string;
  projets?: any[];
}

const Store: React.FC<StoreProps> = ({ typeOfList, projets }) => {
  let { id } = useParams<{ id: string }>();
  if (typeOfList !== "univ") {
    console.log(
      "Store projet for the id ",
      projets.find((item) => item.id === Number(id))
    );
  }
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
    const response = await fetch(
      "https://api.github.com/users/goujonmael/repos"
    );
    const data = await response.json();
    console.log(data);
    setProjets(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const ItemWrapper: React.FC<ItemWrapperProps> = ({ type, projetsPerso }) => {
    let { id } = useParams<{ id: string }>();
    return type === "univ" ? (
      <Item id={id ?? ""} />
    ) : (
      <ItemPerso id={id ?? ""} projetsPerso={projetsPerso} />
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
      <motion.div
        className="container"
        initial={{
          opacity: 0,
          filter: "grayscale(100%)",
          scale: 1.05, // Initial size at 95%
        }}
        animate={{
          opacity: 1,
          filter: "grayscale(0%)",
          scale: 1, // Final size at 100%
        }}
        transition={{
          opacity: { duration: 0.35, ease: "easeInOut" },
          filter: { delay: 0.35, duration: 0.5, ease: "easeInOut" },
          scale: { duration: 0.35, ease: "easeInOut" }, // Duration for size animation
        }}
      >
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
        </Routes>
      </motion.div>
    </div>
  );
}
