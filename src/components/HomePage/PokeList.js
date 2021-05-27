import "./HomePage.css";
import { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import PokemonsToFight from "../Pokemon/PokemonsToFight";
import { MDBBtn } from "mdb-react-ui-kit";

export default function PokeList({ data, filter }) {
  const [firstPokemon, setFirstPokemon] = useState(0);
  const [secondPokemon, setSecondPokemon] = useState(0);
  const [ourPokemon, setOurPokemon] = useState(false);
  const [opponentPokemon, setOpponentPokemon] = useState(false);

  let randSelection = [];
  if (data && !filter) {
    let pokemons = data;
    for (let i = 1; i <= 12; i++) {
      const randomNumber = Math.floor(Math.random() * pokemons.length);
      const pokemon = pokemons[randomNumber];
      if (randSelection.includes(pokemon)) i--;
      else randSelection.push(pokemon);
    }
  } else if (data && filter) {
    let filteredList = data.filter(
      (pokemon) =>
        pokemon.type.some((type) =>
          type.toLowerCase().includes(filter.toLowerCase())
        ) || pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(filteredList);
    if (filteredList.length >= 12) {
      for (let i = 1; i <= 12; i++) {
        const randomNumber = Math.floor(Math.random() * filteredList.length);
        const pokemon = filteredList[randomNumber];
        if (randSelection.includes(pokemon)) i--;
        else randSelection.push(pokemon);
      }
    } else {
      randSelection = filteredList;
    }
    console.log(randSelection);
  }

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
        {randSelection.length > 0 ? (
          randSelection.map((pokemon, index) => {
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
