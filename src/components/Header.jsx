import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-purple-700 text-white p-5">
            <nav className="container mx-auto flex justify-between">
                <h1 className="text-2xl font-bold">Mon Portfolio</h1>
                <ul className="flex space-x-4">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/formation">Formation</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;