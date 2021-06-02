import "./HomePage.css";
import { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import { MDBBtn } from "mdb-react-ui-kit";

export default function PokeList({selection}) {
  const [firstPokemon, setFirstPokemon] = useState(0);
  const [secondPokemon, setSecondPokemon] = useState(0);
  const [ourPokemon, setOurPokemon] = useState(false);
  const [opponentPokemon, setOpponentPokemon] = useState(false);

  const handleAddPokemon = (pokemonId) => {
    if (!ourPokemon) {
      setFirstPokemon(pokemonId);
      setOurPokemon(true);
    } else {
      if (!opponentPokemon) {
        setSecondPokemon(pokemonId);
        setOpponentPokemon(true);
      }
    }
  };

  const handleClickOurPokemon = () => {
    setFirstPokemon(0);
    setOurPokemon(false);
  };

  const handleClickOpponentPokemon = () => {
    setSecondPokemon(0);
    setOpponentPokemon(false);
  };

  const handleClickFight = (event) => {
    if (firstPokemon && secondPokemon) {
      console.log("The fight begins...");
    } else {
      console.log("You need two pokemons to begin the fight !");
    }
  };

  return (
    <>
      <div>
        <br />
        <br />
        {ourPokemon || opponentPokemon ? (
          <div>
            <h1>
              {firstPokemon} VS {secondPokemon}
            </h1>
            <MDBBtn onClick={handleClickOurPokemon}>Remove Our Pokemon</MDBBtn>
            <MDBBtn onClick={handleClickOpponentPokemon}>
              Remove Opponent Pokemon
            </MDBBtn>
            <MDBBtn onClick={handleClickFight}>Fight</MDBBtn>
          </div>
        ) : (
          <div></div>
        )}
        <br />
        <br />
      </div>
      <div className="wrapper">
        {selection ? (
          selection.map((pokemon, index) => {
            return (
              <Pokemon
                key={index}
                pokemon={pokemon}
                handleAddPokemon={handleAddPokemon}
              />
            );
          })
        ) : (
          <p>catching pokemons...</p>
        )}
      </div>
    </>
  );
}
