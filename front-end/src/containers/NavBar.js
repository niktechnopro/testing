import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class NavBar extends Component{
	render(){
		return(
		<div className="navbar-fixed">

		    <nav className="navbar-material">
		      <div className="nav-wrapper  deep-purple accent-4 row">
		      <Link to='/' ><img className="brand-logo left logo" src="/images/logo2.png" /></Link>
		      
		        
		      
		        <ul className="right hide-on-med-and-down">

		          <li key={1}><Link to="/search">Search</Link></li>
		          <li key={2}><Link to="/register">Sign Up</Link> </li>
		          <li key={3}><Link to="/login">Login</Link> </li>
		        </ul>
		      </div>
		    </nav>
  		</div>


			)
	}
}

export default NavBar; 
