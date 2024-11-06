const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="">Find contacts by name</label>
      <input
        type="text"
        name="search"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};
export default SearchBox;
