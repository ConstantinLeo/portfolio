import React from "react";
import { Link } from "react-router-dom";
import { FaFilePdf, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-white-smoke py-6 border-t">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Pages du site */}
                <div className="space-y-2 text-center">
                    <Link to="/" className="block text-slate-gray hover:text-burnt-orange">Accueil</Link>
                    <Link to="/formation" className="block text-slate-gray hover:text-burnt-orange">Formation</Link>
                    <Link to="/experience" className="block text-slate-gray hover:text-burnt-orange">Expériences</Link>
                    <Link to="/projects" className="block text-slate-gray hover:text-burnt-orange">Projets</Link>
                </div>

                {/* Logo et droits */}
                <div className="text-center">
                    <div className="flex justify-center mb-3">
                        <img src={"/logo.png"} alt="Logo" className="h-10 w-auto transition-transform duration-300 hover:scale-110" />
                    </div>
                    <p className="text-sm text-slate-gray">&copy; {new Date().getFullYear()} Léo CONSTANTIN. Tous droits
                        réservés.</p>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex justify-center md:justify-end space-x-4">
                    <a href="/documents/CV-CONSTANTIN-Leo.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-orange">
                        <FaFilePdf size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-orange">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-orange">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-4 right-4 bg-burnt-orange text-white p-2 rounded-full shadow-lg hover:bg-dark-purple focus:outline-none"
            >
                ↑
            </button>
        </footer>
    );
}

export default Footer;