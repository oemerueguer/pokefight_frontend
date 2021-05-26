import "../HomePage/HomePage.css";
import { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function PokemonsToFight(props) {
  const [firstPokemon, setFirstPokemon] = useState(props.firstPokemon);
  const [secondPokemon, setSecondPokemon] = useState(props.secondPokemon);
  const [ourPokemon, setOurPokemon] = useState(props.ourPokemon);
  const [opponentPokemon, setOpponentPokemon] = useState(props.opponentPokemon);

  useEffect(() => {
    setFirstPokemon(props.firstPokemon);
    setSecondPokemon(props.secondPokemon);
    setOurPokemon(props.ourPokemon);
    setOpponentPokemon(props.opponentPokemon);
  }, [props]);

  const handleClickOurPokemon = () => {
    setFirstPokemon(0);
    setOurPokemon(false);
    props.handleRemovePokemon(
      firstPokemon,
      secondPokemon,
      ourPokemon,
      opponentPokemon
    );
  };

  const handleClickOpponentPokemon = () => {
    setSecondPokemon(0);
    setOpponentPokemon(false);
    props.handleRemovePokemon(
      firstPokemon,
      secondPokemon,
      ourPokemon,
      opponentPokemon
    );
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
            <MDBBtn>Fight</MDBBtn>
          </div>
        ) : (
          <div></div>
        )}
        <br />
        <br />
      </div>
    </>
  );
}
