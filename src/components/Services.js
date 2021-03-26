import seo from "../img/seo.png"
import ux from "../img/ux.png"
import wd from "../img/web development.png"
import dm from "../img/digital marketing.png"
import React from 'react'

const Services = () => {
    return (
        <div id="services" className="offset">
            <div className="jumbotron">
                <div className="narrow">
                    <div className="col-12 text-center">
                        <h3 className="heading">Services</h3>
                        <div className="heading-underline"></div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-3">
                            <div className="service">
                             <img src={ux} alt="Wed Design" className="ux"/>
                                <h3>UI/UX Designs</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="service">
                             <img src={seo} alt="SEO" className="seo"/>
                                <h3>SEO</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="service">
                             <img src={wd} alt="Web Develipment" className="wd"/>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="service">
                             <img src={dm} alt="Digital Marketing" className="dm"/>
                                <h3>Digital Marketing</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services
