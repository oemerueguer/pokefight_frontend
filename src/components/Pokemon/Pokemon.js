import "../HomePage/HomePage.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Pokemon(props) {
  const handleClick = () => {
    const pokemonId = props.pokemon.id;
    props.handleAddPokemon(pokemonId);
  };

  return (
    <div className="wrapper">
      <MDBCol>
        <MDBCard style={{ width: "12rem" }}>
          <MDBCardImage
            className="img-fluid"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`}
          />
          <hr />
          <MDBCardBody>
            <MDBCardTitle>{props.pokemon.name.english}</MDBCardTitle>
            <hr />
            <MDBCardText>
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
            <MDBBtn onClick={handleClick}>Select</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
}
