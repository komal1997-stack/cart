import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    const openMenu=()=>
    {
      document.querySelector(".sidebar").classList.add("open") ;
    }
    const closeMenu=()=>
    {
      document.querySelector(".sidebar").classList.remove("open") ;
    }
    return(
               <nav className="nav-wrapper"> 
               
               <div className="sidebarbutton"><button onClick={openMenu}>&#9776;</button>
               <aside className="sidebar">
                   
                <h6>Shop By Category</h6>
                
                <button className="sidebar-close-button" onClick={closeMenu}>X</button>
                <ul>
                    <li>
                        <a href="/items/headphones">headphones</a>
                    </li>
                    <li>
                        <a href="/items/speaker">Speaker</a>
                    </li>
                    <li>
                        <a href="/items/Airpods">Airpods</a>
                    </li>
                    <li>
                        <a href="/items/charger">Charger</a>
                    </li>
                </ul>
            </aside></div>               
                <div className="container">  
                              
                    <Link to="/" className="brand-logo">Shopify</Link>
                    </div>
                    <div>
                    <ul className="right">
                        <li><Link to="/LoginScreen">Sign In</Link></li>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                    </div>
                    
                
                <div class="grid-container">
               
            </div>
            
            
            </nav>
           
    )
}

export default Navbar;