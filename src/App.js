import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router';
import HomePage from './components/HomePage/HomePage';
import Instruction from './components/Instruction/Instruction'
import Footer from './components/Footer/Footer';
import Pokemon from './components/Pokemon/Pokemon';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("");
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
      <Switch>
        <Route exact path="/"><Instruction /></Route>
        <Route exact path="/home" ><HomePage data={data} filter={filter} setFilter={setFilter} /></Route>
        <Route exact path="/pokemon/:id"><Pokemon /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
