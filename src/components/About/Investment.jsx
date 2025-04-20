import React from 'react'
import investmentImage from '../../assets/investment.jpg'
const Investment = () => {
  return (
    <div className=' w-full px-[25px] sm:px-[50px] flex flex-col items-center md:items-start md:flex-row gap-[25px] md:gap-[50px] mt-[100px]'>
      <div className=' md:w-[50%] float-left'>
        <img src={investmentImage} alt="" className=' rounded-[7px] shadow-comingBox md:w-[600px] md:h-[300px]'  />
      </div>
      <div className='flex flex-col md:w-[50%]'>
        <h1 className=' font-bold text-[16px]'>Our investment</h1>
        <p className='text-[14px] mt-4'>We are 100% grassroots football development support-focused. We are highly invested and continue investing in researching and searching for football marketing and networking tools, links, and avenues to connect Academies, Clubs, and Players to local and foreign Sponsorship Opportunities, and Programs.</p>
        <p className='text-[14px] mt-4'>We have built the first Artificial Intelligence (AI) web and app grassroots football platform with complex algorithms to give equal opportunities to all especially, the small and geographically disadvantaged Academies, Clubs, and players.</p>
      </div>
    </div>
  )
}

export default Investment
