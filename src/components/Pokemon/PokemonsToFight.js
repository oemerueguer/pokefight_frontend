import "../HomePage/HomePage.css";

export default function PokemonsToFight(props) {
  return (
    <>
      {
        <h1>
          The Fight Between
          {props.firstPokemon}
          and
          {props.secondPokemon}
          Begins
        </h1>
      }
    </>
  );
}
