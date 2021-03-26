import {CgWorkAlt} from 'react-icons/cg';
import {RiOpenArmLine} from 'react-icons/ri';
import {RiTeamLine} from 'react-icons/ri';
import React from 'react'

const Statistics = () => {
    return (
        <div id="statistics" className="offset">
            <div className="fixed-background">
                <div className="row dark text-center">
                    <div className="col-12">
                        <h3 className="heading">What Makes Us Unique</h3>
                        <div className="heading-underline"></div>
                    </div>
                    <div className="col-md-4">
                        <h3>5 Years of Experience</h3>
                        <div className="statisics">
                            <CgWorkAlt/>
                        </div>
                        <p className="lead">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>15 Dedicated Team Players</h3>
                        <div className="statisics">
                            <RiTeamLine/>
                        </div>
                        <p className="lead">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>50 Satisfied Customers</h3>
                        <div className="statisics">
                            <RiOpenArmLine/>
                        </div>
                        <p className="lead">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="fixed-wrap">
                    <div className="fixed">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics
