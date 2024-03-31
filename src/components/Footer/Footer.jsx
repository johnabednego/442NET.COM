import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className=' w-full px-[10px] lg:px-[50px] py-[71px] bg-[#011B2B] flex flex-col lg:flex-row items-center lg:items-start justify-between mt-[100px] gap-[50px]'>
      {/**Logo and Name*/}
      <div onClick={() => navigate('/')} className=' min-w-[107px] cursor-pointer w-auto items-center lg:items-start justify-center  flex flex-col gap-[17px]'>
        <img src={logo} alt="logo" className=' hover:rotate-45 transform duration-300 w-[100px] h-[100px] rounded-full shadow-logo' />
        <h1 className=' font-medium text-[14px] text-[#01FFFF]'>442NET.COM</h1>
      </div>

      {/**Links */}
      <div className='flex flex-wrap gap-[30px] sm:gap-[50px] justify-center'>
        {/**Registration */}
        <div className='flex flex-col gap-[7px]'>
          <h1 className=' font-bold text-[18px] text-[#FFFFFF]'>Registration</h1>
          <div className=' flex flex-col gap-[2px]'>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Clubs Registration</h1>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Player Registration</h1>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Personnel Registration</h1>
          </div>
        </div>
        {/**Posts */}
        <div className='flex flex-col gap-[7px]'>
          <h1 className=' font-bold text-[18px] text-[#FFFFFF]'>Posts</h1>
          <div className=' flex flex-col gap-[2px]'>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Personnel Post</h1>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Tournament Post</h1>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Update Post</h1>
          </div>
        </div>
        {/**Authentication */}
        <div className='flex flex-col gap-[7px]'>
          <h1 className=' font-bold text-[18px] text-[#FFFFFF]'>Authentication</h1>
          <div className=' flex flex-col gap-[2px]'>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Official</h1>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Player</h1>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Personnel</h1>
          </div>
        </div>
        {/**General Enquires */}
        <div className='flex flex-col gap-[7px]'>
          <h1 className=' font-bold text-[18px] text-[#FFFFFF]'>General Enquires</h1>
          <div className=' flex flex-col gap-[2px]'>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Tel: 0551315020</h1>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Email: info@442net.com</h1>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Message: Send Online</h1>
          </div>
        </div>
        {/**Customer Support */}
        <div className='flex flex-col gap-[7px]'>
          <h1 className=' font-bold text-[18px] text-[#FFFFFF]'>Customer Support</h1>
          <div className=' flex flex-col gap-[2px]'>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Tel: 0551315020</h1>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Email: support@442net.com</h1>
            <h1 className=' cursor-pointer text-[16px] text-[#3A506B] hover:text-[#FFC000]'>Message: Send Online</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
