import React from 'react'
import Typed from 'react-typed'
import bg from '../img/image3.png'

const Header = () => {
    return (
        <div id="home" className="offset">
        <div className="home-wrap">
            <div className="home-inner">

            </div>
        </div>
        <div className="header-wraper">
            <div  className="main-info">
                <div className="caption text-center">
                <h1>The Smartminds Studio</h1>
                    <h3>Best in Websites and Graphics</h3>
                    <Typed
                        className = "typed-text"
                        strings = {["Search Engine Optimization", "Website Development", "Digital Marketing", "Website Designing" ]}
                        typeSpeed = {25}
                        backSpeed = {30}
                        loop
                    />
                   <div className="btn-wraper"> <a href="#" class="btn btn-outline-light btn-lg">Tell Us Your Requirements</a>
                   </div>
                </div>
            </div>
            
            
        </div>
        </div>

        
    )
}

export default Header
