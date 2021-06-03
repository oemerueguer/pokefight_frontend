import "./HomePage.css";
import { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import { MDBBtn } from "mdb-react-ui-kit";
import { Fight, Fighter } from "../Combat/Combat";

export default function PokeList({ selection }) {
  const [firstPokemon, setFirstPokemon] = useState(0);
  const [secondPokemon, setSecondPokemon] = useState(0);
  const [ourPokemon, setOurPokemon] = useState(false);
  const [opponentPokemon, setOpponentPokemon] = useState(false);

  const handleAddPokemon = (pokemon) => {
    if (!ourPokemon) {
      console.log(pokemon)
      setFirstPokemon(pokemon);
      setOurPokemon(true);
    } else if (!opponentPokemon) {
      console.log(pokemon);
      setSecondPokemon(pokemon);
      setOpponentPokemon(true);
    }
  };

  const handleClickOurPokemon = () => {
    setFirstPokemon(null);
    setOurPokemon(false);
  };

  const handleClickOpponentPokemon = () => {
    setSecondPokemon(null);
    setOpponentPokemon(false);
  };

  const handleClickFight = (event) => {
    if (firstPokemon && secondPokemon) {
      console.log("The fight begins...");
      console.log(firstPokemon)
      let c1 = new Fighter(
        firstPokemon.name.english,
        firstPokemon.base.HP,
        firstPokemon.base.Attack,
        firstPokemon.base.Defense,
        firstPokemon.base["Sp. Attack"],
        firstPokemon.base["Sp. Defense"],
        firstPokemon.base.Speed,
        firstPokemon.type
      )
      console.log(c1)
      // hp, attack, defense, speedAttack, speedDefense, speed
      let c2 = new Fighter(
        secondPokemon.name.english,
        secondPokemon.base.HP,
        secondPokemon.base.Attack,
        secondPokemon.base.Defense,
        secondPokemon.base["Sp. Attack"],
        secondPokemon.base["Sp. Defense"],
        secondPokemon.base.Speed,
        secondPokemon.type
      )
      console.log(c2)
      const BPSFIGHT = new Fight(c1, c2)
      BPSFIGHT.startFight()
    } else {
      console.log("You need two pokemons to begin the fight !");
    }
  };

  return (
    <>
      {(ourPokemon || opponentPokemon) &&
        <div>
          <br />
          <br />
          <div>
            <div className="vs">
              <div className="vs-pok">{ourPokemon && firstPokemon ?
                <>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${firstPokemon.id}.png`} />
                  <p>{firstPokemon.name.english}</p>
                </>
                : <p>your pokemon</p>
              }
              </div>
              <h1>VS</h1>
              <div className="vs-pok">{opponentPokemon && secondPokemon ?
                <>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${secondPokemon.id}.png`} />
                  <p>{secondPokemon.name.english}</p>
                </>
                : "opponent"}</div>
            </div>
            <MDBBtn onClick={handleClickOurPokemon}>Remove Our Pokemon</MDBBtn>
            <MDBBtn onClick={handleClickOpponentPokemon}>
              Remove Opponent Pokemon
            </MDBBtn>
            <MDBBtn onClick={handleClickFight}>Fight</MDBBtn>
          </div>
          <br />
          <br />
        </div>
      }
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
