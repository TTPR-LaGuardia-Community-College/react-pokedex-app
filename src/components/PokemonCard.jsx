function PokemonCard({ pokemon, number, onClick }) {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
  
    return (
      <button className="pokemon-card" onClick={onClick}>
        <img src={imageUrl} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        <p>#{number}</p>
      </button>
    );
  }
  
  export default PokemonCard;