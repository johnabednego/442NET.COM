import React, { useState } from "react";
import EmailAndPassword from "./EmailAndPassword";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const LogIn = () => {
  const [authStep, setAuthStep] = useState("login"); // "login", "forgot", "reset"
  const [emailForReset, setEmailForReset] = useState("");

  const goToReset = () => setAuthStep("reset");
  const goToLogin = () => setAuthStep("login");

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="3000"
      className="w-[100%] xm:w-[480px] sm:w-[530px] min-h-[400px] flex flex-col justify-between bg-[#011B2B] p-[30px] rounded-tl-[30px] rounded-br-[30px] border-y-[1px] border-y-[#01FFFF] shadow-net gap-[60px] sm:gap-[86px]"
    >
      {/* Title */}
      <div className="w-full text-center">
        <h1 className="font-medium text-white text-[18px] sm:text-[22px]">
          {authStep === "login" && "Welcome to 442NET.COM"}
          {authStep === "forgot" && "Forgot Your Password?"}
          {authStep === "reset" && "Reset Your Password"}
        </h1>
        <p className="text-[#ccc] mt-2 text-sm">
          {authStep === "login"
            ? "Log in to your account"
            : "Follow the steps to recover your access"}
        </p>
      </div>

      {/* Views */}
      <div className="w-full">
        {authStep === "login" && (
          <div className="flex flex-col gap-4">
            <EmailAndPassword />
            <p
              className="text-sm text-center text-white cursor-pointer underline"
              onClick={() => setAuthStep("forgot")}
            >
              Forgot Password?
            </p>
          </div>
        )}

        {authStep === "forgot" && (
          <>
            <ForgotPassword
              goToReset={goToReset}
              setEmail={setEmailForReset}
            />
            <p
              className="text-sm text-center text-white cursor-pointer underline mt-4"
              onClick={goToLogin}
            >
              Back to Login
            </p>
          </>
        )}

        {authStep === "reset" && (
          <>
            <ResetPassword email={emailForReset} goToLogin={goToLogin} />
            <p
              className="text-sm text-center text-white cursor-pointer underline mt-4"
              onClick={goToLogin}
            >
              Back to Login
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LogIn;
