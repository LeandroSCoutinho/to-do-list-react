const Filter = ({filter, setFilter}) => {
  return (
    <div className="filter">
        <h2>Filter por status:</h2>

        <div className="filter-options">
            <div>
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">Todas</option>
                <option value="finalized">Finalizadas</option>
                <option value="incomplete">Incompletas</option>
              </select>
            </div>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={() => setFilter("Asc")}>Ascendente</button>
          <button onClick={() => setFilter("Desc")}>Decrescente</button>
        </div>
    </div>
  );
};

export default Filter;
