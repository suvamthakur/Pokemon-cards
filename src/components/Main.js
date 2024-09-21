import { useEffect, useState } from "react";
import Card from "./Card";
import { IoSearch } from "react-icons/io5";

const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch pokemon data
  useEffect(() => {
    getData();
  }, []);

  console.log(searchText);

  const getData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    console.log(data.results);
    setPokemons(data.results);
  };

  return (
    <div>
      <div className="header">
        <h1 className="title">Pokemons</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IoSearch className="search-icon" />
        </div>
      </div>

      <div className="cards-container">
        {pokemons.length > 0 &&
          pokemons.map(
            (pokemon, index) =>
              // Only show the searched pokemon card
              pokemon.name.includes(searchText) && (
                // Using index as key as no unique ID is provided in API data
                <Card key={index} pokemonData={pokemon} />
              )
          )}
      </div>
    </div>
  );
};
export default Main;
