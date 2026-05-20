import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data.");
        }

        const data = await response.json();
        setPokemonList(data.results);
      } catch (err) {
        setError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonList();
  }, []);

  async function handlePokemonClick(pokemon) {
    try {
      setDetailLoading(true);
      setError("");

      const response = await fetch(pokemon.url);

      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon details.");
      }

      const data = await response.json();
      setSelectedPokemon(data);
    } catch (err) {
      setError("Could not load Pokémon details.");
    } finally {
      setDetailLoading(false);
    }
  }

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="app">
      <header className="hero">
        <h1>NYC Pokédex 🗽⚡</h1>
        <p>Catch the first 151 Pokémon, one card at a time.</p>

        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </header>

      {loading && <p className="message">Loading Pokémon...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <section className="pokemon-grid">
          {filteredPokemon.map((pokemon, index) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              number={index + 1}
              onClick={() => handlePokemonClick(pokemon)}
            />
          ))}
        </section>
      )}

      {detailLoading && <p className="message">Loading details...</p>}

      {selectedPokemon && (
        <PokemonDetail
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </main>
  );
}

export default App;