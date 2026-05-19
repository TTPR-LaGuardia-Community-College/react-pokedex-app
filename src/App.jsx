import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

    const fetchPokemonList = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon list.");
        }

        const data = await response.json();
        setPokemonList(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  const fetchPokemonDetails = async (pokemonUrl) => {
    try {
      const response = await fetch(pokemonUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon details.");
      }

      const data = await response.json();
      setSelectedPokemon(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="app">
      <header className="hero">
        <h1>NYC Pokédex 🗽</h1>
        <p>Search through the original 151 Pokémon.</p>
      </header>

      {loading && <p className="message">Loading Pokémon...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <section className="pokemon-grid">
          {pokemonList.map((pokemon, index) => (
            <button
              key={pokemon.name}
              className="pokemon-card"
              onClick={() => fetchPokemonDetails(pokemon.url)}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
              />
              <h2>{pokemon.name}</h2>
              <p>#{index + 1}</p>
            </button>
          ))}
        </section>
      )}

      {selectedPokemon && (
        <section className="detail-box">
          <button className="close-btn" onClick={() => setSelectedPokemon(null)}>
            Close
          </button>

          <img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />

          <h2>{selectedPokemon.name}</h2>

          <p>
            <strong>Height:</strong> {selectedPokemon.height}
          </p>

          <p>
            <strong>Weight:</strong> {selectedPokemon.weight}
          </p>

          <p>
            <strong>Type:</strong>{" "}
            {selectedPokemon.types.map((item) => item.type.name).join(", ")}
          </p>
        </section>
      )}
    </main>
  );
}

export default App;