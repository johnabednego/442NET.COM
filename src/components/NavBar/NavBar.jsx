import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import logo from "../assets/logo.svg";
import { RiArrowDropDownLine, RiCloseLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { LogInTrue } from "../../redux/features/navbar/logInModalSlice";

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const options = [
    { name: "Academies and Clubs", link: "/academies&clubs" },
    { name: "Players", link: "/players" },
    { name: "Personnel", link: "/personnel" },
    { name: "Tournaments", link: "/tournaments" },
  ];
  const [category, setCategory] = useState("Category");
  const [open, setOpen] = useState(false);
  const [navSwitch, setNavSwitch] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  const hideModal = (event) => {
    const modal = document.getElementById("modal");
    // Check if the clicked element is outside of the modal
    if (event.target !== modal && !modal.contains(event.target)) {
      setOpen(false); // Call the function to close the modal
    }
  };

  // Toggle menu function
  const toggleMenu = () => {
    if (mobileMenu) {
      // Prepare to hide the menu
      setAnimationClass("fade-out-left");
      // Wait for the animation to finish before hiding the menu
      setTimeout(() => {
        setMobileMenu(false);
      }, 3000); // This duration should match your CSS animation
    } else {
      // Show the menu and apply the fade-in animation
      setMobileMenu(true);
      setAnimationClass("fade-in-right");
    }
  };

  useEffect(() => {
    const urlPathName = window.location.pathname;
    switch (urlPathName) {
      case "/about":
        setNavSwitch(1);
        break;
      case "/market":
        setNavSwitch(2);
        break;
      case "/academies&clubs":
        setNavSwitch(3);
        setCategory("Academies and Clubs");
        break;
      case "/players":
        setNavSwitch(4);
        setCategory("Players");
        break;
      case "/personnel":
        setNavSwitch(5);
        setCategory("Personnel");
        break;
      case "/tournaments":
        setNavSwitch(6);
        setCategory("Tournaments");
        break;

      default:
        setNavSwitch(0);
    }
    scrollToTop();
  }, []);
  return (
    <div className=" z-30 fixed top-0 w-full h-[120px] bg-[#011B2B] flex items-center justify-between px-[20px] xm:px-[30px] sm:px-[50px] py-[20px]">
      {/**Logo and Name*/}
      <div
        onClick={() => navigate("/")}
        className=" cursor-pointer w-auto items-center justify-center  flex flex-col gap-[17px]"
      >
        <img
          src={logo}
          alt="logo"
          className=" hover:rotate-45 transform duration-300 w-[50px] h-[50px] rounded-full shadow-logo"
        />
        <h1 className="text-[12px] text-[#01FFFF]">442NET.COM</h1>
      </div>

      {/**Links */}
      <div className=" hidden md:flex w-auto items-center justify-center text-center gap-[40px]">
        <h1
          onClick={() => navigate("/about")}
          className={` font-medium cursor-pointer text-[18px] ${
            navSwitch === 1
              ? "text-[#FFC000]"
              : "text-[#01FFFF] hover:text-[#FFC000]"
          } `}
        >
          About Us
        </h1>
        <div
          onClick={() => setOpen(!open)}
          className={` w-auto flex items-center justify-center font-medium cursor-pointer text-[18px] ${
            navSwitch < 3
              ? "text-[#01FFFF] hover:text-[#FFC000]"
              : "text-[#FFC000]"
          }`}
        >
          <h1>{category}</h1>
          <RiArrowDropDownLine
            className={`w-[30px] h-[30px] mt-1 ${open ? "rotate-180" : ""}`}
          />
        </div>
        <h1
          onClick={() => navigate("/market")}
          className={` font-medium cursor-pointer text-[18px] ${
            navSwitch === 2
              ? "text-[#FFC000]"
              : "text-[#01FFFF] hover:text-[#FFC000]"
          } `}
        >
          Market
        </h1>

        <button onClick={()=>dispatch(LogInTrue())} className=" hover:scale-90 hover:border-[#FFC000] hover:text-[#FFC000] transition-all ease-in-out duration-300 px-[20px] h-[40px] flex justify-center items-center text-center font-medium text-[22px] text-[#01FFFF] rounded-[40px] shadow-net border-solid border-[1px] border-[#01FFFF]">
          <span>LogIn</span>
        </button>
      </div>

      {/**Category Drop Down */}
      {open ? (
        <div
          onClick={hideModal}
          className=" hidden md:flex flex-col fixed cursor-pointer"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            id="modal"
            className={` z-50 text-[18px] w-auto px-[40px] py-[30px] fixed ${
              category === "Academies and Clubs"
                ? "right-[280px] "
                : "right-[120px] "
            } top-[80px] flex flex-col gap-[30px] rounded-[5px] bg-[#011B2B] shadow-dropDown`}
          >
            {options
              ?.filter((option) => option.name !== category)
              ?.map((option) => {
                return (
                  <h1
                    onClick={() => {
                      setCategory(option.name);
                      setOpen(!open);
                      navigate(option.link);
                    }}
                    className="cursor-pointer text-[#01FFFF] hover:text-[#FFC000]"
                  >
                    {option?.name}
                  </h1>
                );
              })}
          </div>
          <div className="fixed w-full h-full inset-0 bg-[#011B2B] opacity-30"></div>
        </div>
      ) : null}
      {/**Hamburger */}
      <RxHamburgerMenu
        onClick={toggleMenu}
        className=" cursor-pointer flex w-[30px] h-[30px] text-[#01FFFF] md:hidden"
      />

      {/**Mobile Menu */}
      {mobileMenu ? (
        <div className={` md:hidden fixed left-0 top-0`}>
          <div
            className={` ${animationClass} fixed z-30 w-full xf:w-[80%] xm:w-[60%] sm:w-[50%] h-full bg-[#011B2B] shadow-net`}
          >
            {/**Logo, Name, and Close*/}
            <div className=" pl-[50px] w-full h-[120px] flex justify-between">
              <div
                onClick={() => navigate("/")}
                className=" cursor-pointer w-auto items-center justify-center  flex flex-col gap-[17px]"
              >
                <img
                  src={logo}
                  alt="logo"
                  className=" w-[50px] h-[50px] rounded-full shadow-logo"
                />
                <h1 className="text-[12px] text-[#01FFFF]">442NET.COM</h1>
              </div>
              <RiCloseLine
                onClick={toggleMenu}
                className=" cursor-pointer flex w-[30px] h-[30px] text-[#FFFFFF] shadow-net"
              />
            </div>

            {/**Links */}
            <div className="px-[50px]">
              <div className="w-full flex items-center justify-end mt-4">
                <button onClick={()=>dispatch(LogInTrue())} className=" hover:scale-90 hover:border-[#FFC000] hover:text-[#FFC000] transition-all ease-in-out duration-300 px-[20px] h-[40px] flex justify-center items-center text-center font-medium text-[22px] text-[#01FFFF] rounded-[40px] shadow-net border-solid border-[1px] border-[#01FFFF]">
                  <span>LogIn</span>
                </button>
              </div>
              <div className=" w-auto flex flex-col gap-[25px] mt-[10px]">
                <h1
                  onClick={() => navigate("/about")}
                  className={` font-medium cursor-pointer text-[16px] ${
                    navSwitch === 1
                      ? "text-[#FFC000]"
                      : "text-[#01FFFF] hover:text-[#FFC000]"
                  } `}
                >
                  About Us
                </h1>
                <h1
                  onClick={() => navigate("/academies&clubs")}
                  className={` font-medium cursor-pointer text-[16px] ${
                    navSwitch === 3
                      ? "text-[#FFC000]"
                      : "text-[#01FFFF] hover:text-[#FFC000]"
                  } `}
                >
                  Academies and Clubs
                </h1>
                <h1
                  onClick={() => navigate("/players")}
                  className={` font-medium cursor-pointer text-[16px] ${
                    navSwitch === 4
                      ? "text-[#FFC000]"
                      : "text-[#01FFFF] hover:text-[#FFC000]"
                  } `}
                >
                  Players
                </h1>
                <h1
                  onClick={() => navigate("/personnel")}
                  className={` font-medium cursor-pointer text-[16px] ${
                    navSwitch === 5
                      ? "text-[#FFC000]"
                      : "text-[#01FFFF] hover:text-[#FFC000]"
                  } `}
                >
                  Personnel
                </h1>
                <h1
                  onClick={() => navigate("/tournaments")}
                  className={` font-medium cursor-pointer text-[16px] ${
                    navSwitch === 6
                      ? "text-[#FFC000]"
                      : "text-[#01FFFF] hover:text-[#FFC000]"
                  } `}
                >
                  Tournaments
                </h1>
                <h1
                  onClick={() => navigate("/market")}
                  className={` font-medium cursor-pointer text-[16px] ${
                    navSwitch === 2
                      ? "text-[#FFC000]"
                      : "text-[#01FFFF] hover:text-[#FFC000]"
                  } `}
                >
                  Market
                </h1>
              </div>
            </div>
          </div>
          <div
            onClick={toggleMenu}
            className=" cursor-pointer fixed w-full h-full inset-0 bg-[#011B2B] opacity-70"
          ></div>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
