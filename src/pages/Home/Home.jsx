import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Card/Card'
import './Home.scss'
import Box from '../../components/Box/Box'
import Work from '../../components/Work/Work'
import Coaching from './../../components/Coaching/Coaching';
import Footer from '../../components/Footer/Footer'
import Course from '../../components/Course/Course'
import About from '../../components/About/About'
import Asaid from '../../components/Asaid/Asaid'

function Home() {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <Card />
      <Box />
      <Work />
      <Coaching />
      <Course />
      <Asaid />
      <About />
      <Footer />
    </div>
  )
}

export default Home
