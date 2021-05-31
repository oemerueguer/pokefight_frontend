import './App.css';
import axios from 'axios';
import HeaderExampleUsersIcon from './components/Header/header';
import Nav from './components/NavBar/navBar';
import { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Instruction from './components/Instruction/Instruction'
import Footer from './components/Footer/Footer';
import Pokemon from './components/Pokemon/Pokemon';
import About from './components/About/about';
import TypeBoniMali from './components/Combat/TypeBoniMali';

function App() {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
  const [indexOfLastPokemon, setIndexOfLastPokemon] = useState(12)
  const [indexOfFirstPokemon, setIndexOfFirstPokemon] = useState(0)
  const [currentPokemons, setCurrentPokemons] = useState(null)
  let location = useLocation();

  const fetchData = async () => {
    await axios.get(`https://whispering-everglades-58228.herokuapp.com/pokemon`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => console.error(error))
  }

  const paginate = () => {
    if (data) {
      indexOfLastPokemon = currentPage * pokemonsPerPage;
      indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
      currentPokemons = data.slice(indexOfFirstPokemon, indexOfLastPokemon)
    }
  }

  useEffect(() => fetchData(), [])
  useEffect(() => paginate(), [pokemonsPerPage])
  // testing
  console.log(TypeBoniMali)
  //

  return (
    <div className="App">
      {location.pathname !== "/" &&
        <>
          <Nav />
          {/*<HeaderExampleUsersIcon />*/}
        </>
      }
      <Switch>
        <Route exact path="/"><Instruction /></Route>
        <Route exact path="/home" ><HomePage data={currentPokemons} filter={filter} setFilter={setFilter} /></Route>
        <Route exact path="/pokemon/:id"><Pokemon /></Route>
        <Route exact path="/about"><About /></Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
