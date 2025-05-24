import { useState } from "react";
import PokemonDetail from "./PokemonDetail";

function PokemonCard({ name, url }) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <>
        <div className="pokemon-card" onClick={() => setShowDetail(true)} tabIndex="0">
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        </div>
        {showDetail && <PokemonDetail url={url} onClose={() => setShowDetail(false)}/>}
        </>
    );
}

export default PokemonCard;