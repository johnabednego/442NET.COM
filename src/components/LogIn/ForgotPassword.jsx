import axios from "axios";
import { useState } from "react";
import baseUrl from "../baseUrl";
import toast from "react-hot-toast";

const ForgotPassword = ({ goToReset, setEmail }) => {
  const [emailInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    toast.dismiss();
    setLoading(true);

    try {
      await axios.post(`${baseUrl}/auth/forgot-password`, {
        email: emailInput,
      });

      toast.success("OTP sent to your email!");
      setEmail(emailInput);

      setTimeout(() => {
        goToReset();
      }, 1200);
    } catch (err) {
      const backendErrors = err?.response?.data?.errors;

      if (Array.isArray(backendErrors)) {
        backendErrors.forEach((errorObj) => {
          if (errorObj.msg) toast.error(errorObj.msg);
        });
      }
      else {
        toast.error(err?.response?.data?.message || "Error sending OTP.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleForgotPassword} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        required
        className="p-3 rounded-md bg-white text-black"
      />
      <button
        type="submit"
        className="bg-[#01FFFF] text-[#011B2B] font-bold p-3 rounded-md"
        disabled={loading}
      >
        {loading ? "Sending OTP..." : "Send OTP"}
      </button>
    </form>
  );
};

export default ForgotPassword;
