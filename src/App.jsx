import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Formation from "./pages/Formation";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects.jsx";
import Escapegame from "./pages/projets/Escapegame.jsx";
import Encheres from "./pages/projets/Encheres.jsx";
import Rails from "./pages/projets/Rails.jsx";
import Apprentissage from "./pages/Apprentissage.jsx";

function App() {
    return (
        <Router basename={"/portfolio/"}>
            <div className="min-h-screen flex flex-col bg-white-smoke">
                <Header/>
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/apprentissage" element={<Apprentissage/>}/>
                        <Route path="/realisations" element={<Projects/>}/>
                        <Route path="/realisations/rails" element={<Rails/>} />
                        <Route path="/realisations/encheres" element={<Encheres/>} />
                        <Route path="/realisations/escapegame" element={<Escapegame/>} />
                        <Route path="/experiences" element={<Experience/>}/>
                        <Route path="/formation" element={<Formation/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;