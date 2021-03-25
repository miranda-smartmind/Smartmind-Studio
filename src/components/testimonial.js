import React from 'react';
import client1 from "../img/3.jpg";
import client2 from "../img/client2.png";
import {FaQuoteLeft} from "react-icons/fa";

const Testimonial = () => {
    return (
        <div id="testimonial" className="offset">
            <div className="jumbotron">
                <div className="col-12 text-center">
                    <h3 className="heading">Testimonial</h3>
                    <div className="heading-underline"></div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={client1} alt="Client 1"/>
                            </div>
                            <div className="col-md-8">
                                <blockquote><FaQuoteLeft/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                In animi velit pariatur quaerat non, a incidunt eum. Culpa, nulla atque?
                                <hr className="testimonial-hr"/>
                                <cite>&#8212; Eric, Online Business Owner</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={client2} alt="Client 2"/>
                            </div>
                            <div className="col-md-8">
                                <blockquote><FaQuoteLeft/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                In animi velit pariatur quaerat non, a incidunt eum. Culpa, nulla atque?
                                <hr className="testimonial-hr"/>
                                <cite>&#8212; Rachel, Professional Photographer</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 narrow text-center">
                <p className="lead">Tell us what you want and let us do the thinking for you</p>
                <a href="#" class="btn btn-secondary btn-md" target="_blank">Contact Us</a>
            </div>
        </div>
    )
}

export default Testimonial
