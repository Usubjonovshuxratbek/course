import React from 'react'
import './Box.scss'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function Box() {
  return (
    <section className='box'>
      <div className="box-inner container">
        <Slide top>
          <h2>Welcome Message</h2>
        </Slide>
        <Fade bottom>
          <p>Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nec feugiat nisl pretium fusce id. Justo laoreet sit amet cursus sit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.</p>
        </Fade>
        <Fade bottom>
          <a className='link' href="\">LEARN MORE</a>
        </Fade>
      </div>
    </section>
  )
}

export default Box
