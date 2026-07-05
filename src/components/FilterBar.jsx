function FilterBar({ filter, setFilter }) {

  return (

    <div className="filters">

      <button onClick={() => setFilter("all")}>
        📚 All
      </button>

      <button onClick={() => setFilter("class7")}>
        📘 Class 7
      </button>

      <button onClick={() => setFilter("class8")}>
        📗 Class 8
      </button>

      <button onClick={() => setFilter("maths")}>
        📖 Maths
      </button>

      <button onClick={() => setFilter("science")}>
        🧪 Science
      </button>

    </div>

  );

}

export default FilterBar;