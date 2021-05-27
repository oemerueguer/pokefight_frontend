export default function PokeList({ data, filter }) {
  let randSelection = []
  if (data && !filter) {
    let pokemons = data
    for (let i = 1; i <= 10; i++) {
      const randomNumber = Math.floor(Math.random() * pokemons.length);
      const pokemon = pokemons[randomNumber];
      if (randSelection.includes(pokemon)) i--
      else randSelection.push(pokemon);
    }
  } else if (data && filter) {
    let filteredList = data.filter(pokemon => pokemon.type.some(type => type.toLowerCase().includes(filter.toLowerCase())) || pokemon.name.english.toLowerCase().includes(filter.toLowerCase()));
    console.log(filteredList);
    if (filteredList.length >= 10) {
      for (let i = 1; i <= 10; i++) {
        const randomNumber = Math.floor(Math.random() * filteredList.length);
        const pokemon = filteredList[randomNumber];
        if (randSelection.includes(pokemon)) i--
        else randSelection.push(pokemon);
      }
    } else {
      randSelection = filteredList;
    }
    console.log(randSelection);
  }

  return (
    <div className="pokelist">
      {/* <h2>Current Device Type: {point}</h2> */}
      {randSelection.length > 0
        ? randSelection.map(pokemon => <p>{pokemon.name.english}</p>)
        : <p>catching pokemons...</p>
      }
    </div >
  );
}