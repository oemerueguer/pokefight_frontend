import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Nav(props) {
  return (
     <nav className="Nav">
         <ul className="Navlink">
           <Link to='/'>
           <li><img className="logo" src="newLogo.png" alt="Logo"/></li>
           </Link>

           <Link to="home">
             <li className="text-warning mob-opt">Home</li>
           </Link>
           <Link to="about">
             <li className="text-warning mob-opt">About</li>
           </Link>   
         </ul>
     </nav>  
    
  );
}

export default Nav;
