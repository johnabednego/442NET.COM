import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/Title/Title'
import PlayersHero from './PlayersHero'
import "./Players.css"
import FilterPlayers from './FilterPlayers'
import messi from './assets/messi.webp'
import agogo from './assets/agogo.webp'
import ayew from './assets/ayew.webp'
import essien from './assets/essien.webp'
import jordan from './assets/jordan.webp'
import kudus from './assets/kudus.webp'
import mbape from './assets/mbape.webp'
import neymar from './assets/neymar.webp'
import ronaldinho from './assets/ronaldinho.webp'
import ronaldo from './assets/ronaldo.webp'
import vinicius from './assets/vinicius.webp'
import Carousel from '../../components/Carousel/Carousel'



const playersImages = [
    {id: 0,  image: messi, firstName: "Lionel", lastName: "Messi" },
    {id: 1, image: agogo, firstName: "Junior", lastName: "Agogo" },
    {id: 2, image: ayew, firstName: "Dede", lastName: "Ayew" },
    {id: 3, image: essien, firstName: "Michael", lastName: "Essien" },
    {id: 4,  image: jordan, firstName: "Jordan", lastName: "Ayew" },
    {id: 5,  image: kudus, firstName: "Mohammed", lastName: "Kudus" },
    {id: 6,  image: mbape, firstName: "Kyllan", lastName: "Mbape" },
    {id: 7,  image: neymar, firstName: "Neymar", lastName: "Junior" },
    {id: 8,  image: ronaldinho, firstName: "Ronaldinho", lastName: "de Assis" },
    {id: 9,  image: ronaldo, firstName: "Christiano", lastName: "Ronaldo" },
    {id: 10, image: vinicius, firstName: "Vinicius", lastName: "Junior" },
  ]

const Players = () => {
    return (
        <div  className=' pt-[120px]'>
            <NavBar />
            <Title />
            <PlayersHero />
            <Carousel data={playersImages} />
            <FilterPlayers/>
            <Footer />
        </div>
    )
}

export default Players
