import React from 'react'
import platformImage from '../../assets/platform.jpg'
const OurPlatform = () => {
    return (
        <div className=' w-full px-[25px] sm:px-[50px] flex flex-col mt-[100px]'>
            <h1 className=' w-full flex justify-center text-center font-bold text-[28px]'>Our Platform</h1>
            <div className=' w-full mt-8 flex flex-col items-center md:items-start md:flex-row gap-[25px] md:gap-[50px] '>
                <div className=' md:w-[50%] float-left'>
                    <img src={platformImage} alt="" className=' rounded-[7px] shadow-comingBox md:w-[600px] md:h-[300px] lg:h-[350px] xl:h-[300px]' />
                </div>
                <div className='flex flex-col text-[14px] gap-4 md:w-[50%]'>
                    <p>Our platform is the first custom-made AI-powered grassroots football Web and App digital stage developed with advanced encryption and marketing tools to promote grassroots football.</p>
                    <p>The goal is to serve Managers with the platform to Profile, Network, and Market their Academy/Club and Players Locally and Globally.</p>
                    <p>Also, we have built the platform with innovative features to enable Academy/Club managers to register players with their biodata, facial ID, and biometrics capture.</p>
                    <p>Importantly, we have developed the platform with tools to facilitate managers to effortlessly verify players, tournaments, sponsorships, programs, and agents' authenticity.</p>
                    <p>Above all, the platform is built as a marketplace for all grassroots football Academies, Clubs, Players, Tournament organizers, Agents, Associations, Managers, Sponsors, Scouts, and Officials to do business.</p>
                </div>
            </div>
        </div>
    )
}

export default OurPlatform
