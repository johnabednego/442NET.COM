import React from 'react'
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter'

const PlayersHero = () => {
    return (
        <div className=' w-full flex flex-col mt-[100px] px-[20px] xm:px-[30px] sm:px-[50px]'>
            <h1 className=' w-full font-semibold flex items-center justify-center text-center text-[26px] sm:text-[30px] text-[#011B2B]'>Football Players</h1>

            {/**Info */}
            <div className=' mt-[50px] relative flex flex-col items-center justify-center'>
                <div className=' z-0 -mb-[100px] md:-mb-[125px]  w-[240px] h-[120px] md:w-[300px] md:h-[150px]  rounded-t-full bg-[#011B2B]' />

                <div className=' player_main_circle flex flex-col'>
                    <div className=' player_circle animate-spin  px-[2px] z-20  w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex flex-col gap-4 items-center justify-center text-center rounded-full bg-[#011B2B] shadow-mainCategory '>
                    </div>
                    <div className=' z-[25] absolute  w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex flex-col gap-4 items-center justify-center text-center font-medium text-[16px] md:text-[20px] '>
                        <AnimatedCounter targetNumber={1246} />
                        <h1 className=' text-[#FFFFFF]'>Football Players</h1>
                    </div>
                </div>

                <div className=' z-0 -mt-[100px] md:-mt-[125px]  w-[240px] h-[120px] md:w-[300px] md:h-[150px]  rounded-b-full bg-[#FFFFFF] shadow-ourFriends' />
            </div>
        </div>
    )
}

export default PlayersHero
