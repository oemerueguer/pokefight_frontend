import './HomePage.css';

export default function HomeTypeIcons({setFilter}) {
  const handleClick = (value) => {
    setFilter(value)
  }
  
  return (
    <div className="wrapper">
      <div className="icon bug" onClick={() => handleClick("Bug")}>
        <img src="./typeIcons/bug.svg" alt="Bug"/>
        <span className="tooltip">Bug</span>
      </div>
      <div className="icon dark" onClick={() => handleClick("Dark")}>
        <img src="./typeIcons/dark.svg" alt="Dark"/>
        <span className="tooltip">Dark</span>
      </div>
      <div className="icon dragon" onClick={() => handleClick("Dragon")}>
        <img src="./typeIcons/dragon.svg" alt="Dragon"/>
        <span className="tooltip">Dragon</span>
      </div>
      <div className="icon electric" onClick={() => handleClick("Electric")}>
        <img src="./typeIcons/electric.svg" alt="Electric"/>
        <span className="tooltip">Electric</span>
      </div>
      <div className="icon fairy" onClick={() => handleClick("Fairy")}>
        <img src="./typeIcons/fairy.svg" alt="Fairy"/>
        <span className="tooltip">Fairy</span>
      </div>
      <div className="icon fighting" onClick={() => handleClick("Fighting")}>
        <img src="./typeIcons/fighting.svg" alt="Fighting"/>
        <span className="tooltip">Fighting</span>
      </div>
      <div className="icon fire" onClick={() => handleClick("Fire")}>
        <img src="./typeIcons/fire.svg" alt="Fire"/>
        <span className="tooltip">Fire</span>
      </div>
      <div className="icon flying" onClick={() => handleClick("Flying")}>
        <img src="./typeIcons/flying.svg" alt="Flying"/>
        <span className="tooltip">Flying</span>
      </div>
      <div className="icon ghost" onClick={() => handleClick("Ghost")}>
        <img src="./typeIcons/ghost.svg" alt="Ghost"/>
        <span className="tooltip">Ghost</span>
      </div>
      <div className="icon grass" onClick={() => handleClick("Grass")}>
        <img src="./typeIcons/grass.svg" alt="Grass"/>
        <span className="tooltip">Grass</span>
      </div>
      <div className="icon ground" onClick={() => handleClick("Ground")}>
        <img src="./typeIcons/ground.svg" alt="Ground"/>
        <span className="tooltip">Ground</span>
      </div>
      <div className="icon ice" onClick={() => handleClick("Ice")}>
        <img src="./typeIcons/ice.svg" alt="Ice"/>
        <span className="tooltip">Ice</span>
      </div>
      <div className="icon normal" onClick={() => handleClick("Normal")}>
        <img src="./typeIcons/normal.svg" alt="Normal"/>
        <span className="tooltip">Normal</span>
      </div>
      <div className="icon poison" onClick={() => handleClick("Poison")}>
        <img src="./typeIcons/poison.svg" alt="Poison"/>
        <span className="tooltip">Poison</span>
      </div>
      <div className="icon psychic" onClick={() => handleClick("Psychic")}>
        <img src="./typeIcons/psychic.svg" alt="Psychic"/>
        <span className="tooltip">Psychic</span>
      </div>
      <div className="icon rock" onClick={() => handleClick("Rock")}>
        <img src="./typeIcons/rock.svg" alt="Rock"/>
        <span className="tooltip">Rock</span>
      </div>
      <div className="icon steel" onClick={() => handleClick("Steel")}>
        <img src="./typeIcons/steel.svg" alt="Steel"/>
        <span className="tooltip">Steel</span>
      </div>
      <div className="icon water" onClick={() => handleClick("Water")}>
        <img src="./typeIcons/water.svg" alt="Water"/>
        <span className="tooltip">Water</span>
      </div>
    </div>
  );
}