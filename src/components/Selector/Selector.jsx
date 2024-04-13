import React, { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

const Selector = ({ options, item, setItem, placeholder }) => {
  const [data, setData] = useState(options);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const selectorRef = useRef(null);




  const handleOpen = (value) =>{
    setOpen(value)
    setData(options)
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setItem(value)
    setSelected(value)
    if (value) {
      handleOpen(true)
    }
  };

  const hideSelector = (event) => {
    const modal = document.getElementById('modal');
    // Check if the clicked element is outside of the modal
    if (event.target !== modal && !modal.contains(event.target)) {
      handleOpen(!open)
    }
  }

  // useEffect(() => {
  //   // fetch("https://restcountries.com/v2/all?fields=name")
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     setCountries(data);
  //   //   });
  //   const filteredOptions = options?.filter(
  //     (option) => option?.name.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  //   setData(filteredOptions);
  // }, [inputValue, options]);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        handleOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);


  useEffect(() => {
    const filteredOptions = options?.filter(
      (option) => option?.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setData(filteredOptions);
  }, [inputValue, options]);

  return (
    <div ref={selectorRef} className="sm:w-[12.75rem] cursor-pointer">
      <div
        onClick={() => {
          handleOpen(!open)
        }}
        className={` px-[12px] border-solid border-[1px] border-[#011B2B] text-[1.125rem] shadow-input rounded-[2.5rem] h-[2.9rem] sm:h-[40px] bg-white flex items-center justify-between`}
      >
        <input
          type="text"
          id="input"
          value={item}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="placeholder:text-gray-700 outline-none w-full"
        />
        <BiChevronDown color="#707070" size={30} className={`${open && "rotate-180"}`} />
      </div>
      {open || inputValue.length > 0 ?
        <div>
          <div
            onClick={hideSelector}
            className=" cursor-pointer w-full h-full justify-center flex overflow-x-hidden overflow-y-auto z-[26] outline-none focus:outline-none scrollbar-hide"
          >
            <ul

              id='modal'
              className={` ${!open ? "hidden" : ""} rounded-[20px] mt-2 w-[60%] sm:w-[12.75rem] absolute bg-white overflow-y-auto z-[25] shadow-net ${open ? data?.length < 6 ? "max-h-fit" : "h-[190px]" : "max-h-0"}`}
            >
              {data && data.length > 0 ? data?.map((item) => (
                <li

                  className={`p-2 text-sm hover:bg-[#011B2B] hover:text-white
         ${item?.name.toLowerCase() === selected?.toLowerCase() &&
                    "bg-[#011B2B] text-white"
                    }
         ${item?.name.toLowerCase().includes(inputValue)
                      ? "block"
                      : !open || inputValue.length === 0 ? "hidden" : "block"
                    }`}
                  onClick={() => {
                    if (item?.name.toLowerCase() !== selected?.toLowerCase()) {
                      setSelected(item?.name);
                      setOpen(false);
                      setInputValue(item?.name);
                      setItem(item?.name)
                    } else {
                      setOpen(false);
                      setSelected(item?.name);
                      setInputValue(item?.name);
                      setItem(item?.name)
                    }
                  }}
                >
                  {item?.name}
                </li>
              )) :
                <li className="p-2 text-sm text-[#EB0728]">no results found</li>
              }
            </ul>
          </div>
          <div className="opacity-70 fixed z-20 bg-black"></div>
        </div>
        : ""

      }
    </div>
  );
};

export default Selector;
