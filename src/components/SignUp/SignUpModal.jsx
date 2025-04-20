import React from "react";
import SignUp from "./SignUp";
import { SignUpFalse } from "../../redux/features/navbar/signUpModalSlice";
import { useDispatch } from "react-redux";

const SignUpModal = () => {
  const dispatch = useDispatch();

  const hideModal = (e) => {
    const modal = document.getElementById("signupModal");
    if (!modal.contains(e.target)) dispatch(SignUpFalse());
  };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div>
      <div
        onClick={hideModal}
        className="cursor-pointer w-full h-full fixed inset-0 z-[70] flex items-center justify-center overflow-auto"
      >
        <div
          id="signupModal"
          className=" absolute top-[30px] cursor-default w-auto flex justify-center"
          onClick={stopPropagation}
        >
          <SignUp />
        </div>
      </div>
      <div className="fixed w-full h-full inset-0 z-[60] bg-[#011B2B] opacity-50"></div>
    </div>
  );
};

export default SignUpModal;
