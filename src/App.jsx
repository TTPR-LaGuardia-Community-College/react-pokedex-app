import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import PokemonList from "./components/PokemonList";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const res = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=151");
        if (!res.ok) throw new Error("Failed to fetch Pokemon!");
        const data = await res.json();
        setPokemonList(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  if (loading) return <p>🌀 Loading Pokémon...</p>;
  if (error) return <p>❌ {error}</p>

  return (
    <div className='App'>
      <h1>🗽 NYC Pokédex</h1>
      <PokemonList pokemonList = {pokemonList}/>
    </div>
  );
    //const url = `https://pokeapi.co/api/v2/pokemon/${count}`;

}

export default App
