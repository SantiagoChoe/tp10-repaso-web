import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ItemList from "../components/ItemList";
import { buscarPeliculas } from "../services/api";

function Home({ favoritos, agregarFavorito, quitarFavorito }) {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("Batman");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const buscar = async () => {
    if (busqueda.trim() === "") {
      return;
    }

    try {
      setCargando(true);
      setError("");

      const resultados = await buscarPeliculas(busqueda);

      setPeliculas(resultados);
    } catch (error) {
      setPeliculas([]);
      setError("No fue posible obtener la información.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    buscar();
  }, []);

  return (
    <main className="container">
      <h2>Buscar películas 🎬</h2>

      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        buscar={buscar}
      />

      {cargando && (
        <p className="mensaje">
          Cargando información...
        </p>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {!cargando && !error && (
        <ItemList
          peliculas={peliculas}
          favoritos={favoritos}
          agregarFavorito={agregarFavorito}
          quitarFavorito={quitarFavorito}
        />
      )}
    </main>
  );
}

export default Home;