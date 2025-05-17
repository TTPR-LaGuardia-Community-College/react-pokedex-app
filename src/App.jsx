import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [shiny, setShiny] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}`);
        const pokemon = await res.json();

        const speciesRes = await fetch(pokemon.species.url);
        const species = await speciesRes.json();
        const englishEntry = species.flavor_text_entries.find(e => e.language.name === "en");

        setData({
          name: pokemon.name,
          sprites: pokemon.sprites,
          types: pokemon.types.map(t => t.type.name),
        });

        setDescription(englishEntry?.flavor_text || 'No description available.');
      } catch (err) {
        console.error(err);
        setData(null);
        setDescription('');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [count]);

  const getSprite = () => {
    if (!data?.sprites) return '';
    return shiny ? data.sprites.front_shiny : data.sprites.front_default;
  };

  return (
    <div className="pokedex">
      <div className="panel left-panel">
        <div className="pokemon-name screen">
          {loading ? 'Loading...' : (
            <>
              {data?.name}
              <span className="name-no">no. {count}</span>
            </>
          )}
        </div>

        <div className="pokemon-sprite flex-center">
          {getSprite() && (
            <img
              className="pokemon-sprite-small"
              src={getSprite()}
              alt={data?.name}
            />
          )}
        </div>

        <div className="sprite-controls">
          <div
            className={`sprite-control sprite-controls-shiny ${shiny ? 'sprite-control-selected' : ''}`}
            onClick={() => setShiny(prev => !prev)}
          >
            <span>shiny</span>
          </div>
        </div>

        <div className="pokemon-description screen">
          {loading ? 'Loading description...' : description}
        </div>

        <div className="type-list">
          <div className="panel-header">Types</div>
          <div className="type-box">
            {data?.types.map(type => (
              <div className={`type ${type}`} key={type}>
                {type}
              </div>
            ))}
          </div>
        </div>

        <div className="panel-row controls">
          <button className="button" onClick={() => setCount(c => Math.max(1, c - 1))}>
            <span className="prev" />
          </button>
          <input
            className="screen num-input"
            type="number"
            value={count}
            onChange={e => setCount(Number(e.target.value))}
          />
          <div className="submit" onClick={() => setCount(count)} />
          <button className="button" onClick={() => setCount(c => c + 1)}>
            <span className="next" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


