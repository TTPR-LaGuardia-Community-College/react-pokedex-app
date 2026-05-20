function PokemonDetail({ pokemon, onClose }) {
    return (
      <section className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
  
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="detail-img"
          />
  
          <h2>{pokemon.name}</h2>
  
          <p>
            <strong>Height:</strong> {pokemon.height}
          </p>
  
          <p>
            <strong>Weight:</strong> {pokemon.weight}
          </p>
  
          <p>
            <strong>Type:</strong>{" "}
            {pokemon.types.map((item) => item.type.name).join(", ")}
          </p>
  
          <p>
            <strong>Abilities:</strong>{" "}
            {pokemon.abilities.map((item) => item.ability.name).join(", ")}
          </p>
        </div>
      </section>
    );
  }
  
  export default PokemonDetail;