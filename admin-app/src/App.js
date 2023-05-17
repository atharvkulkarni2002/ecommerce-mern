import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/signin' Component={Signin}/>
            <Route exact path='/signup' Component={Signup}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
