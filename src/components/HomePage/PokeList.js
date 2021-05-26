export default function PokeList({ data }) {
  const selection = []
  if (data) {
    let pokemons = data
    for (let i = 1; i <= 10; i++) {
      const randomNumber = Math.floor(Math.random() * 20);
      const pokemon = pokemons.splice(randomNumber, 1)[0];
      selection.push(pokemon);
    }
    console.log(selection)
  }


  return (
    <div className="pokelist">
      {selection.length > 0 ? selection.map(pokemon => <p>{pokemon.name.english}</p>) : <p>catching pokemons...</p>}
    </div>
  );
}