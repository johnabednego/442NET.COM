import React, { useState } from 'react'
import Selector from '../../components/Selector/Selector'
import verified from '../assets/verified.svg'
import unVerified from '../assets/unVerified.svg'
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

const data = [
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },
    { name: "Lionel Messi", category: "Club", categoryName: "Fc. Barcelona", division: "Main", position: 10, country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe" },

]

const images = [
    { image: messi, firstName: "Lionel", lastName: "Messi", position: 10, verification: true },
    { image: agogo, firstName: "Junior", lastName: "Agogo", position: 9, verification: false },
    { image: ayew, firstName: "Dede", lastName: "Ayew", position: 10, verification: true },
    { image: essien, firstName: "Michael", lastName: "Essien", position: 8, verification: false },
    { image: jordan, firstName: "Jordan", lastName: "Ayew", position: 9, verification: false },
    { image: kudus, firstName: "Mohammed", lastName: "Kudus", position: 20, verification: false },
    { image: mbape, firstName: "Kyllan", lastName: "Mbape", position: 10, verification: true },
    { image: neymar, firstName: "Neymar", lastName: "Junior", position: 10, verification: true },
    { image: ronaldinho, firstName: "Ronaldinho", lastName: "de Assis", position: 9, verification: false },
    { image: ronaldo, firstName: "Christiano", lastName: "Ronaldo", position: 7, verification: false },
]
const FilterPlayers = () => {
    const [academyClub, setAcademyClub] = useState()
    const [name, setName] = useState()
    const [gender, setGender] = useState()
    const [division, setDivision] = useState()
    const [state, setState] = useState()

    return (
        <div className=' w-full mt-[100px] px-[20px] xm:px-[30px] sm:px-[50px]'>
            {/**Filter */}
            <div className='w-full flex flex-col gap-[30px] items-center justify-center'>
                <h1 className=' w-full font-semibold flex items-center justify-center text-center text-[26px] sm:text-[30px] text-[#011B2B]'>Filter Players</h1>
                <div className=' w-full flex flex-wrap items-center justify-center gap-[10px]'>
                    <Selector options={data} setItem={setAcademyClub} placeholder="Academy/Club" />
                    <Selector options={data} setItem={setName} placeholder="Player Name" />
                    <Selector options={data} setItem={setGender} placeholder="Gender" />
                    <Selector options={data} setItem={setDivision} placeholder="Division" />
                    <Selector options={data} setItem={setState} placeholder="State" />
                </div>
            </div>

            {/**Players */}
            <div className=' w-full flex items-center justify-center flex-wrap gap-[15px] mt-[50px]'>

                { images.map((item, index)=>(
                    <div className=' font-semibold text-[12px] w-[240px] h-[322px] flex flex-col gap-[10px] items-center border-solid border-[1px] border-[#011B2B] shadow-card rounded-[5px] px-[20px] py-[10px]'>
                        {/**Id*/}
                        <div className=' w-full flex gap-[10px] items-center justify-end'>
                            <img src={item.verification?verified:unVerified} alt="verification" className=' w-[27px] h-[27px]' />
                            <h1>ID: 442NET000${index}</h1>
                        </div>
                        {/**Image */}
                        <img src={item.image} alt={item.image} className=' w-[200px] h-[200px] object-cover object-top' />

                        {/**Name and Number */}
                        <div className=' w-full flex gap-[10px] justify-between'>
                            <h1 className=' text-[#011B2B]'>{item.firstName} {item.lastName}</h1>
                            <div className=' flex items-center justify-center text-center px-[6px] pt-[2.5px] bg-[#011B2B] text-[#ffffff]'><h1>{item.position}</h1></div>
                        </div>

                        {/**View button */}
                        <button className='button1 w-[100px] h-[25px] rounded-[5px] bg-[#011B2B] text-[#ffffff]'>View</button>
                    </div>))
                }
            </div>
        </div>
    )
}

export default FilterPlayers
