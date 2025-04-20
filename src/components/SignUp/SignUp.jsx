// components/auth/SignUp.js
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SignUpFalse } from "../../redux/features/navbar/signUpModalSlice";
import baseUrl from "../baseUrl";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LogInTrue } from "../../redux/features/navbar/logInModalSlice";

const SignUp = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        country: "",
        stateOrRegion: "",
        city: "",
        role: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        toast.dismiss();
        setLoading(true);
        try {
            const res = await axios.post(`${baseUrl}/auth/signup`, formData);
            toast.success("Signup successful!");
            dispatch(SignUpFalse());
            dispatch(LogInTrue())
        } catch (err) {
            const backendErrors = err?.response?.data?.errors;

            if (Array.isArray(backendErrors)) {
                backendErrors.forEach((errorObj) => {
                    if (errorObj.msg) toast.error(errorObj.msg);
                });
            }
            else {
                toast.error(err?.response?.data?.message || "Signup failed.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="w-[100%] xm:w-[480px] sm:w-[600px] min-h-[400px] flex flex-col justify-between bg-[#011B2B] p-[30px] rounded-tl-[30px] rounded-br-[30px] border-y-[1px] border-y-[#01FFFF] shadow-net gap-[60px] sm:gap-[86px]"
        >
            <div className="text-center">
                <h1 className="text-white text-[18px] sm:text-[22px] font-medium">Create Your Account</h1>
                <p className="text-[#ccc] mt-2 text-sm">Sign up to get started with 442NET.COM</p>
            </div>

            <form onSubmit={handleSignUp} className="flex flex-col gap-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="text-white mb-1">First Name</label>
                        <input id="firstName" name="firstName" placeholder="e.g., John" onChange={handleChange} required className="p-3 rounded-md bg-white text-black placeholder-gray-400 outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="text-white mb-1">Last Name</label>
                        <input id="lastName" name="lastName" placeholder="e.g., Doe" onChange={handleChange} required className="p-3 rounded-md bg-white text-black placeholder-gray-400 outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-white mb-1">Email</label>
                        <input id="email" type="email" name="email" placeholder="e.g., john@example.com" onChange={handleChange} required className="p-3 rounded-md bg-white text-black placeholder-gray-400 outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phoneNumber" className="text-white mb-1">Phone Number</label>
                        <input id="phoneNumber" type="number" name="phoneNumber" placeholder="e.g., +233241234567" onChange={handleChange} required className="p-3 rounded-md bg-white text-black placeholder-gray-400 outline-none appearance-none" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-white mb-1">Password</label>
                        <div className="relative bg-white">
                            <input id="password" type={showPassword ? "text" : "password"} name="password" placeholder="Minimum 6 characters" onChange={handleChange} required className="p-3 rounded-md text-black placeholder-gray-400 outline-none" />
                            <div
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-black"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FaEye /> :<FaEyeSlash />}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="country" className="text-white mb-1">Country</label>
                        <input id="country" name="country" placeholder="e.g., Ghana" onChange={handleChange} required className="p-3 rounded-md bg-white text-black placeholder-gray-400 outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="stateOrRegion" className="text-white mb-1">State/Region</label>
                        <input id="stateOrRegion" name="stateOrRegion" placeholder="e.g., Greater Accra" onChange={handleChange} required className="p-3 rounded-md bg-white text-black placeholder-gray-400 outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="city" className="text-white mb-1">City</label>
                        <input id="city" name="city" placeholder="e.g., Accra" onChange={handleChange} required className="p-3 rounded-md bg-white text-black placeholder-gray-400 outline-none" />
                    </div>
                    <div className="flex flex-col sm:col-span-2">
                        <label htmlFor="role" className="text-white mb-1">Role</label>
                        <select
                            id="role"
                            name="role"
                            onChange={handleChange}
                            value={formData.role}
                            required
                            className={`p-3 rounded-md bg-white outline-none ${formData.role === "" ? "text-black/50" : "text-black"
                                }`}
                        >
                            <option value="" disabled hidden>Select your role</option>
                            <option value="Coach" className="text-black">Coach</option>
                            <option value="Referee" className="text-black">Referee</option>
                            <option value="Scout" className="text-black">Scout</option>
                            <option value="Sponsor" className="text-black">Sponsor</option>
                        </select>
                    </div>

                </div>


                <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 bg-[#01FFFF] hover:bg-[#00cccc] text-[#011B2B] font-bold p-3 rounded-md transition-all"
                >
                    {loading ? "Creating account..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
};

export default SignUp;
