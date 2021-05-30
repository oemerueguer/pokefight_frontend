import "../Instruction/Instruction.css";
import { Link } from "react-router-dom";

export default function Instruction() {
  return (
    <>
      <div className="gameboy">
        <div className="gameboyScreen">
          <h2>Welcome to our PokeBattle </h2>
          <h3>Read before starting the game </h3>
          <p>
            First of all, you can choose a Pokemon by their element or directly by name via searchbar. After you have selected your desired Pokemon click SELECT. Afterwards choose the Pokemon you want
            to fight against. Finally click the FIGHT button.
            <br />
            <br />
            To start the game press A!
          </p>
        </div>
        <div className="gameboyGrey"></div>
        <div className="keyboard">
          <button className="arrow-left">
            <i class="fas fa-arrow-alt-circle-left fa-3x"></i>
          </button>
          <button className="arrow-up">
            <i class="fas fa-arrow-alt-circle-up fa-3x"></i>
          </button>
          <button className="arrow-right">
            <i class="fas fa-arrow-alt-circle-right fa-3x"></i>
          </button>
          <button className="arrow-down">
            <i class="fas fa-arrow-alt-circle-down fa-3x"></i>
          </button>
        </div>
        <div className="PressBoard">
          <Link to="/home">
            <button className="aPress">A</button>
          </Link>
          <button className="bPress">B</button>
        </div>
      </div>
    </>
  );
}
