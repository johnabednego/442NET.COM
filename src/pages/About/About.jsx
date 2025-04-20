import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Banner from '../../components/About/Banner'
import AboutInfo from '../../components/About/AboutInfo'
import Investment from '../../components/About/Investment'
import OurPlatform from '../../components/About/OurPlatform'
import ToolsAndFeatures from '../../components/About/ToolsAndFeatures'
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <div>
        <NavBar />
        <div className=' pt-[160px]'>
        <Banner/>
        <AboutInfo/>
        <Investment/>
        <OurPlatform/>
        <ToolsAndFeatures/>
        <Footer/>
        </div>
    </div>
  )
}

export default About
