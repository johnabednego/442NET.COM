import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

import ug from './assets/ug.jpg'
import fifa from './assets/fifa.jpg'
import qatar from './assets/qatar.jpg'
import worldcup from './assets/worldcup.jpg'
import fifa2 from './assets/fifa2.jpg'

const OurFriends = () => {
    const data = [
        { image: ug },
        { image: fifa },
        { image: qatar },
        { image: worldcup },
        { image: fifa2 }
    ]
    return (
        <div className=' w-full flex flex-col mt-[200px] px-[20px] xm:px-[30px] sm:px-[50px]'>
            <h1 className=' w-full font-semibold flex items-center justify-center text-center text-[26px] sm:text-[30px] text-[#011B2B]'>Our Friends</h1>

            <div className='w-full mt-[50px] flex gap-[80px]'>
                <Swiper
                    navigation={true} modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={30}
                    className="mySwiper"

                >
                    {
                        data.map(item => {
                            return (
                                <SwiperSlide>
                                    <div className=' pb-[10px] flex flex-col gap-[18px]'>
                                        <img src={item.image} alt={`${item.image}`} className=' w-[200px] h-[200px] object-fill' />
                                        <div className=' w-[200px] h-[21px] rounded-b-[400px] shadow-ourFriends' />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>


            </div>

        </div>
    )
}

export default OurFriends
