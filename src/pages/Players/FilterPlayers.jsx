import React, { useEffect, useState } from 'react'
import { standardGender, countries, divisions, academiesAndClubs } from '../../components/data'
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


const players = [
    { image: messi, name: "Lionel Messi", firstName: "Lionel", lastName: "Messi", division: "Main", position: 10, academyClub: "Fc. Barcelona", country: "Argentina", dateOfBirth: "21st April 1990", gender: "Male", state: "Santa Fe", verification: true },
    { image: agogo, name: "Junior Agogo", firstName: "Junior", lastName: "Agogo", division: "Main", position: 9, academyClub: "Black Star", country: "Ghana", dateOfBirth: "21st April 1990", gender: "Male", state: "Greater Accra", verification: false },
    { image: ayew, name: "Dede Ayew", firstName: "Dede", lastName: "Ayew", division: "Main", position: 10, academyClub: "Black Star", country: "Ghana", dateOfBirth: "21st April 1990", gender: "Male", state: "Greater Accra", verification: true },
    { image: essien, name: "Michael Essien", firstName: "Michael", lastName: "Essien", division: "Main", position: 8, academyClub: "Chelsea", country: "Ghana", dateOfBirth: "21st April 1990", gender: "Male", state: "Greater Accra", verification: false },
    { image: jordan, name: "Jordan Ayew", firstName: "Jordan", lastName: "Ayew", division: "Main", position: 9, academyClub: "Black Star", country: "Ghana", dateOfBirth: "21st April 1990", gender: "Male", state: "Greater Accra", verification: false },
    { image: kudus, name: "Mohammed Kudus", firstName: "Mohammed", lastName: "Kudus", division: "Main", position: 20, academyClub: "Black Star", country: "Ghana", dateOfBirth: "21st April 1990", gender: "Male", state: "Greater Accra", verification: false },
    { image: mbape, name: "Kyllan Mbape", firstName: "Kyllan", lastName: "Mbape", division: "Main", position: 10, academyClub: "Paris Saint-Germain", country: "France", dateOfBirth: "21st April 1990", gender: "Male", state: "Paris", verification: true },
    { image: neymar, name: "Neymar Junior", firstName: "Neymar", lastName: "Junior", division: "Main", position: 10, academyClub: "Paris Saint-Germain", country: "Brazil", dateOfBirth: "21st April 1990", gender: "Male", state: "Brazil", verification: true },
    { image: ronaldinho, name: "Ronaldinho de Assis", firstName: "Ronaldinho", lastName: "de Assis", division: "Main", position: 9, academyClub: "Fc. Barcelona", country: "Spain", dateOfBirth: "21st April 1990", gender: "Male", state: "Barcelona", verification: false },
    { image: ronaldo, name: "Christiano Ronaldo", firstName: "Christiano", lastName: "Ronaldo", division: "Main", position: 7, academyClub: "Real Madrid", country: "Portugal", dateOfBirth: "21st April 1990", gender: "Male", state: "Portugal", verification: false },

]
const FilterPlayers = () => {
    const [filteredPlayers, setFilteredPlayers] = useState(players);
    const [academyClub, setAcademyClub] = useState("")
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [division, setDivision] = useState("")
    const [country, setCountry] = useState("")

    const resetFilter = () => {
        setFilteredPlayers(players)
        setAcademyClub("")
        setName("")
        setGender("")
        setDivision("")
        setCountry("")
    }

    useEffect(() => {
        const filterPlayers = () => {
            const filtered = players.filter(player => {
                return (academyClub === "" || player.academyClub.toLowerCase().includes(academyClub.toLowerCase())) &&
                    (name === "" || player.name.toLowerCase().includes(name.toLowerCase())) &&
                    (gender === "" || player.gender.toLowerCase().includes(gender.toLowerCase())) &&
                    (division === "" || player.division.toLowerCase().includes(division.toLowerCase())) &&
                    (country === "" || player.country.toLowerCase().includes(country.toLowerCase()));
            });
            setFilteredPlayers(filtered);
        };

        filterPlayers();
    }, [academyClub, name, gender, division, country]); // Dependencies array

    return (
        <div className=' w-full mt-[100px] px-[20px] xm:px-[30px] sm:px-[50px]'>
            {/**Filter */}
            <div data-aos="zoom-in" data-aos-duration="3000"  className='w-full flex flex-col items-center justify-center gap-4 '>
                <div className='w-full flex flex-col gap-[30px] items-center justify-center'>
                    <h1 className=' w-full font-semibold flex items-center justify-center text-center text-[26px] sm:text-[30px] text-[#011B2B]'>Filter Players</h1>
                    <div className=' w-full flex flex-wrap items-center justify-center gap-[10px]'>
                        <Selector options={academiesAndClubs} item={academyClub} setItem={setAcademyClub} placeholder="Academy/Club" />
                        <Selector options={players} item={name} setItem={setName} placeholder="Player Name" />
                        <Selector options={standardGender} item={gender} setItem={setGender} placeholder="Gender" />
                        <Selector options={divisions} item={division} setItem={setDivision} placeholder="Division" />
                        <Selector options={countries} item={country} setItem={setCountry} placeholder="Country" />
                    </div>
                </div>
                <button onClick={() => resetFilter()} className='button1 w-auto h-[40px] px-[20px]  rounded-[5px] bg-[#011B2B] text-[#ffffff] font-medium text-[16px] items-center justify-center text-center transition-all duration-300 ease-in-out  relative inline-block  border-none   cursor-pointer  shadow-button outline-none hover:bg-transparent hover:shadow-none hover:text-[#011B2B]'>
                    <span>Reset Filter</span>
                </button>
            </div>

            {/**Players */}
            <div data-aos="flip-right" data-aos-duration="3000" className=' w-full flex items-center justify-center flex-wrap gap-[15px] mt-[50px]'>

                {filteredPlayers.map((item, index) => (
                    <div className=' transform duration-300 ease-in-out hover:scale-105 font-semibold text-[12px] w-[200px] h-[280px] lg:w-[220px] lg:h-[300px] xl:w-[240px] xl:h-[322px] flex flex-col gap-[10px] items-center border-solid border-[1px] border-[#011B2B] rounded-[5px] px-[20px] py-[10px]'>
                        {/**Id*/}
                        <div className=' w-full flex gap-[10px] items-center justify-end'>
                            <img src={item.verification ? verified : unVerified} alt="verification" className=' w-[27px] h-[27px]' />
                            <h1>ID: 442NET000${index}</h1>
                        </div>
                        {/**Image */}
                        <img src={item.image} alt={item.image} className=' w-[160px] h-[160px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] object-cover object-top' />

                        {/**Name and Number */}
                        <div className=' w-full flex gap-[10px] justify-between'>
                            <h1 className=' text-[#011B2B]'>{item.firstName} {item.lastName}</h1>
                            <div className=' flex items-center justify-center text-center px-[6px] pt-[2.5px] bg-[#011B2B] text-[#ffffff]'><h1>{item.position}</h1></div>
                        </div>

                        {/**View button */}
                        <button className='button1 w-[60px] lg:w-[80px] xl:w-[100px] h-[25px] rounded-[5px] bg-[#011B2B] text-[#ffffff] font-medium text-[16px] items-center justify-center text-center transition-all duration-300 ease-in-out  relative inline-block  border-none   cursor-pointer  shadow-button outline-none hover:bg-transparent hover:shadow-none hover:text-[#011B2B]'>
                            <span>View</span>
                        </button>
                    </div>))
                }
            </div>

            {/**Load More Button */}
            <div data-aos="zoom-in" data-aos-duration="3000"  className='w-full mt-[50px] flex flex-col items-center justify-center'>
                <button className='button1 w-auto h-[40px] px-[20px]  rounded-[5px] bg-[#011B2B] text-[#ffffff] font-medium text-[16px] items-center justify-center text-center transition-all duration-300 ease-in-out  relative inline-block  border-none   cursor-pointer  shadow-button outline-none hover:bg-transparent hover:shadow-none hover:text-[#011B2B]'>
                    <span>Load More</span>
                </button>
            </div>
        </div>
    )
}

export default FilterPlayers
