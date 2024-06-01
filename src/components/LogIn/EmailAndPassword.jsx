import React from 'react'

const EmailAndPassword = ({setErrorMessage}) => {
    const handlesubmit = (e) =>{
        e.preventDefualt()
    }
    return (
        <form onSubmit={handlesubmit} className='w-full flex flex-col gap-[20px]'>
            <div className='w-full flex flex-col gap-[10px]'>
                <div className=" w-full flex flex-col gap-[20px]">
                    <input required type="email" placeholder="Email" className=" placeholder:text-[#011B2B] placeholder:opacity-[0.64] w-full h-[40px] rounded-[40px] px-5 flex items-center bg-white text-[16px]" />
                    <input required type="password" placeholder="Password" className=" placeholder:text-[#011B2B] placeholder:opacity-[0.64] w-full h-[40px] rounded-[40px] px-5 flex items-center bg-white text-[16px]" />
                </div>
                <button onClick={()=>setErrorMessage("Invalid Credentials")} type='button' className=' w-fulll flex items-start justify-start text-start text-[14px] text-white'>Forgot Password?</button>
            </div>
            <button type="submit" className=' hover:scale-95 hover:opacity-75 transition-all ease-in-out duration-300 w-full h-[40px] rounded-[40px] bg-[#01FFFF] shadow-net flex items-center justify-center text-center font-bold text-[16px]'>Sign In</button>
        </form>
    )
}

export default EmailAndPassword
