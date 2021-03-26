import React from 'react'
import logo from '../img/logo.png'
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa"

const Contact = () => {
    return (
        <div id="contact" className="offset">
            <footer>
                <div className="row justify-content-center">
                   
                    <div className="col-md-5 text-center">
                    <img className="logo" src={logo} alt="Smartminds Studio"/>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quod dolorum perferendis necessitatibus laborum explicabo 
                        tenetur quas aspernatur ipsum soluta a.</p>
                    <strong>Contact Information</strong>
                    <p>Phone: (237) 653-584-048<br/>Email: miranda.smartmind@gmail.com</p>
                    <div className="social-icons">
                        <FaFacebookSquare/><FaInstagramSquare/><FaLinkedin/><FaTwitterSquare/>
                    </div>
                    </div>
                    <hr className="socket"/>
                    &copy; The Smartminds Studio
                    
                </div>
            </footer>
        </div>
    )
}

export default Contact
