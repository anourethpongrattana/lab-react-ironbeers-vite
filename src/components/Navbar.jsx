import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../assets/home-icon.png'

const Navbar = () => {

   const styles = {
      navContainer:{
         width: "100%",
         position: "fixed",
         top: "0",
         display: "flex",
         justifyContent: "center",
         padding: "5px",
         background: "rgb(38, 128, 238)"
      }
   }


    return (
       <nav style={styles.navContainer}>
         <Link to={'/'}>
            <img src={Home} alt="home-icon" />
         </Link>

       </nav>
    );
};

export default Navbar;