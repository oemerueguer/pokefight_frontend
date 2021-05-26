import React from 'react';
import { Link } from 'react-router-dom';



function Nav(props) {
  return (
     <nav className="Nav">
         <ul className="Navlink">
           <li><img src=""/></li>

           <Link to="home">
             <li className="text-warning">Home</li>
           </Link>
           <Link to="about">
             <li className="text-warning">About</li>
           </Link>   
         </ul>
     </nav>  
    
  );
}

export default Nav;
