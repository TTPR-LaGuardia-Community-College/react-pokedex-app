import { useEffect, useState } from "react";

function PokemonDetail({ url, onClose }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchDetail() {
            const res = await fetch(url);
            const data = await res.json();
            setPokemon(data);
        }
        fetchDetail();
    }, [url]);

    if (!pokemon) return <p>Loading Details...</p>;

    return (
        <div className="modal">
            <button onClick={onClose}>Close</button>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <p>Type: {pokemon.types.map(t => t.type.name).join(", ")}</p>
        </div>
    );
}

export default PokemonDetail;