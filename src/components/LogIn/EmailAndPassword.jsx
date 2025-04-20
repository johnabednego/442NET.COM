import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../baseUrl";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LogInFalse } from "../../redux/features/navbar/logInModalSlice";
import { useDispatch } from "react-redux";

const EmailAndPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    toast.dismiss(); // clear existing toasts
    setLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/auth/login`, {
        email,
        password
      });

      const token = res.data.token;
      localStorage.setItem("token", token);

      toast.success("Login successful!");

      dispatch(LogInFalse())
      navigate('/dashboard')
      window.location.reload()
    } catch (err) {
      const backendErrors = err?.response?.data?.errors;

      if (Array.isArray(backendErrors)) {
        backendErrors.forEach((errorObj) => {
          if (errorObj.msg) toast.error(errorObj.msg);
        });
      }
      else {
        toast.error(err?.response?.data?.message || "Login failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-6 w-full" onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
        className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 outline-none"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
        className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-[#01FFFF] hover:bg-[#00cccc] text-[#011B2B] font-bold p-3 rounded-md transition-all"
      >
        {loading ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
};

export default EmailAndPassword;
