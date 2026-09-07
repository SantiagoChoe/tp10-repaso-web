import ItemList from "../components/ItemList";
function Favorites({
  favoritos,
  agregarFavorito,
  quitarFavorito,
}) {
  return (
    <main className="container">
      <h2>Mis películas favoritas ❤️</h2>

      {favoritos.length === 0 ? (
        <p className="mensaje">
          Todavía no tenés películas favoritas.
        </p>
      ) : (
        <ItemList
          peliculas={favoritos}
          favoritos={favoritos}
          agregarFavorito={agregarFavorito}
          quitarFavorito={quitarFavorito}
        />
      )}
    </main>
  );
}

export default Favorites;