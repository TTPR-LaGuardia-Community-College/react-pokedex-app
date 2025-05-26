import { useEffect, useState } from 'react';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPokemon(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

const fetchDetails = async (url) => {
  try {
    console.log("Fetching from:", url); 
    setDetailsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    console.log("Fetched data:", data); 
    setSelectedPokemon(data);
  } catch (err) {
    console.error("Error fetching details:", err); 
    setError("Failed to load details");
  } finally {
    setDetailsLoading(false);
  }
};


  if (loading) return <p>Loading Pokédex...</p>;
  if (error) return <p>Error: {error}</p>;

return (
  <div className="pokedex-container">
    <ul>
      {pokemon.map((poke, idx) => (
        <li key={idx}>
          <button onClick={() => fetchDetails(poke.url)}>{poke.name}</button>
        </li>
      ))}
    </ul>

    <div>
      {detailsLoading && <p>Loading details...</p>}

      {selectedPokemon && (
        <div className="detail-card">
          <h2>{selectedPokemon.name.toUpperCase()}</h2>
          <img
            src={selectedPokemon.sprites?.front_default}
            alt={selectedPokemon.name}
            width="120"
          />
          <p><strong>Height:</strong> {selectedPokemon.height}</p>
          <p><strong>Weight:</strong> {selectedPokemon.weight}</p>
          <p><strong>Types:</strong> {selectedPokemon.types.map(t => t.type.name).join(', ')}</p>
        </div>
      )}
    </div>
  </div>
);
}

export default PokemonList;
