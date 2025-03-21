import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white-smoke shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-lg font-bold">Léo CONSTANTIN</h1>
                <nav className="hidden md:flex items-center space-x-6 text-slate-gray">
                    <Link to="/apprentissage" className="relative font-bold text-burnt-orange px-4 py-2 rounded-lg border border-burnt-orange hover:bg-burnt-orange hover:text-white transition">
                        Portfolio d'apprentissage
                        <span className="absolute top-0 right-0 text-xs bg-red-600 text-white px-2 py-1 rounded-full -mt-2 -mr-2">NEW</span>
                    </Link>
                    <Link to="/" className="hover:text-burnt-orange">A propos</Link>
                    <Link to="/formation" className="hover:text-burnt-orange">Formation</Link>
                    <Link to="/experiences" className="hover:text-burnt-orange">Expériences</Link>
                    <Link to="/realisations" className="hover:text-burnt-orange">Réalisations</Link>
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
                        <Link to="/apprentissage" className="relative font-bold text-burnt-orange px-4 py-2 rounded-lg border border-burnt-orange hover:bg-burnt-orange hover:text-white transition" onClick={() => setMenuOpen(false)}>
                            Portfolio d'apprentissage
                            <span className="absolute top-0 right-0 text-xs bg-red-600 text-white px-2 py-1 rounded-full -mt-2 -mr-2">NEW</span>
                        </Link>
                        <Link to="/" className="hover:text-burnt-orange" onClick={() => setMenuOpen(false)}>A propos</Link>
                        <Link to="/formation" className="hover:text-burnt-orange" onClick={() => setMenuOpen(false)}>Formation</Link>
                        <Link to="/experiences" className="hover:text-burnt-orange" onClick={() => setMenuOpen(false)}>Expériences</Link>
                        <Link to="/realisations" className="hover:text-burnt-orange" onClick={() => setMenuOpen(false)}>Réalisations</Link>
                        <Link to="/contact" className="hover:text-burnt-orange" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
