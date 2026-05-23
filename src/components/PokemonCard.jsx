import {useState, useEffect} from 'react'
import './PokemonCard.css'

function PokemonCard({ pokemon }) {
    const typeColors = {
    bug: '#A6B91A',
    dark: '#705746',
    dragon: '#6F35FC',
    electric: '#F7D02C',
    fairy: '#D685AD',
    fighting: '#C22E28',
    fire: '#EE8130',
    flying: '#A98FF3',
    ghost: '#735797',
    grass: '#7AC74C',
    ground: '#E2BF65',
    ice: '#96D9D6',
    normal: '#A8A77A',
    poison: '#A33EA1',
    psychic: '#F95587',
    rock: '#B6A136',
    steel: '#B7B7CE',
    stellar: '#40E0D0',
    unknown: '#68A090',
    water: '#6390F0',
  }
  const pokemonType = pokemon.types[0].type.name
  const backgroundColor = typeColors[pokemonType] || '#fff'
  const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    return (
        <div className='container'>
            <div className='pokemon-card' style={{ backgroundColor }}>

                <h2 className='pokemon-name'>{pokemonName}</h2>

                <img className='pokemon-image'
                    src={pokemon.sprites.other.home.front_default} alt={pokemon.name} 
                />

                <div className='stats'>
                    <p>
                        <strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(', ')}

                    </p>
                    <hr />

                    <p><strong>Height:</strong> {pokemon.height}' <strong>Weight:</strong> {pokemon.weight} lbs</p>
                    <hr />
                    <p>
                        <strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}
                    </p>

                </div>

            </div>
        </div>
    )
}

export default PokemonCard