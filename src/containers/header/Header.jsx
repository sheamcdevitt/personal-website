import React from 'react'
import './header.css'
import {twitter, linkedin, github} from './import'


const Header = () => {
    return (
        <div className="ps__header section__padding" id='home'>
            <div className="ps__header-content">
                <h1 className='gradient__text'>
                    Shéa McDevitt
                </h1>
                <h2 className='gradient__text'>Software Developer</h2>
                <p>Hey, my name’s Shéa. I’m a Mathematics and Computer Science graduate who is currently working at <a href="https://www.aquaq.co.uk/">AquaQ Analytics</a> as a React.js front end developer. This is my personal site.</p>
                <div className="ps__header-content__people">
                <p>Find me on:</p>
                <a href='https://twitter.com/sheamacdevitt'> <img alt="twitter logo" src={twitter} /> </a>
                <a href="https://www.linkedin.com/in/shea-mcdevitt-401006190/"> <img alt="linkedin logo" src={linkedin} /> </a>
                <a href="https://github.com/sheamcdevitt"> <img alt="github logo" src={github} /> </a>
            </div>
            </div> 
        </div>
    )
}

export default Header
