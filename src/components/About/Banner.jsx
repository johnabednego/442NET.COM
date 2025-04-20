import React from 'react'
import screen from '../../assets/screens.png'

const Banner = () => {
  return (
    <div className=' w-full px-[10%] sm:px-[20%] flex items-center justify-center'>
      <img src={screen} alt="" />
    </div>
  )
}

export default Banner
