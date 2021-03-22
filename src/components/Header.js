import React from 'react'
import Typed from 'react-typed'
import bg from '../laptop-pic.png'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>The Best in Websites and Graphics</h1>
                <Typed
                    className = "typed-text"
                    strings = {["Web Design", "Web Development", "Digital Marketing", "Search Engine Optimization"]}
                    typeSpeed = {25}
                    backSpeed = {30}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
