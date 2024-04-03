import React from 'react'
import ug from './assets/ug.jpg'
import samsung from './assets/Samsung-Logo.webp'
import hyundai from './assets/hyundai.webp'
import RedBull from './assets/RedBull.webp'
import bayer from './assets/bayer.webp'
import philips from './assets/philips.webp'
import fifa from './assets/fifa.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const OurFriends = () => {

    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 4,
    //         slidesToSlide: 1 // optional, default to 1.
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 768 },
    //         items: 3,
    //         slidesToSlide: 1 // optional, default to 1.
    //     },
    //     mobile: {
    //         breakpoint: { max: 767, min: 464 },
    //         items: 2,
    //         slidesToSlide: 1 // optional, default to 1.
    //     }
    // };

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to the number of items
        },
        desktop: {
          breakpoint: { max: 1024, min: 500 },
          items: 3,
          slidesToSlide: 1 // this will make the carousel move one item at a time
        },
        tablet: {
          breakpoint: { max: 499, min: 300 },
          items: 2,
          slidesToSlide: 1 // optional, default to the number of items
        },
        mobile: {
          breakpoint: { max: 299, min: 0 },
          items: 1,
          slidesToSlide: 1 // making sure even on mobile we move one item at a time
        }
      };

    const data = [
        { image: ug },
        { image: samsung },
        { image: hyundai },
        { image: RedBull },
        { image: bayer },
        { image: philips },
        { image: fifa },

    ]

    return (
        <div className=' w-full flex flex-col mt-[200px]'>
            <h1 className=' w-full font-semibold flex items-center justify-center text-center text-[26px] sm:text-[30px] text-[#011B2B]'>Our Friends</h1>

            <div className='w-full mt-[50px] flex flex-col gap-[80px]'>
                <div className="parent">
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={true}
                        partialVisible={false}
                        dotListClass="custom-dot-list-style"
                    >
                        {
                            data.map(item => {
                                return (
                                    <div className=' slider  flex flex-col gap-[18px] border-solid border-[#011B2B] border-[2px] border-b-0 rounded-xl'>
                                        <img src={item.image} alt={`${item.image}`} className=' w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] object-fill' />
                                        <div className=' w-[100px] sm:w-[150px] md:w-[200px] h-[21px] rounded-b-[400px] shadow-ourFriends' />
                                    </div>
                                )
                            })
                        }

                    </Carousel>
                </div>
            </div>

        </div>
    )
}

export default OurFriends
