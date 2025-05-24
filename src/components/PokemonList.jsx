import PokemonCard from "./PokemonCard";

function PokemonList({ pokemonList }) {
    return (
        <div className="pokemon-grid">
            {pokemonList.map((poke, idx) => (
                <PokemonCard key={poke.name} name={poke.name} url={poke.url}/>
            ))}            
        </div>
    );
}

export default PokemonList;