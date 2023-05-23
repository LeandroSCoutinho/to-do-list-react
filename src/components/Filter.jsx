const Filter = ({filter, setFilter}) => {
  return (
    <div className="filter">
        <h2>Filter:</h2>

        <div className="filter-options">
            <div>
              <p>Status:</p>
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">Todas</option>
                <option value="finalized">Finalizadas</option>
                <option value="incomplete">Incompletas</option>
              </select>
            </div>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button>Ascendente</button>
          <button>Decrescente</button>
        </div>
    </div>
  );
};

export default Filter;
