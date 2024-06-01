import React, { useState } from "react";
import EmailAndPassword from "./EmailAndPassword";
import errorIcon from "../assets/errorIcon.svg"

const LogIn = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [role, setRole] = useState("admin");
    const [method, setMethod] = useState("email");

    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className=" w-[530px] h-full min-h-[450px] flex flex-col justify-between bg-[#011B2B] p-[30px] rounded-tl-[30px] rounded-br-[30px]"
        >
            {/**Title and Roles*/}
            <div className="w-full flex flex-col gap-[20px]">
                <h1 className=" font-medium text-white text-[22px]">
                    Welcome to 442NET.COM
                </h1>
                <div className="w-full flex flex-wrap items-center justify-between">
                    {/**Admin */}
                    <div
                        onClick={() => setRole("admin")}
                        className=" cursor-pointer flex gap-[10px]"
                    >
                        {/**Check box */}
                        <div
                            className={` animate-spin w-5 h-5 rounded-full flex items-center justify-center ${role === "admin" ? "bg-[#01FFFF]" : "bg-white"
                                }`}
                        >
                            <div
                                className={` w-4 h-4 rounded-full flex ${role === "admin" ? "bg-[#011B2B]" : "bg-white"
                                    }`}
                            />
                        </div>
                        <h1
                            className={` font-bold text-[16px] ${role === "admin" ? "text-[#01FFFF]" : "text-white"
                                }`}
                        >
                            Admin
                        </h1>
                    </div>

                    {/**Supervisor */}
                    <div
                        onClick={() => setRole("supervisor")}
                        className=" cursor-pointer flex gap-[10px]"
                    >
                        {/**Check box */}
                        <div
                            className={` animate-spin w-5 h-5 rounded-full flex items-center justify-center ${role === "supervisor" ? "bg-[#01FFFF]" : "bg-white"
                                }`}
                        >
                            <div
                                className={` w-4 h-4 rounded-full flex ${role === "supervisor" ? "bg-[#011B2B]" : "bg-white"
                                    }`}
                            />
                        </div>
                        <h1
                            className={` font-bold text-[16px] ${role === "supervisor" ? "text-[#01FFFF]" : "text-white"
                                }`}
                        >
                            Supervisor
                        </h1>
                    </div>

                    {/**Registrar */}
                    <div
                        onClick={() => setRole("registrar")}
                        className=" cursor-pointer flex gap-[10px]"
                    >
                        {/**Check box */}
                        <div
                            className={` animate-spin w-5 h-5 rounded-full flex items-center justify-center ${role === "registrar" ? "bg-[#01FFFF]" : "bg-white"
                                }`}
                        >
                            <div
                                className={` w-4 h-4 rounded-full flex ${role === "registrar" ? "bg-[#011B2B]" : "bg-white"
                                    }`}
                            />
                        </div>
                        <h1
                            className={` font-bold text-[16px] ${role === "registrar" ? "text-[#01FFFF]" : "text-white"
                                }`}
                        >
                            Registrar
                        </h1>
                    </div>

                    {/**Consultant */}
                    <div
                        onClick={() => setRole("consultant")}
                        className=" cursor-pointer flex gap-[10px]"
                    >
                        {/**Check box */}
                        <div
                            className={` animate-spin w-5 h-5 rounded-full flex items-center justify-center ${role === "consultant" ? "bg-[#01FFFF]" : "bg-white"
                                }`}
                        >
                            <div
                                className={` w-4 h-4 rounded-full flex ${role === "consultant" ? "bg-[#011B2B]" : "bg-white"
                                    }`}
                            />
                        </div>
                        <h1
                            className={` font-bold text-[16px] ${role === "consultant" ? "text-[#01FFFF]" : "text-white"
                                }`}
                        >
                            Consultant
                        </h1>
                    </div>
                </div>
            </div>

            {/**Error */}
            {errorMessage !== "" ?
                <div  data-aos="fade-up" data-aos-duration="3000" className=" transition-all ease-in-out duration-300 w-full flex items-center justify-center">
                    <div className="px-[10px] h-[26px] rounded-[20px] flex gap-[10px] items-center bg-[#F9AAB6] border-solid border-[1px] border-[#EB0728] shadow-net">
                        <img src={errorIcon} alt="errorIcon" className=" w-[18px] h-[18px]" />
                        <p className=" text-[12px] text-[#EB0728]">{errorMessage}</p>
                    </div>
                </div> : 
            null}

            <div className="w-full flex flex-col gap-[30px]">
                {/**Methods*/}
                <div className="w-full flex flex-wrap items-center justify-between">
                    {/**Email */}
                    <div
                        onClick={() => setMethod("email")}
                        className=" cursor-pointer flex gap-[10px]"
                    >
                        {/**Check box */}
                        <div
                            className={` animate-spin w-5 h-5 rounded-full flex items-center justify-center ${method === "email" ? "bg-[#01FFFF]" : "bg-white"
                                }`}
                        >
                            <div
                                className={` w-4 h-4 rounded-full flex ${method === "email" ? "bg-[#011B2B]" : "bg-white"
                                    }`}
                            />
                        </div>
                        <h1
                            className={` font-bold text-[16px] ${method === "email" ? "text-[#01FFFF]" : "text-white"
                                }`}
                        >
                            Email/Password
                        </h1>
                    </div>

                    {/**Face */}
                    <div onClick={() => setMethod("face")}
                        className=" cursor-pointer flex gap-[10px]"
                    >
                        {/**Check box */}
                        <div
                            className={` animate-spin w-5 h-5 rounded-full flex items-center justify-center ${method === "face" ? "bg-[#01FFFF]" : "bg-white"
                                }`}
                        >
                            <div
                                className={` w-4 h-4 rounded-full flex ${method === "face" ? "bg-[#011B2B]" : "bg-white"
                                    }`}
                            />
                        </div>
                        <h1
                            className={` font-bold text-[16px] ${method === "face" ? "text-[#01FFFF]" : "text-white"
                                }`}
                        >
                            Face
                        </h1>
                    </div>

                    {/**Fingerprint */}
                    <div
                        onClick={() => setMethod("fingerprint")}
                        className=" cursor-pointer flex gap-[10px]"
                    >
                        {/**Check box */}
                        <div
                            className={` animate-spin w-5 h-5 rounded-full flex items-center justify-center ${method === "fingerprint" ? "bg-[#01FFFF]" : "bg-white"
                                }`}
                        >
                            <div
                                className={` w-4 h-4 rounded-full flex ${method === "fingerprint" ? "bg-[#011B2B]" : "bg-white"
                                    }`}
                            />
                        </div>
                        <h1
                            className={` font-bold text-[16px] ${method === "fingerprint" ? "text-[#01FFFF]" : "text-white"
                                }`}
                        >
                            Fingerprint
                        </h1>
                    </div>
                </div>

                {/**Fields */}
                {/**Email and Pasword */}
                {method === "email" ?
                    <div data-aos="zoom-in" data-aos-duration="3000" className="w-full"><EmailAndPassword setErrorMessage={setErrorMessage} /></div>
                    :
                    null}
            </div>
        </div>
    );
};

export default LogIn;
