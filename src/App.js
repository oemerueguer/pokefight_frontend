import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router';
import HomePage from './components/HomePage/HomePage';
import Instruction from './components/Instruction/Instruction'
import Footer from './components/Footer/Footer';
import Pokemon from './components/Pokemon/Pokemon';
import './App.css';
import axios from 'axios';
import PokemonImg from 'pokemon-images';

function App() {

  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const fetchData = async () => {
    await axios.get(`https://whispering-everglades-58228.herokuapp.com/pokemon${query}`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => console.error(error))
  }

  /* // testing
  //
  if (data) {
    let SquirtleImg = PokemonImg.getSprite('squirtle');
    console.log(SquirtleImg)
    let errpok = data.find(pokemon => pokemon.id = 83)
    errpok.name.english = "Farfetched"
    data && setTimeout(function () {
      for (let i = 0; i < data.length; i++) {
        console.log(i)
        let pk = data[i].name.english
        data[i].img = PokemonImg.getSprite(pk)
      };
      console.log(data)
    }, 3000);
  }
  // */



  useEffect(() => fetchData(), [query])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Instruction /></Route>
        <Route exact path="/home" ><HomePage data={data} query={query} setQuery={setQuery} /></Route>
        <Route exact path="/pokemon/:id"><Pokemon /></Route>
        <Route exact path= "/footer"><Footer /></Route>
      </Switch>
    </div>
  );
}

export default App;
