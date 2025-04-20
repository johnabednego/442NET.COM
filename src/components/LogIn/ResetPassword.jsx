import axios from "axios";
import { useState } from "react";
import baseUrl from "../baseUrl";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = ({ email, goToLogin }) => {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [strength, setStrength] = useState("");
  const [touched, setTouched] = useState(false);

  const checkStrength = (password) => {
    let score = 0;
    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[\W]/.test(password)) score++;

    if (score >= 4) return "strong";
    if (score >= 2) return "medium";
    return "weak";
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setTouched(true);
    setNewPassword(pwd);
    setStrength(checkStrength(pwd));
  };

  const handleReset = async (e) => {
    e.preventDefault();
    toast.dismiss();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (strength === "weak") {
      toast.error("Password is too weak.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${baseUrl}/auth/reset-password`, {
        email,
        otp,
        newPassword,
      });

      toast.success("Password reset successful! Redirecting to login...");
      setTimeout(() => goToLogin(), 1500);
    } catch (err) {
      const backendErrors = err?.response?.data?.errors;

      if (Array.isArray(backendErrors)) {
        backendErrors.forEach((errorObj) => {
          if (errorObj.msg) toast.error(errorObj.msg);
        });
      } else {
        toast.error(err?.response?.data?.message || "Reset failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  const strengthColor = {
    weak: "text-red-500",
    medium: "text-yellow-500",
    strong: "text-green-500",
  };

  const getMatchMessage = () => {
    if (!confirmPassword) return null;
    if (confirmPassword === newPassword) {
      return <p className="text-green-500 text-sm">✅ Passwords match</p>;
    } else {
      return <p className="text-red-500 text-sm">❌ Passwords do not match</p>;
    }
  };

  return (
    <form onSubmit={handleReset} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        maxLength={6}
        required
        className="p-3 rounded-md bg-white text-black"
      />

      {/* New Password */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="New password"
          value={newPassword}
          onChange={handlePasswordChange}
          required
          className="w-full p-3 pr-10 rounded-md bg-white text-black"
        />
        <div
          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-black"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>

      {/* Strength Feedback */}
      {touched && (
        <p className={`text-sm ${strengthColor[strength]}`}>
          Password strength: {strength.toUpperCase()}
        </p>
      )}

      {/* Confirm Password */}
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="p-3 rounded-md bg-white text-black"
      />
      {getMatchMessage()}

      <button
        type="submit"
        className="bg-[#01FFFF] text-[#011B2B] font-bold p-3 rounded-md disabled:bg-[#A0D9D9] disabled:text-[#B0B0B0] disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={
          loading ||
          strength === "weak" ||
          !newPassword ||
          confirmPassword !== newPassword
        }
      >
        {loading ? "Resetting..." : "Reset Password"}
      </button>

    </form>
  );
};

export default ResetPassword;
