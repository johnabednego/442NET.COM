import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/Title/Title'
import Categories from './Categories'
import './Home.css'
import AuthenticationMethods from './AuthenticationMethods'
import OurFriends from './OurFriends'

const Home = () => {
  return (
    <div className=' pt-[120px]'>
      <NavBar />
      <Title />
      <Categories />
      <AuthenticationMethods />
      <OurFriends />
      <Footer />
    </div>
  )
}

export default Home
