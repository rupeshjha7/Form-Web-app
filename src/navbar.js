import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {

    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className = "container">
  <Link to ="/" className="navbar-brand">Routing</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        
        <Link to ="/" className="nav-link">Home</Link>
      </li>
      
      <li className="nav-item">
      <Link to ="/about" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
      <Link to ="/contact" className="nav-link">Contact</Link>
      </li>
      <li className="nav-item">
      <Link to ="/form" className="nav-link">MyForm</Link>
      </li>
      <li className="nav-item">
      <Link to ="/table" className="nav-link">Table</Link>
      </li>
      </ul>
    </div>
    </div>
</nav>
    )
}
export default Navbar;