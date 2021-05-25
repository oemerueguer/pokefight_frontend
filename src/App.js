import { Switch, Route } from 'react-router';
import HomePage from './components/HomePage/HomePage';
import Instruction from './components/Instruction/Instruction'
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path= "/"><Instruction /></Route>
        <Route exact path= "/home"><HomePage /></Route>
        <Route exact path= "/pokemon/:id"></Route>
        <Route exact path= "/footer"><Footer /></Route>
      </Switch>
    </div>
  );
}

export default App;
