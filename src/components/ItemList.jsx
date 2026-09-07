import ItemCard from "./ItemCard";

function ItemList({
  peliculas,
  agregarFavorito,
  quitarFavorito,
  favoritos,
}) {
  if (peliculas.length === 0) {
    return (
      <p className="mensaje">
        No encontramos resultados.
      </p>
    );
  }

  return (
    <div className="movie-grid">
      {peliculas.map((pelicula) => {
        const esFavorito = favoritos.some(
          (favorito) => favorito.imdbID === pelicula.imdbID
        );

        return (
          <ItemCard
            key={pelicula.imdbID}
            pelicula={pelicula}
            agregarFavorito={agregarFavorito}
            quitarFavorito={quitarFavorito}
            esFavorito={esFavorito}
          />
        );
      })}
    </div>
  );
}

export default ItemList;