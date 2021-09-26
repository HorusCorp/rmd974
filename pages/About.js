import React from 'react'
import AboutFirstZone from '../Components/AboutFirstZone'
import FooterTop from '../Components/FooterTop'
import NavWithLogo from '../Components/Navbar'

function About() {
    return (
        <div className='about__page'>
            <NavWithLogo/>
            <AboutFirstZone/>
            <FooterTop/>
        </div>
    )
}

export default About
