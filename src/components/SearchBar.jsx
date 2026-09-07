function SearchBar({ busqueda, setBusqueda, buscar }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    buscar();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar una película..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <button type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;