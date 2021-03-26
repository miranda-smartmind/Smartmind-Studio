import React from 'react';
import client1 from "../img/3.jpg";
import client2 from "../img/client2.png";
import client3 from "../img/client2.jpeg";
import client4 from "../img/client1.png"
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
                            <div className="col-md-4 client">
                                <img src={client1} alt="Client 1"/>
                            </div>
                            <div className="col-md-8">
                                <blockquote><FaQuoteLeft/>
                                Miranda and the Team at Smartminds Studios work with you and guide you every step of the way to make sure your website exceeds expectations. It doesn't stop there - 
                                they also help you excellently with SEO and Social Media set-up. I am very much satisfied with my website and the traffic i get. Thanks Smartminds Team
                                <hr className="testimonial-hr"/>
                                <cite>&#8212; Eric, Online Business Owner</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4 client">
                                <img src={client2} alt="Client 2"/>
                            </div>
                            <div className="col-md-8">
                                <blockquote><FaQuoteLeft/>
                                I have worked with other web designing companies before but was never satisfied with the end result. 
                                From start to finish my interaction with the team at Smartminds Studio was professional, 
                                stress-free and I had complete trust in their ability to deliver. Good price point, 
                                you pay for what you get and Smartminds are full value for money.

                                <hr className="testimonial-hr"/>
                                <cite>&#8212; Rachel, Professional Photographer</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4 client">
                                <img src={client3} alt="Client 3"/>
                            </div>
                            <div className="col-md-8">
                                <blockquote><FaQuoteLeft/>
                                Kudos Smartminds Studio team, I'm so grateful for the workdone on my website. A bunch of traffic to my website now, and increased sales.
                                Your team is indeed very creative and talented. I will always recommend you
                               
                                <hr className="testimonial-hr"/>
                                <cite>&#8212; Magarret, CEO - Mags Global</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4 client">
                                <img src={client4} alt="Client 4"/>
                            </div>
                            <div className="col-md-8">
                                <blockquote><FaQuoteLeft/>
                                Very grateful to Smartminds Studio for all the hard work they put into our website and digital marketing, finished product was fantastic. 
                                Miranda is such a pleasure to work with, would recommend them!

                                <hr className="testimonial-hr"/>
                                <cite>&#8212; Earnet, Digital Entrepreneur</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 narrow text-center">
                <p className="lead">Dream Big! Yes, we make your dream a reality!</p>
                <a href="#" class="btn btn-secondary btn-md" target="_blank">Contact Us Now</a>
            </div>
        </div>
    )
}

export default Testimonial
