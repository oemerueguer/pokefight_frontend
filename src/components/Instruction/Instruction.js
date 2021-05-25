import "../Instruction/Instruction.css";

export default function Instruction() {
  return (
    <>
      <div className="gameboy">
        <div className="gameboyScreen">
          <h2>Welcome to our Pokemon World </h2>
          <h3>This is the instruction to the Game: </h3>
          <p>
            First of all, you need to choose a Pokemon by selecting on the
            desired pokemon and clicking SELECT. Afterwards, I have to choose
            another one with whom you want to fight with. Finally, you can click
            on FIGHT button.
            <br />
            To start, click on A Button.
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
          <button className="aPress">A</button>
          <button className="bPress">B</button>
        </div>
      </div>
    </>
  );
}
