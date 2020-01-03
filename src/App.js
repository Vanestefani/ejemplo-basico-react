import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import HomePage from './paginas/HomePage';
import About from './paginas/About';
import Articulos from './paginas/Articulos';
import Articulo from './paginas/Articulo';
import Navbar from './navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Navbar></Navbar>
          <Route path='/' component={HomePage} exact></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/articulos' component={Articulos}></Route>
          <Route path='/articulo/:name' component={Articulo}></Route>
        </div>

      </div>
    </Router>

  );
}

export default App;
