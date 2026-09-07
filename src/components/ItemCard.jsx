function ItemCard({ pelicula, agregarFavorito, quitarFavorito, esFavorito }) {
  const { Title, Year, Poster, imdbID, Type } = pelicula;

  return (
    <div className="movie-card">
      {Poster !== "N/A" ? (
        <img src={Poster} alt={`Poster de ${Title}`} />
      ) : (
        <div className="sin-poster">
          Sin imagen
        </div>
      )}

      <div className="movie-info">
        <h2>{Title}</h2>

        <p>
          <strong>Año:</strong> {Year}
        </p>

        <p>
          <strong>Tipo:</strong> {Type}
        </p>

        <p>
          <strong>ID:</strong> {imdbID}
        </p>

        {esFavorito ? (
          <button
            className="favorite-button remove"
            onClick={() => quitarFavorito(pelicula)}
          >
            Quitar de favoritos 💔
          </button>
        ) : (
          <button
            className="favorite-button"
            onClick={() => agregarFavorito(pelicula)}
          >
            Agregar a favoritos ❤️
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemCard;