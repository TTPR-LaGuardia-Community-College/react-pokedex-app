
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${count}`;

    const url2 = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    const fetchPokemon = () => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`This aint working b/c ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          console.log(json.species.name);
          // Maybe you should change the state like this:
          setData(json);
        })
        .catch((error) => {
          console.error(error.message);
        })

      fetch(url2)
        .then(res => res.json())
        .then(json => {
          setPokemon(json.results);
        })
    }
    fetchPokemon();

  }, [count])

  return (
    <>
      <div className="card">
        <button>
          {pokemon.map(pokemon => (
            <div key={pokemon.name}>
              {pokemon.name}
            </div>
          ))}
        </button>

      </div>

      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>

        <p>

          {data ? `Pokemon: ${data.species.name}` : 'Loading...'}
        </p>

      </div>
    </>
  )
}

export default App

