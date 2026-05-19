import { useEffect, useState } from "react"

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results)
      })
  }, [])

  return (
    <div>
      <h1>Pokedex</h1>

      {pokemon.map((poke) => (
        <p key={poke.name}>{poke.name}</p>
      ))}
    </div>
  )
}

export default App