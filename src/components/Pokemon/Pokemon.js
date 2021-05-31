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
    <MDBRow className="PokemonWrapper">
      <MDBCol lg='6' md='6' className='mb-4 mb-md-0 mt-2 PokeCard'>
        <MDBCard>
          <MDBCardImage
            className="img-fluid"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`}
          />
          <hr />
          <MDBCardBody>
            <MDBCardTitle>{props.pokemon.name.english}</MDBCardTitle>
            <hr />
            <MDBCardText className="text-center pokemon-description">
              <span>
                HP:{"  "}
                {props.pokemon.base.HP}
              </span>
              <br />
              <span>
                Attack:{"  "}
                {props.pokemon.base.Attack}
              </span>
              <br />
              <span>
                Defense:{"  "}
                {props.pokemon.base.Defense}
              </span>
              <br />
              <span>
                Sp. Attack:{"  "}
                {props.pokemon.base["Sp. Attack"]}
              </span>
              <br />
              <span>
                Sp. Defense:{"  "}
                {props.pokemon.base["Sp. Defense"]}
              </span>
              <br />
              <span>
                Speed:{"  "}
                {props.pokemon.base.Speed}
              </span>
              <br />
              <br />
            </MDBCardText>
            <hr />
            <MDBBtn className="bg-danger" onClick={handleClick}>Select</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
    </>
  );
}
