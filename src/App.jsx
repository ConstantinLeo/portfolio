import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Formation from "./pages/Formation";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects.jsx";

function App() {
    return (
        <Router basename={"/portfolio"}>
            <div className="min-h-screen flex flex-col bg-white-smoke">
                <Header/>
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Projects/>}/>
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