import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <main className="error-page">
            <h1>404</h1>
            <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>

            <Link to="/" className="error-link">
                Retourner sur la page d’accueil
            </Link>
        </main>
    );
}
