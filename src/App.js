import './App.css';
import axios from 'axios';
import Nav from './components/NavBar/navBar';
import { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Instruction from './components/Instruction/Instruction'
import Footer from './components/Footer/Footer';
import Pokemon from './components/Pokemon/Pokemon';
import Pokeball from './components/Pokeball/pokeball';
import About from './components/About/about';
import Leaderboard from './components/Leaderboard/Leaders';




function App() {
  const [data, setData] = useState(null);
  let location = useLocation();

  const fetchData = async () => {
    await axios.get(`https://whispering-everglades-58228.herokuapp.com/pokemon`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => console.error(error))
  }

  useEffect(() => fetchData(), [])

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
        <Route exact path="/home" ><HomePage data={data}/></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/leaderboard"><Leaderboard /></Route>
        <Route exact path="/pokemon/:id"><Pokemon /></Route>
 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
