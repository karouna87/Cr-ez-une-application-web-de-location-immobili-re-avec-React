import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <img src="/logo.svg" alt="Kasa" className="logo" />

            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    );
}

export default Header;
