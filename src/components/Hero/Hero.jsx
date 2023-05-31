import React from 'react'
import './Hero.scss'
import Fade from 'react-reveal/Fade';

function Hero() {
    return (
        <section className='hero'>
            <div className="container">
                <div className="hero__inner">
                    <Fade top>
                        <h2 className='title'>Happiness &
                            <span>Mindfulness Courses</span>
                        </h2>
                    </Fade>
                    <Fade bottom>
                        <p className='text'>Sample text. Click to select the text box. Click again or double click to start editing the text. Viverra maecenas accumsan lacus vel facilisis volutpat. Cras fermentum odio eu feugiat pretium nibh.</p>
                    </Fade>
                    <Fade bottom>
                        <a className='hero-link' href="\">LEARN MORE</a>
                    </Fade>
                    <Fade bottom>
                        <p>Image from <a href="/">Freepik</a></p>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Hero
