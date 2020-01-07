import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import HomePage from './paginas/HomePage';
import About from './paginas/About';
import ArticulesListPage from './paginas/ArticulesListPage';
import Articulo from './paginas/Articulo';
import Navbar from './navbar';
import NoFoundPage from './paginas/NoFoundPage';


function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Navbar></Navbar>
          <Switch>
          <Route path='/' component={HomePage} exact></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/articulos' component={ArticulesListPage}></Route>
          <Route path='/articulo/:name' component={Articulo}></Route>
          <Route component={NoFoundPage}></Route>
          </Switch>

        </div>

      </div>
    </Router>

  );
}

export default App;
