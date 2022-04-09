import React from "react";
import './Navbar.css';


const Navbar=()=> {

    const clickToOpen =()=>{
        
    };

    return (
        <div class="navbar">
            <div class='title'>Employee Dashboard</div>
            <div class='menu-container'>
              <div class="menu" onClick={clickToOpen}>Home</div>
              <div class="menu" onClick={clickToOpen}>Login</div>
              <div class="menu" onClick={clickToOpen}>Register</div>
              <div class="menu" onClick={clickToOpen}>Employee</div>    
            </div>
        </div>

        
    
    );
};


export default Navbar;