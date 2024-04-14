import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/Title/Title'
import PlayersHero from './PlayersHero'
import "./Players.css"
import PlayerCarousel from './PlayerCarousel'
import FilterPlayers from './FilterPlayers'

const Players = () => {
    return (
        <div  className=' pt-[120px]'>
            <NavBar />
            <Title />
            <PlayersHero />
            <PlayerCarousel/>
            <FilterPlayers/>
            <Footer />
        </div>
    )
}

export default Players
