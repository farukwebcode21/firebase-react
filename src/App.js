import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route exact path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
