import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import App from './App'
import About from './about'
import Home from './Home'
import Welcome from './Home/Welcome/Welcome'
import StarOfLife from './Home/StarOfLife/StarOfLife'
import Me from './Home/Me/Me'
import { List } from './Projects/List'
import { AnimatePresence } from 'framer-motion'
import { Item } from './Projects/Item'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { ListPerso } from './Projects/ListPerso'
import { ItemPerso } from './Projects/ItemPerso'
import Competences from './Competences/Competences'
import React, { useEffect } from 'react';



interface StoreProps {
    typeOfList?: string;
}

const Store: React.FC<StoreProps> = ({ typeOfList }) => {
    let { id } = useParams<{ id: string }>();
    const imageHasLoaded = true;

    return (
        <>
            <div className="competences-div">
                <h1 className="competences-title"
                >Projets {typeOfList === "univ" ? "Universitaires" : "Personnels"}</h1>
            </div>
            {typeOfList === "univ" ? <List selectedId={id} /> : <ListPerso selectedId={id} />}
            <AnimatePresence>
                {typeOfList === "univ" && id && imageHasLoaded && <Item id={id} />}
                {typeOfList === "perso" && id && imageHasLoaded && <ItemPerso id={id} />}
            </AnimatePresence>
        </>
    );
}

export default function AppRoutes() {

    useEffect(() => {
        const floatingBall = document.querySelector('.floating-ball3');
        if (floatingBall) {
            const randomTop = 20 + Math.random() * 30;
            const randomLeft = 20 + Math.random() * 50;
            floatingBall.style.setProperty('--random-top', `${randomTop}%`);
            floatingBall.style.setProperty('--random-left', `${randomLeft}%`);
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
                <Routes>
                    <Route path="/" element={
                        <>
                            <Welcome />
                            <StarOfLife />
                            <Me />
                        </>
                    } />
                    <Route path="/projets-univ/:id" element={<Store typeOfList="univ" />} />
                    <Route path="/projets-perso/:id" element={<Store typeOfList="perso" />} />
                    <Route path="/projets-univ" element={<Store typeOfList="univ" />} />
                    <Route path="/projets-perso" element={<Store typeOfList="perso" />} />
                    <Route path="/competences" element={<Competences />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}