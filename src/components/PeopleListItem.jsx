import { useState, useEffect } from "react";

function PeopleListItem(props) {
  const { person } = props;

  const [homeWorld, setHomeWorld] = useState(null);

  useEffect(() => {
    const { homeworld } = person;
    if (homeworld) {
      fetch(homeworld)
        .then((res) => res.json())
        .then((data) => setHomeWorld(data));
    }
  }, [person]);

  return (
    <li>
      <h2>Name: {person.name}</h2>
      {homeWorld && (
        <section>
          <h3>Homeworld: {homeWorld.name}</h3>
          <h4>Climate: {homeWorld.climate}</h4>
          <h4>Terrain: {homeWorld.terrain}</h4>
        </section>
      )}
    </li>
  );
}

export default PeopleListItem;
