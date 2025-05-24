import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setPokemon(data.results);
    }
    fetchPokemon();
  }, []);

  return (
    <div className="pokemon-container">
      {pokemon.map((poke, index) => {
        const id = index + 1;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        return (
          <div className="pokemon-card" key={id}>
            <img src={image} alt={poke.name} />
            <h3>{poke.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
