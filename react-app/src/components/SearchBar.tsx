type SearchBarProps = {
  searchInput: string;
  setSearchInput: (v: string) => void;
  onSearch: (query: string) => void;
  darkMode: boolean;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
  onSearch,
  darkMode,
}) => {
  return (
    <form
      className="mb-4 d-flex flex-wrap justify-content-center align-items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchInput);
      }}
    >
      <div className="input-group w-100" style={{ maxWidth: 400 }}>
        <input
          type="text"
          className={`form-control ${
            darkMode ? "bg-secondary text-light border-0" : ""
          }`}
          placeholder="Search by title..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{ minWidth: 0 }}
        />
        <button
          type="submit"
          className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
