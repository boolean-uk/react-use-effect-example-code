import { useState, useEffect } from "react";

import "./App.css";
import SearchForm from "./components/SearchForm";
import PeopleList from "./components/PeopleList";

function App() {
  const [people, setPeople] = useState([]);

  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (!searchQuery) return;

    fetch(`https://swapi.dev/api/people/?search=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
  }, [searchQuery]);

  return (
    <div className="app">
      <SearchForm setSearchQuery={setSearchQuery} />
      <PeopleList people={people} />
    </div>
  );
}

export default App;
