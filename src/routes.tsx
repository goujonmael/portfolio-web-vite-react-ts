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
import React, { useEffect, useState } from "react";
import Contacts from "./Home/Contacts/Contacts";

interface StoreProps {
  typeOfList?: string;
}

const Store: React.FC<StoreProps> = ({ typeOfList }) => {
  let { id } = useParams<{ id: string }>();

  return (
    <>
      <div className="competences-div">
        <h1 className="competences-title">
          Projets {typeOfList === "univ" ? "Universitaires" : "Personnels"}
        </h1>
      </div>
      <div className="competences-div">
        <p className="projets-title">
          {typeOfList === "univ"
            ? "Réalisés au cours de mes études en informatique"
            : "Réalisés en dehors de mes études"}
        </p>
      </div>
      {typeOfList === "univ" ? (
        <List selectedId={id ?? ""} />
      ) : (
        <ListPerso selectedId={id ?? ""} />
      )}
    </>
  );
};

interface ItemWrapperProps {
  type: string;
}

const ItemWrapper: React.FC<ItemWrapperProps> = ({ type }) => {
  let { id } = useParams<{ id: string }>();
  return type === "univ" ? <Item id={id ?? ""} /> : <ItemPerso id={id ?? ""} />;
};

export default function AppRoutes() {
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
          scale: 0.95, // Initial size at 95%
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
                <Store typeOfList="univ" />
                <div
                  style={{
                    position: "absolute",
                    top: scrollY,
                    left: 0,
                    width: "100%",
                    height: "auto",
                    marginTop: "1vh",
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
                <Store typeOfList="perso" />
                <div
                  style={{
                    position: "absolute",
                    top: scrollY,
                    left: 0,
                    width: "100%",
                    height: "auto",
                    marginTop: "2vh",
                  }}
                >
                  <AnimatePresence>
                    <ItemWrapper type="perso" />
                  </AnimatePresence>
                </div>
              </>
            }
          />
          <Route path="/projets-univ" element={<Store typeOfList="univ" />} />
          <Route path="/projets-perso" element={<Store typeOfList="perso" />} />
          <Route path="/competences" element={<Competences />} />
        </Routes>
      </motion.div>
    </div>
  );
}
