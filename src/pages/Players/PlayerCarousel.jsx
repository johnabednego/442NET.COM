import React, { useEffect, useState } from 'react'
import prevIcon from '../assets/prev.svg'
import prevGrayIcon from '../assets/prevGray.svg'
import nextIcon from '../assets/next.svg'
import nextGrayIcon from '../assets/nextGray.svg'
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
  {id: 0,  image: messi, firstName: "Lionel", lastName: "Messi" },
  {id: 1, image: agogo, firstName: "Junior", lastName: "Agogo" },
  {id: 2, image: ayew, firstName: "Dede", lastName: "Ayew" },
  {id: 3, image: essien, firstName: "Michael", lastName: "Essien" },
  {id: 4,  image: jordan, firstName: "Jordan", lastName: "Ayew" },
  {id: 5,  image: kudus, firstName: "Mohammed", lastName: "Kudus" },
  {id: 6,  image: mbape, firstName: "Kyllan", lastName: "Mbape" },
  {id: 7,  image: neymar, firstName: "Neymar", lastName: "Junior" },
  {id: 8,  image: ronaldinho, firstName: "Ronaldinho", lastName: "de Assis" },
  {id: 9,  image: ronaldo, firstName: "Christiano", lastName: "Ronaldo" },
  {id: 10, image: vinicius, firstName: "Vinicius", lastName: "Junior" },
]

const PlayerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(data[0].image);
  const [currentName, setCurrentName] = useState({ firstName: `${data[0].firstName}`, lastName: `${data[0].lastName}` });

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
  };

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    setCurrentImage(data[currentIndex].image);
    setCurrentName({ firstName: `${data[currentIndex].firstName}`, lastName: `${data[currentIndex].lastName}` });
  }, [currentIndex]);


  return (
    <div data-aos="zoom-in" data-aos-duration="3000" className=' w-full px-[20px] xm:px-[30px] sm:px-[50px] mt-[70px]'>
      <div className='w-full flex flex-col md:flex-row gap-[10px] xl:gap-[1%] justify-between'>
        {/**Main Image */}
        <div className=' relative w-full h-[300px] xm:h-[350px] sm:h-[410px]  md:h-[300px] xl:max-w-[650px] xl:h-[410px]'>
          <img data-aos="zoom-in" data-aos-duration="3000" src={currentImage} alt={currentName} className='w-full h-full border-solid border-[1px] border-[#011B2B] object-cover object-top' />
          <div className={` -mt-[225px] absolute w-full flex justify-between px-[20px]`}>
            {currentIndex !== 0 ? <button onClick={goPrev} className=' w-[40px] h-[40px]'><img src={prevIcon} alt="PrevIcon" className=' w-full h-full' /></button> : <button  className=' cursor-not-allowed w-[40px] h-[40px]'><img src={prevGrayIcon} alt="PrevGrayIcon" className=' w-full h-full' /></button>}
            {currentIndex + 1 < data?.length ? <button onClick={goNext} className=' w-[40px] h-[40px]'><img src={nextIcon} alt="NextIcon" className=' w-full h-full' /></button> : <button className=' cursor-not-allowed w-[40px] h-[40px]'><img src={nextGrayIcon} alt="NextGrayIcon" className=' w-full h-full' /></button>}
          </div>
          {/**Name */}
          <div className=' w-full -mt-[63px] flex items-center justify-center absolute'>
            <div className=' w-[90%] xl:w-[60%] bg-[#011B2B] font-medium text-[24px] text-[#FFFFFF] flex items-center justify-center text-center p-[7px] shadow-net'>
              <h1>{currentName?.firstName} {currentName?.lastName}</h1>
            </div>
          </div>
        </div>

        {/**Other Images */}
        <div className=' w-full h-[150px] md:h-[300px] xl:h-[410px] flex flex-wrap gap-[10px] overflow-hidden justify-center md:justify-normal'>
          {data.slice(currentIndex + 1).map((item, index) => (
            <div onClick={()=>setCurrentIndex(item.id)} key={index} className=' transform duration-300 ease-in-out hover:scale-105 cursor-pointer relative w-[150px] h-[150px] xl:w-[200px] xl:h-[200px]'>
              <img src={item.image} alt={`${item.firstName} ${item.lastName}`} className=' w-full h-full border-solid border-[1px] border-[#011B2B] object-cover object-top' />
              <div className='w-full absolute -mt-[32px] xl:-mt-[40px] bg-[#011B2B] font-medium text-[14px] xl:text-[16px] text-[#FFFFFF] flex items-center justify-center text-center p-1 xl:p-[7px] shadow-net'>
                <h1>{item.firstName[0]}. {item.lastName}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlayerCarousel
