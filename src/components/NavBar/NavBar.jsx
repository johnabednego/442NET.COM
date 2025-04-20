import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../assets/logo.svg";
import { RiArrowDropDownLine, RiCloseLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { LogInTrue } from "../../redux/features/navbar/logInModalSlice";
import { SignUpTrue } from "../../redux/features/navbar/signUpModalSlice";

const NavBar = () => {
  const dispatch = useDispatch();
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Set active tab & login state on initial load
  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
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
      case "/dashboard":
        setNavSwitch(-1);
        break;
      default:
        setNavSwitch(0);
    }

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.reload();
  };

  const hideModal = (event) => {
    const modal = document.getElementById("modal");
    if (event.target !== modal && !modal.contains(event.target)) {
      setOpen(false);
    }
  };

  const toggleMenu = () => {
    if (mobileMenu) {
      setAnimationClass("fade-out-left");
      setTimeout(() => setMobileMenu(false), 3000);
    } else {
      setMobileMenu(true);
      setAnimationClass("fade-in-right");
    }
  };

  return (
    <div className="z-30 fixed top-0 w-full h-[120px] bg-[#011B2B] flex items-center justify-between px-[20px] xm:px-[30px] sm:px-[50px] py-[20px]">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer flex flex-col items-center gap-[17px]"
      >
        <img
          src={logo}
          alt="logo"
          className="hover:rotate-45 transform duration-300 w-[50px] h-[50px] rounded-full shadow-logo"
        />
        <h1 className="text-[12px] text-[#01FFFF]">442NET.COM</h1>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-[40px]">
        {/* Dashboard or About */}
        {isLoggedIn ? (
          <h1
            onClick={() => navigate("/dashboard")}
            className={`font-medium cursor-pointer text-[18px] ${
              navSwitch === -1 ? "text-[#FFC000]" : "text-[#01FFFF] hover:text-[#FFC000]"
            }`}
          >
            Dashboard
          </h1>
        ) : (
          <h1
            onClick={() => navigate("/about")}
            className={`font-medium cursor-pointer text-[18px] ${
              navSwitch === 1 ? "text-[#FFC000]" : "text-[#01FFFF] hover:text-[#FFC000]"
            }`}
          >
            About Us
          </h1>
        )}

        {/* Category Dropdown */}
        <div
          onClick={() => setOpen(!open)}
          className={`flex items-center font-medium cursor-pointer text-[18px] ${
            navSwitch < 3 ? "text-[#01FFFF] hover:text-[#FFC000]" : "text-[#FFC000]"
          }`}
        >
          <h1>{category}</h1>
          <RiArrowDropDownLine
            className={`w-[30px] h-[30px] mt-1 ${open ? "rotate-180" : ""}`}
          />
        </div>

        {/* Market */}
        <h1
          onClick={() => navigate("/market")}
          className={`font-medium cursor-pointer text-[18px] ${
            navSwitch === 2 ? "text-[#FFC000]" : "text-[#01FFFF] hover:text-[#FFC000]"
          }`}
        >
          Market
        </h1>

        {/* Auth Buttons */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hover:scale-90 transition-all duration-300 px-[20px] h-[40px] text-[22px] text-[#FFC000] rounded-[40px] border border-[#FFC000]"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => dispatch(LogInTrue())}
              className="hover:scale-90 transition-all duration-300 px-[20px] h-[40px] text-[22px] text-[#01FFFF] rounded-[40px] border border-[#01FFFF]"
            >
              LogIn
            </button>
            <button
              onClick={() => dispatch(SignUpTrue())}
              className="hover:scale-90 transition-all duration-300 px-[20px] h-[40px] text-[22px] text-[#01FFFF] rounded-[40px] border border-[#01FFFF]"
            >
              Sign Up
            </button>
          </>
        )}
      </div>

      {/* Dropdown Modal */}
      {open && (
        <div onClick={hideModal} className="hidden md:flex flex-col fixed">
          <div
            id="modal"
            className={`z-50 text-[18px] px-[40px] py-[30px] fixed ${
              category === "Academies and Clubs" ? "right-[280px]" : "right-[120px]"
            } top-[80px] flex flex-col gap-[30px] rounded-[5px] bg-[#011B2B] shadow-dropDown`}
          >
            {options
              .filter((option) => option.name !== category)
              .map((option) => (
                <h1
                  key={option.name}
                  onClick={() => {
                    setCategory(option.name);
                    setOpen(false);
                    navigate(option.link);
                  }}
                  className="cursor-pointer text-[#01FFFF] hover:text-[#FFC000]"
                >
                  {option.name}
                </h1>
              ))}
          </div>
          <div className="fixed w-full h-full inset-0 bg-[#011B2B] opacity-30"></div>
        </div>
      )}

      {/* Hamburger Icon */}
      <RxHamburgerMenu
        onClick={toggleMenu}
        className="md:hidden w-[30px] h-[30px] text-[#01FFFF] cursor-pointer"
      />

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden fixed left-0 top-0 z-30 w-full h-full">
          <div className={`fixed w-full xf:w-[80%] xm:w-[60%] sm:w-[50%] h-full bg-[#011B2B] ${animationClass}`}>
            {/* Logo & Close */}
            <div className="pl-[50px] w-full h-[120px] flex justify-between">
              <div
                onClick={() => navigate("/")}
                className="cursor-pointer flex flex-col items-center gap-[17px]"
              >
                <img src={logo} alt="logo" className="w-[50px] h-[50px] rounded-full shadow-logo" />
                <h1 className="text-[12px] text-[#01FFFF]">442NET.COM</h1>
              </div>
              <RiCloseLine
                onClick={toggleMenu}
                className="w-[30px] h-[30px] text-white cursor-pointer"
              />
            </div>

            {/* Auth & Nav Links */}
            <div className="px-[50px]">
              <div className="w-full flex flex-col gap-[15px] mt-4">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      setMobileMenu(false);
                      handleLogout();
                    }}
                    className="hover:scale-90 transition-all px-[20px] h-[40px] text-[22px] text-[#FFC000] rounded-[40px] border border-[#FFC000]"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setMobileMenu(false);
                        dispatch(LogInTrue());
                      }}
                      className="hover:scale-90 transition-all px-[20px] h-[40px] text-[22px] text-[#01FFFF] rounded-[40px] border border-[#01FFFF]"
                    >
                      LogIn
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenu(false);
                        dispatch(SignUpTrue());
                      }}
                      className="hover:scale-90 transition-all px-[20px] h-[40px] text-[22px] text-[#01FFFF] rounded-[40px] border border-[#01FFFF]"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-[25px] mt-[10px]">
                {isLoggedIn ? (
                  <h1
                    onClick={() => {
                      setMobileMenu(false);
                      navigate("/dashboard");
                    }}
                    className={`cursor-pointer text-[16px] ${
                      navSwitch === -1 ? "text-[#FFC000]" : "text-[#01FFFF] hover:text-[#FFC000]"
                    }`}
                  >
                    Dashboard
                  </h1>
                ) : (
                  <h1
                    onClick={() => {
                      setMobileMenu(false);
                      navigate("/about");
                    }}
                    className={`cursor-pointer text-[16px] ${
                      navSwitch === 1 ? "text-[#FFC000]" : "text-[#01FFFF] hover:text-[#FFC000]"
                    }`}
                  >
                    About Us
                  </h1>
                )}

                {options.map((opt, i) => (
                  <h1
                    key={opt.name}
                    onClick={() => {
                      setMobileMenu(false);
                      navigate(opt.link);
                    }}
                    className={`cursor-pointer text-[16px] ${
                      navSwitch === i + 3 ? "text-[#FFC000]" : "text-[#01FFFF] hover:text-[#FFC000]"
                    }`}
                  >
                    {opt.name}
                  </h1>
                ))}

                <h1
                  onClick={() => {
                    setMobileMenu(false);
                    navigate("/market");
                  }}
                  className={`cursor-pointer text-[16px] ${
                    navSwitch === 2 ? "text-[#FFC000]" : "text-[#01FFFF] hover:text-[#FFC000]"
                  }`}
                >
                  Market
                </h1>
              </div>
            </div>
          </div>
          <div
            onClick={toggleMenu}
            className="fixed w-full h-full inset-0 bg-[#011B2B] opacity-70"
          ></div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
