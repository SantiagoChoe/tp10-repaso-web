import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosGuardados = localStorage.getItem("favoritos");

    return favoritosGuardados
      ? JSON.parse(favoritosGuardados)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favoritos",
      JSON.stringify(favoritos)
    );
  }, [favoritos]);

  const agregarFavorito = (pelicula) => {
    const yaExiste = favoritos.some(
      (favorito) => favorito.imdbID === pelicula.imdbID
    );

    if (!yaExiste) {
      setFavoritos([...favoritos, pelicula]);
    }
  };

  const quitarFavorito = (pelicula) => {
    const nuevosFavoritos = favoritos.filter(
      (favorito) => favorito.imdbID !== pelicula.imdbID
    );

    setFavoritos(nuevosFavoritos);
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              favoritos={favoritos}
              agregarFavorito={agregarFavorito}
              quitarFavorito={quitarFavorito}
            />
          }
        />

        <Route
          path="/favoritos"
          element={
            <Favorites
              favoritos={favoritos}
              agregarFavorito={agregarFavorito}
              quitarFavorito={quitarFavorito}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;