import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>🎬 MovieFinder</h1>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}

export default Header;