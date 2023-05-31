import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Bar/Bar.scss'
import './Header.scss'

function Header() {
    const [open, setOpen] = useState(false)
    const humburger = () => {
        setOpen(!open)
    }
    let elBody = document.querySelector('body')
    open ? elBody.style.overflow = 'hidden' : elBody.style.overflow = 'auto'
    return (
        <div>
            <div className={open ? 'bar activer' : 'bar'}>
                <button><i class="bi bi-x"></i></button>
                <Link to='/'>Home</Link>
                <Link to='/'>Page 1</Link>
                <Link to='/'>Page 2</Link>
            </div>
            <header className='header'>
                <div className="container">
                    <nav className='nav'>
                        <div className="logo">
                            <a href="/"><img src="https://capp.nicepage.com/6dd56f52e25ec17c1f9afee975e7a261622b3f66/images/default-logo.png" alt="" /></a>
                        </div>
                        <div className="humburger">
                            <button onClick={humburger}><i className="bi bi-justify"></i></button>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
