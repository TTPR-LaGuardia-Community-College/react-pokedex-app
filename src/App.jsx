import { useState, useEffect } from 'react'
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        const detailFetches = data.results.map((p) =>
          fetch(p.url).then((r) => r.json())
        );
        return Promise.all(detailFetches);
      })
      .then((details) => {
        setPokemon(details);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="container">
      <h1>🗽 NYC Pokédex ⚡</h1>

      <div className="grid">
        {pokemon.map((poke) => (
          <div
            key={poke.name}
            className="card"
            onClick={() => setSelectedPokemon(poke)}
          >
            <img src={poke.sprites.front_default} alt={poke.name} />
            <p>{poke.name}</p>
          </div>
        ))}
      </div>

      {selectedPokemon && (
  <>
    <div className="overlay" onClick={() => setSelectedPokemon(null)} />
    <div className="details">
      <h2>{selectedPokemon.name}</h2>
      <img
        className="pokemon-img"
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
      />
      <p>Height: {selectedPokemon.height}</p>
      <p>Weight: {selectedPokemon.weight}</p>
      <button onClick={() => setSelectedPokemon(null)}>Close</button>
    </div>
  </>
)}
    </div>
  );
}

export default App