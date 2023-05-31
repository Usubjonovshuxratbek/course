import React from 'react'
import './Footer.scss'
import { Fade } from 'react-reveal'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="right">
                        <Fade left>
                            <h2 className='title'>Start using Our App for free</h2>
                            <p className='text-1'>Access all Xero features for 30 days, then decide which plan best suits your business.</p>
                            <form className='form' action="#">
                                <input className='input' type="text" placeholder='Enter a valid email address' />
                                <button className='button'>submit</button>
                            </form>
                            <p className='text-2'>Or<a href="/" target="_blank">compare plans from $17 per month</a></p>
                        </Fade>
                    </div>
                    <div className="left">
                        <Fade right>
                            <div className="left-box">
                                <i className="bi bi-check"></i>
                                <p>Safe and secure</p>
                            </div>
                            <div className="left-box">
                                <i className="bi bi-check"></i>
                                <p>Cancel any time</p>
                            </div>
                            <div className="left-box">
                                <i className="bi bi-check"></i>
                                <p>24/7 online support</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
