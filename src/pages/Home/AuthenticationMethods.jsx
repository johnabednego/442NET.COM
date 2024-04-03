import React from 'react'
import mic from './assets/mic.svg'
import idCard from './assets/id.svg'
import fingerPrint from './assets/finger.svg'
import face from './assets/face.svg'

const AuthenticationMethods = () => {
    const data = [
        { name: "Call + PIN", image: mic },
        { name: "ID Card Scan", image: idCard },
        { name: "Fingerprint", image: fingerPrint },
        { name: "Face", image: face }
    ]
    return (
        <div className=' w-full flex flex-col mt-[200px] px-[20px] xm:px-[30px] sm:px-[50px]'>
            <h1 className=' w-full font-semibold flex items-center justify-center text-center text-[26px] sm:text-[30px] text-[#011B2B]'>Authentication</h1>
            <div className=' w-full mt-[50px] flex flex-wrap gap-[100px] items-center justify-center'>
                {/**Call */}
                {
                    data.map(item => {
                        return (
                            <div className='flex flex-col gap-[20px] items-center text-center justify-center'>
                                <img src={item.image} alt="mic" className=' w-[100px] h-[100px] md:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[235px] xl:h-[235px]' />
                                <h1 className=' font-bold text-[16px] sm:text-[20px] text-[#011B2B]'>{item.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AuthenticationMethods
