import React from 'react'
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter'

const Categories = () => {
    const navigate = useNavigate()
    const data = [
        { name: "Academies & Clubs", value: 456, link: "/academies&clubs" },
        { name: "Players", value: 1246, link: "/players" },
        { name: "Personnel", value: 90, link: "/personnel" },
        { name: "Tournaments", value: 200, link: "/tournaments" },
        { name: "Market", value: 700, link: "/market" },

    ]
    return (
        <div className=' w-full flex flex-wrap gap-[100px] items-center justify-center text-center mt-[60px]'>
            {/** */}
            {
                data?.map(item => {

                    return (
                        <div data-aos="flip-right" data-aos-duration="3000" className=' flex flex-col items-center justify-center gap-[30px]'>
                            {/**Info */}
                            <div className='main_circle relative flex flex-col items-center justify-center'>
                                <div className=' circle  font-medium text-[16px] md:text-[20px]  px-[2px] z-20  w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex flex-col gap-4 items-center justify-center text-center rounded-full bg-[#011B2B] shadow-category '>
                                    <AnimatedCounter targetNumber={item.value} />
                                    <h1 className=' text-[#FFFFFF]'>{item.name}</h1>
                                </div>

                                <div className=' z-0 -mt-[100px] md:-mt-[125px]  w-[240px] h-[120px] md:w-[300px] md:h-[150px]  rounded-b-full bg-[#011B2B]' />
                            </div>
                            <button onClick={()=>navigate(item.link)} className='button1 w-fit h-[40px] bg-[#011B2B] font-medium text-[#FFFFFF] text-[16px] items-center justify-center text-center rounded-full px-[20px] transition-all duration-300 ease-in-out  relative inline-block  border-none   cursor-pointer  shadow-button outline-none hover:bg-transparent hover:shadow-none hover:text-[#011B2B]'>
                                <span>Search {item.name}</span>
                            </button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Categories
