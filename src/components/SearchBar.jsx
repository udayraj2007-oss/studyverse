function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">

      <div className="search-wrapper">

        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search Notes, Chapters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

    </div>
  );
}

export default SearchBar;