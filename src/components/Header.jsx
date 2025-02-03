import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white-smoke shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-lg font-bold">Léo CONSTANTIN</h1>
                <nav className="hidden md:flex space-x-6 text-slate-gray">
                    <Link to="/" className="hover:text-burnt-orange">A propos</Link>
                    <Link to="/formation" className="hover:text-burnt-orange">Formation</Link>
                    <Link to="/experience" className="hover:text-burnt-orange">Expériences</Link>
                    <Link to="/projets" className="hover:text-burnt-orange">Projets</Link>
                    <Link to="/contact" className="hover:text-burnt-orange">Contact</Link>
                </nav>
                {/* Menu burger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-xl focus:outline-none"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-gray-50 shadow-md">
                    <nav className="flex items-center flex-col space-y-2 p-4">
                        <Link to="/" className="hover:text-burnt-orange" onClick={() => setMenuOpen(false)}>A propos</Link>
                        <Link to="/formation" className="hover:text-burnt-orange" onClick={() => setMenuOpen(false)}>Formation</Link>
                        <Link to="/experience" className="hover:text-burnt-orange" onClick={() => setMenuOpen(false)}>Expériences</Link>
                        <Link to="/projets" className="hover:text-burnt-orange" onClick={() => setMenuOpen(false)}>Projets</Link>
                        <Link to="/contact" className="hover:text-burnt-orange" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
