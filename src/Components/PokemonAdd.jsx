import React from "react";

export default function PokemonAdd() {
  return (
    <div className="pokemon-grid">
      <div className="not-compatible-large">
        Your screen size is not compatible.
        <p>
          For optimal performance either zoom out, or use a different monitor.
        </p>
      </div>
      <div className="pokemonSprite imgbin_pikachu-pokmon-x-and-y-haunter-gengar-png"></div>
      <h1 className="merch">Brand New Pokémon Merch</h1>
      <div className="pokemonSprite imgbin_pokmon-x-and-y-pokmon-go-ash-ketchum-pikachu-squirtle-png"></div>
      <div className="pokemonSprite imgbin_pokmon-x-and-y-torchic-pokkn-tournament-may-png"></div>
    </div>
  );
}
