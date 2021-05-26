import React from 'react';
import { Link } from 'react-router-dom';



function Nav(props) {
  return (
     <nav className="Nav">
         <ul className="Navlink">
           <Link to="about">
             <li>About</li>
           </Link>
           <Link to="home">
             <li>Home</li>
           </Link>   
         </ul>
     </nav>  
    
  );
}

export default Nav;
