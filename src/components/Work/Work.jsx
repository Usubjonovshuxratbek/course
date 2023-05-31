import React from 'react'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import './Work.scss'

function Work() {
    return (
        <section className='work'>
            <div className="container">
                <div className="work__inner">
                    <Slide top>
                        <h2>Benefits of working with us</h2>
                    </Slide>
                    <div className="work-cards">
                        <Fade bottom>
                            <div className="card-1">
                                <span>01</span>
                                <h3>Hight Quality</h3>
                                <p>Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="card-2">
                                <span>02</span>
                                <h3>Creative Team</h3>
                                <p>Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="card-3">
                                <span>03</span>
                                <h3>Amazing Results</h3>
                                <p>Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="card-4">
                                <span>04</span>
                                <h3>Best Pricing</h3>
                                <p>Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="card-5">
                                <span>05</span>
                                <h3>Hight Quality</h3>
                                <p>Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis</p>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="card-6">
                                <span>06</span>
                                <h3>24/7 Support</h3>
                                <p>Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
