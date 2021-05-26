
import './App.css';
import HeaderExampleUsersIcon from './components/header';
import Nav from './components/navBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/about';


function App() {
  return (
    <div className="App">
    <HeaderExampleUsersIcon />
    <Router>
      
        <Nav />
        <Switch>
          <Route path="/" exact components={Home} />
          <Route path="/about" component={About} />
        </Switch>
     
    </Router>
    </div>
  );
}

const Home = () => {
  <div>
    <h1>Home</h1>
  </div>;
};

export default App;
