import { Switch, Route } from 'react-router';
import HomePage from './components/HomePage/HomePage';
import Instruction from './components/Instruction/Instruction'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path= "/"><Instruction /></Route>
        <Route exact path= "/home"><HomePage /></Route>
        <Route exact path= "/pokemon/:id"></Route>
      </Switch>
    </div>
  );
}

export default App;
