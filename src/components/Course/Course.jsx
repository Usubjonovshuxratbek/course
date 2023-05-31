import React from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import './Course.scss'

function Course() {
    return (
        <div className='course'>
            <div className="container">
                <div className="course__inner">
                    <div className="right">
                        <Fade left>
                        <h2>
                            <h3>Each course of the program comprises:</h3>
                            <h4>Tech Skills</h4>
                            <p>We help businesses to innovate and grow by strengthening their ideas with our customized software solutions for multiple industries which includes healthcare, blockchain, education, insurance and many more</p>
                            <Fade bottom>
                                <Link to='/'>lear more</Link>
                            </Fade>
                        </h2>
                        </Fade>
                    </div>
                    <div className="center">
                        <img src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/edaa5e11cbf25912ba08677a/Untitled-1.png" alt="" />
                        <Fade bottom>
                            <p>Image from <a href="/">Freepik</a></p>
                        </Fade>
                    </div>
                    <div className="left">
                        <div className="block-1">
                            <h2><CountUp end={65} />%</h2>
                            <h3>Sample Headline</h3>
                            <p>Sample text. Click to select the Text Element.</p>
                        </div>
                        <div className="block-2">
                            <h2><CountUp end={20} />%</h2>
                            <h3>Sample Headline</h3>
                            <p>Sample text. Click to select the Text Element.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course
