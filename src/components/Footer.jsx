import { Link } from "react-router-dom";
import { FaPhone, FaFilePdf, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-white-smoke py-6 border-t">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Pages du site */}
                <div className="space-y-2 text-center lg:text-left">
                    <Link to="/" className="block text-slate-gray hover:text-burnt-orange">A propos</Link>
                    <Link to="/formation" className="block text-slate-gray hover:text-burnt-orange">Formation</Link>
                    <Link to="/experience" className="block text-slate-gray hover:text-burnt-orange">Expériences</Link>
                    <Link to="/realisations" className="block text-slate-gray hover:text-burnt-orange">Réalisations</Link>
                </div>

                {/* Logo et droits */}
                <div className="text-center">
                    <div className="flex justify-center mb-3">
                        <img src={"./logo.png"} alt="Logo" className="h-10 w-auto transition-transform duration-300 hover:scale-110" />
                    </div>
                    <p className="text-sm text-slate-gray">&copy; {new Date().getFullYear()} Léo CONSTANTIN. Tous droits
                        réservés.</p>
                </div>

                {/* Réseaux sociaux et autres */}
                <div className="flex justify-center md:justify-end space-x-4">
                    <Link to="/contact" className="hover:text-burnt-orange">
                        <FaPhone size={24} />
                    </Link>
                    <a href="/portfolio/documents/CV-CONSTANTIN-Leo.pdf" target="_blank" rel="noopener noreferrer"
                       className="hover:text-burnt-orange">
                        <FaFilePdf size={24}/>
                    </a>
                    <a href="https://linkedin.com/in/leo-constantin" target="_blank" rel="noopener noreferrer"
                       className="hover:text-burnt-orange">
                        <FaLinkedin size={24}/>
                    </a>
                    <a href="https://github.com/ConstantinLeo" target="_blank" rel="noopener noreferrer"
                       className="hover:text-burnt-orange">
                        <FaGithub size={24}/>
                    </a>
                </div>
            </div>
            <button
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="fixed bottom-4 right-4 bg-burnt-orange text-white p-2 rounded-full shadow-lg hover:bg-dark-purple focus:outline-none transition duration-300"
            >
                ↑
            </button>
        </footer>
    );
}

export default Footer;