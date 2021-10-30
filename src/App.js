import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
         <Router>
          <Header/>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route exact path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
            <PrivateRoute path="/shipping"><Shipping /></PrivateRoute>
            <PrivateRoute path="/placeorder"><PlaceOrder/></PrivateRoute>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
