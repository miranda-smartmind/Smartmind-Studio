import React from 'react'
import logo from '../img/logo.png'
//IMPORTING FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			<div className="container" id="home">
				<a href="#" className="navbar-brand"><img className="logo" src={logo} alt="Smartminds Studio"/></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a href="#home" className="nav-link">Home</a>
						</li>
						<li className="nav-item">
							<a href="#about" className="nav-link">About</a>
						</li>
						<li className="nav-item">
							<a href="#services" className="nav-link">Services</a>
						</li>
						<li className="nav-item">
							<a href="#statistics" className="nav-link">Projects</a>
						</li>
						<li className="nav-item">
							<a href="#testimonial" className="nav-link">Testimonial</a>
						</li>
						<li className="nav-item">
							<a href="#contact" className="nav-link">Contact</a>
						</li>
					</ul>
				</div>
			</div> 
		</nav>              
    )
}

export default Navbar
