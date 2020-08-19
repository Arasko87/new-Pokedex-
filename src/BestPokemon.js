import React from "react";
const BestPokemon = (props) => {
  return (
    <div>
      <p>My favourie Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((pokemon, index) => (
          <div>
            <li key={index} className="pokemonList">
              {pokemon.toLocaleUpperCase()}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
