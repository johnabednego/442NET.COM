import React from "react";
import LogIn from "./LogIn";
import { LogInFalse } from "../../redux/features/navbar/logInModalSlice";
import { useDispatch } from "react-redux";

const LogInModal = () => {
  const dispatch = useDispatch();

  const hideModal = (event) => {
    const modal = document.getElementById("modal");
    // Check if the clicked element is outside of the modal
    if (!modal.contains(event.target)) {
      dispatch(LogInFalse()); // Call the function to close the modal
    }
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <div
        onClick={hideModal}
        className="cursor-pointer h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[70] outline-none focus:outline-none scrollbar-hide"
      >
        <div id="modal" className="relative cursor-default" onClick={stopPropagation}>
          {/*content*/}
          <LogIn />
        </div>
      </div>
      <div className="fixed w-full h-full inset-0 z-[60] bg-[#011B2B] opacity-50"></div>
    </div>
  );
};

export default LogInModal;
