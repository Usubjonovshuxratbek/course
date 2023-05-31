import React from 'react'
import './Coaching.scss'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Coaching() {
    return (
        <section className='coaching'>
            <div className="container">
                <div className="coaching__inner">
                    <Slide top>
                        <h2 className='title'>How Coaching Works</h2>
                    </Slide>
                    <Fade bottom>
                        <p className='text'>Simple Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.</p>
                    </Fade>
                    <div className="btns">
                    <Fade bottom>
                        <button>lear more</button>
                        </Fade>
                        <Fade bottom>
                        <Link to='/'>live demo</Link>
                        </Fade>
                    </div>
                    <Fade bottom>
                        <p>Image from <a href="/">Freepik</a></p>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Coaching
