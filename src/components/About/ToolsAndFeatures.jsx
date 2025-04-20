import React from 'react'
import biometric from '../../assets/biometric.jpg'
import face from '../../assets/face.jpg'
import qrcode from '../../assets/qrcode.jpg'
import authentication from '../../assets/authentication.jpg'
import cloud from '../../assets/cloud.jpg'
import encryption from '../../assets/encryption.jpg'
import dataFilter from '../../assets/dataFilter.jpg'
import marketing from '../../assets/marketing.jpg'

const ToolsAndFeatures = () => {
    return (
        <div className=' w-full px-[25px] sm:px-[50px] flex flex-col mt-[100px]'>
            <h1 className=' w-full flex justify-center text-center font-bold text-[28px]'>Our Platform common Tools and Features</h1>
            <div className=' w-full justify-center flex-wrap flex mt-[30px] gap-6'>
                <div className=' rounded-[7px] w-[300px] text-center flex flex-col gap-2 shadow-comingBox transition-all duration-300 ease-in-out hover:scale-[1.1]'>
                    <img src={biometric} alt="" className=' object-cover w-[300px] h-[200px] rounded-t-[7px]' />
                    <h1 className=' my-3 px-5 text-[18px]'>Biodata Capturing System</h1>
                </div>
                <div className=' rounded-[7px] w-[300px] text-center flex flex-col gap-2 shadow-comingBox transition-all duration-300 ease-in-out hover:scale-[1.1]'>
                    <img src={face} alt="" className=' object-cover w-[300px] h-[200px] rounded-t-[7px]' />
                    <h1 className=' my-3 px-5 text-[18px]'>Facial ID Capturing System</h1>
                </div>
                <div className=' rounded-[7px] w-[300px] text-center flex flex-col gap-2 shadow-comingBox transition-all duration-300 ease-in-out hover:scale-[1.1]'>
                    <img src={qrcode} alt="" className=' object-cover  w-[300px] h-[200px] rounded-t-[7px]' />
                    <h1 className=' my-3 px-5 text-[18px]'>ID Backcode Capturing System</h1>
                </div>
                <div className=' rounded-[7px] w-[300px] text-center flex flex-col gap-2 shadow-comingBox transition-all duration-300 ease-in-out hover:scale-[1.1]'>
                    <img src={authentication} alt="" className=' object-cover w-[300px] h-[200px] rounded-t-[7px]' />
                    <h1 className=' my-3 px-5 text-[18px]'>Online Authentication with AI</h1>
                </div>
                <div className=' rounded-[7px] w-[300px] text-center flex flex-col gap-2 shadow-comingBox transition-all duration-300 ease-in-out hover:scale-[1.1]'>
                    <img src={cloud} alt="" className=' object-cover w-[300px] h-[200px] rounded-t-[7px]' />
                    <h1 className=' my-3 px-5 text-[18px]'>Cloud Data Storage and backup</h1>
                </div>
                <div className=' rounded-[7px] w-[300px] text-center flex flex-col gap-2 shadow-comingBox transition-all duration-300 ease-in-out hover:scale-[1.1]'>
                    <img src={encryption} alt="" className=' object-cover w-[300px] h-[200px] rounded-t-[7px]' />
                    <h1 className=' my-3 px-5 text-[18px]'>Robust Data Encryption</h1>
                </div>
                <div className=' rounded-[7px] w-[300px] text-center flex flex-col gap-2 shadow-comingBox transition-all duration-300 ease-in-out hover:scale-[1.1]'>
                    <img src={dataFilter} alt="" className=' object-cover w-[300px] h-[200px] rounded-t-[7px]' />
                    <h1 className=' my-3 px-5 text-[18px]'>Al Data Filter Assist</h1>
                </div>
                <div className=' rounded-[7px] w-[300px] text-center flex flex-col gap-2 shadow-comingBox transition-all duration-300 ease-in-out hover:scale-[1.1]'>
                    <img src={marketing} alt="" className=' object-cover w-[300px] h-[200px] rounded-t-[7px]' />
                    <h1 className=' my-3 px-5 text-[18px]'>AI SEO & Target Marketing Engines</h1>
                </div>
            </div>
        </div>
    )
}

export default ToolsAndFeatures
