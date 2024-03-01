import { useState } from "react";

function SearchForm(props) {
  const { setSearchQuery } = props;

  const [search, setSearch] = useState("");

  function handleSearchInput(event) {
    const inputValue = event.target.value;

    setSearch(inputValue);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSearchQuery(search);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleSearchInput}
        value={search}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
