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

function App() {
    return (
        <Router basename={"/portfolio/"}>
            <div className="min-h-screen flex flex-col bg-white-smoke">
                <Header/>
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projets" element={<Projects/>}/>
                        <Route path="/projets/rails" element={<Rails />} />
                        <Route path="/projets/encheres" element={<Encheres />} />
                        <Route path="/projets/escapegame" element={<Escapegame />} />
                        <Route path="/experience" element={<Experience/>}/>
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