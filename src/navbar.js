import React from 'react';
import {Link} from 'react-router-dom';
const  Navbar = () =>(
<>
<nav>
<ul>
    <li><Link to="/">HomePage</Link> </li>
    <li><Link to="/articulos">Articulos</Link> </li>
    <li><Link to="/about">About</Link> </li>



</ul>
</nav>
</>

);
export default Navbar;