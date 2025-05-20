import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonList from './components/PokemonList.jsx'


function App() {
  const [count, setCount] = useState(1)
  const [data, setData] = useState(null)

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${count}`;

    const fetchPokemon = () => {
      fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw new Error(`This aint working b/c ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log(json.species.name);
        // Maybe you should change the state like this:
        setData(json);
      })
      .catch((error)=> {
        console.error(error.message);
      })
    }
    fetchPokemon();

  }, [count])

  return (
    <div className="card">
      <button onClick={() => setCount((prev) => Math.max(1, prev - 1))}>
  Previous
</button>
<button onClick={() => setCount((prev) => prev + 1)}>
  Next
</button>

  <p>
    {data ? (
      <PokemonList pokemon={data} />
    ) : (
      'Loading...'
    )}
  </p>
</div>
  )
}

export default App
