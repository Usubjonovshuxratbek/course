import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function Card() {
    return (
        <div className='cards container'>
            <Fade bottom>
                <h1>
                    <div className='card-1'>
                        <div className="img">
                            <img src="https://thumbs.dreamstime.com/b/growing-business-arrow-diagram-growth-profit-green-arrow-vector-graph-icon-growing-business-arrow-diagram-growth-152709761.jpg" alt="" />
                        </div>
                        <h2>Visualize it</h2>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <Link to='/'>
                            <img src="data:image/png;base64,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" alt="" />
                        </Link>
                    </div>
                </h1>
            </Fade>
            <Fade bottom>
                <h1>
                    <div className='card-2'>
                        <div className="img">
                            <img src="https://thumbs.dreamstime.com/b/growing-business-arrow-diagram-growth-profit-green-arrow-vector-graph-icon-growing-business-arrow-diagram-growth-152709761.jpg" alt="" />
                        </div>
                        <h2>Create it</h2>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <Link to='/'>
                            <img src="data:image/png;base64,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" alt="" />
                        </Link>
                    </div>
                </h1>
            </Fade>
            <Fade bottom>
                <h1>
                    <div className='card-3'>
                        <div className="img">
                            <img src="https://thumbs.dreamstime.com/b/growing-business-arrow-diagram-growth-profit-green-arrow-vector-graph-icon-growing-business-arrow-diagram-growth-152709761.jpg" alt="" />
                        </div>
                        <h2>Grow it</h2>
                        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <Link to='/'>
                            <img src="data:image/png;base64,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" alt="" />
                        </Link>
                    </div>
                </h1>
            </Fade>
        </div>
    )
}

export default Card
