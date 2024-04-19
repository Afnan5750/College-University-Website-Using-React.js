import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() => {
                    setPlayState(true)
                }} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorror's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sed quas error iusto voluptates nesciunt quos nemo repellendus a, necessitatibus voluptate, numquam, maxime aliquid! Adipisci atque ipsa ullam. Optio, aperiam!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ullam corporis inventore doloremque quos facere, ad numquam voluptatibus quia tempora.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni iusto culpa eius. Corrupti quidem sed dignissimos mollitia!</p>
            </div>
        </div>
    )
}

export default About
