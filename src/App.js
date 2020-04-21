import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Route exact path='/testAppReact' component={Homepage}/>
    <Route exact path='/about' component={About}/>
  </Router>
  );
}

export default App;
