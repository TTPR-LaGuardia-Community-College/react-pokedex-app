import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pokemon, setPokemon] = useState([])
  const [details, setDetails] = useState(null)

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setLoading(true)

        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        )

        if (!res.ok) {
          throw new Error("Failed to fetch Pokemon!")
        }

        const data = await res.json()

        setPokemon(data.results)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [])

  async function fetchDetails(url) {
    try {
      setLoading(true)

      const res = await fetch(url)

      if (!res.ok) {
        throw new Error("Failed to fetch Pokemon details!")
      }

      const info = await res.json()

      setDetails(info)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1>PokeDex</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {pokemon.map((poke, index) => (
          <button
            key={index}
            onClick={() => fetchDetails(poke.url)}
          >
            {poke.name}
          </button>
        ))}
      </div>

      {details && (
        <div style={{ marginTop: "20px" }}>
          <h2>{details.name}</h2>

          <img
            src={details.sprites.front_default}
            alt={details.name}
          />

          <p>Height: {details.height}</p>
          <p>Weight: {details.weight}</p>

          <p>
            Types:
            {details.types.map((type, index) => (
              <span key={index}> {type.type.name}</span>
            ))}
          </p>
        </div>
      )}
    </>
  )
}

export default App