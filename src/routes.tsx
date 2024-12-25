import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import App from './App'
import About from './about'
import Home from './Home'
import Welcome from './Home/Welcome/Welcome'
import StarOfLife from './Home/StarOfLife/StarOfLife'
import Me from './Home/Me/Me'
import { List } from './List'
import { AnimatePresence } from 'framer-motion'
import { Item } from './Item'
import Header from './Header/Header'
import Footer from './Footer/Footer'


function Store() {
    let { id } = useParams<{ id: string }>();
    const imageHasLoaded = true;

    return (
        <>
            <div className="competences-div">
                <h1 className="competences-title"
                >Compétences</h1>
            </div>
            <List selectedId={id} />
            <AnimatePresence>
                {id && imageHasLoaded && <Item id={id} key="item" />}
            </AnimatePresence>
        </>
    );
}




export default function AppRoutes() {
    return (
        <div className="main">
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
                    <Route path="/competences/:id" element={<Store />} />
                    <Route path="/competences" element={<Store />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}