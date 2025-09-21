const Search = (props) => {
  const { onSearch } = props;
  return (
    <>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={onSearch}
      />
    </>
  );
};

export default Search;
