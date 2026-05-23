import { useState, useEffect, useContext } from 'react'
import PokemonCard from './components/PokemonCard.jsx'
import PokemonControls from './components/PokemonControls.jsx'
import { CounterContext } from './context/CounterContext';


function App() {
  const pokemonId = useContext(CounterContext);
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    async function fetchPokemon() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId.count}`
        )

        if (!response.ok) {
          throw new Error('Pokemon not found')
        }

        const data = await response.json()
        console.log(data)
        setPokemon(data)

      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [pokemonId.count])

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {pokemon && <PokemonCard pokemon={pokemon} />}
      <PokemonControls />
    </div>
  )
}

export default App