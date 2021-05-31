import "../HomePage/HomePage.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow
} from "mdb-react-ui-kit";
import './Pokemon.css';

export default function Pokemon(props) {
  const handleClick = () => {
    const pokemonId = props.pokemon.id;
    props.handleAddPokemon(pokemonId);
  };

  return (
    <>
    <div className="allPokemons">
      <div className="PokemonWrapper">
      <MDBCol lg='6' md='6' className='mb-4 mb-md-0 mt-2 PokeCard'>
        <MDBCard className="PokemonsCards">
          <MDBCardImage
            className="img-fluid"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`}
          />
          <hr />
          <MDBCardBody>
            <MDBCardTitle className="PokemonCardTitle">{props.pokemon.name.english}</MDBCardTitle>
            <hr />
            <MDBCardText className="text-center pokemon-description">
              <span className="pokemonStats">
                HP:{"  "}
                <p className="pokemonStatsNum">{props.pokemon.base.HP}</p>
              </span>
              <br />
              <span  className="pokemonStats">
                Attack:{"  "}
                <p className="pokemonStatsNum">{props.pokemon.base.Attack}</p>
              </span>
              <br />
              <span  className="pokemonStats">
                Defense:{"  "}
               <p className="pokemonStatsNum">{props.pokemon.base.Defense}</p>
              </span>
              <br />
              <span  className="pokemonStats">
                Sp.Attack:{"  "}
                <p className="pokemonStatsNum">{props.pokemon.base["Sp. Attack"]}</p>
              </span>
              <br />
              <span  className="pokemonStats">
                Sp.Defense:{"  "}
                <p className="pokemonStatsNum">{props.pokemon.base["Sp. Defense"]}</p>
              </span>
              <br />
              <span  className="pokemonStats">
                Speed:{"  "}
                <p className="pokemonStatsNum">{props.pokemon.base.Speed}</p>
              </span>
              <br />
              <br />
            </MDBCardText>
            <hr />
            <MDBBtn className="bg-danger" onClick={handleClick}>Select</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </div>
      </div>
    </>
  );
}
