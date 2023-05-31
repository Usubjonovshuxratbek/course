import React from 'react'
import './About.scss'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
      <div className="container">
        <div className="about__inner">
          <Fade top>
            <h2>Meet The Team <span>Our Professionals</span></h2>
          </Fade>
          <div className="cards">
            <div className="card">
              <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/23f2b6ec8f435911852884f1/2.jpg" alt="" />
              <h3>mary Brown</h3>
              <span>creative leader</span>
              <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
              <div className="social-media">
                <Link to='/'><i class="bi bi-facebook"></i></Link>
                <Link to='/'><i class="bi bi-twitter"></i></Link>
                <Link to='/'><i class="bi bi-instagram"></i></Link>
                <Link to='/'><i class="bi bi-telegram"></i></Link>
              </div>
            </div>
            <div className="card">
              <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/dee2a7ea9eea577cab16110a/fff.jpg" alt="" />
              <h3>Ann Richmond</h3>
              <span>creative leader</span>
              <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
              <div className="social-media">
                <Link to='/'><i class="bi bi-facebook"></i></Link>
                <Link to='/'><i class="bi bi-twitter"></i></Link>
                <Link to='/'><i class="bi bi-instagram"></i></Link>
                <Link to='/'><i class="bi bi-telegram"></i></Link>
              </div>
            </div>
            <div className="card">
              <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/47d488474b1750ad8f9a684f/fggf.jpg" alt="" />
              <h3>Bob Greenfield</h3>
              <span>programming guru</span>
              <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
              <div className="social-media">
                <Link to='/'><i class="bi bi-facebook"></i></Link>
                <Link to='/'><i class="bi bi-twitter"></i></Link>
                <Link to='/'><i class="bi bi-instagram"></i></Link>
                <Link to='/'><i class="bi bi-telegram"></i></Link>
              </div>
            </div>
          </div>
          <Fade bottom>
            <p>Image from <a href="/">Freepik</a></p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About
