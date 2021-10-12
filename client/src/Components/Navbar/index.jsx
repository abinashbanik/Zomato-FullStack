import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";

//Components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";



const MobileNav = ({ SignIn, SignUp }) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    return (
    <div className="flex items-center justify-between w-full lg:hidden">
        <div className="w-28">
            <img 
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                alt="logo"
                className="w-full h-full" 
            />
        </div>
        <div className="flex items-center gap-3 relative">
            <button className="bg-zomato-400 text-white px-2 py-2 rounded-full">Use App</button>
            <span
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border p-2 border-gray-300 text-zomato-400 rounded-full"
                >
                <FaUserAlt />
            </span>
            {isDropDownOpen && (
            <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={SignIn}>Sign In</button>
                <button onClick={SignUp}>Sign Up</button>
            </div>
            )}
        </div>
    </div>
    );
};

const LargeNav = ({ SignIn, SignUp }) => {
    return (
    <>
        <div className="container px-20 mx-auto">
            <div className="hidden w-full  lg:flex items-center justify-around gap-4 ">
                <div className="w-28">
                    <img 
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                        alt="logo"
                        className="w-full h-full" />
                </div>
                <div className="w-3/4 flex items-center gap-3 bg-white shadow-md p-3 border border-gray-200 rounded">
                    <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                        <span className="text-zomato-400"><HiLocationMarker /></span>
                        <input type="text" className="" placeholder="Agartala" className="focus:outline-none" />
                        <IoMdArrowDropdown />
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <RiSearch2Line />
                        <input type="search" 
                                className="w-full focus:outline-none"
                                placeholder="Search for restaurant,cuisine or dish" />
                    </div>
                </div>
                <div className="flex ml-28 gap-4 ">
                <button
                    onClick={SignIn}
                    className="text-gray-500 text-xl hover:text-gray-800"
                    >
                    Login
                </button>
                <button
                    onClick={SignUp}
                    className="text-gray-500 text-xl hover:text-gray-800"
                    >
                    Signup
                </button>
                </div>
            </div>
        </div>
    </>
    );
};


const Navbar = () => {
        const [openSignin, setOpenSignin] = useState(false);
        const [openSignup, setOpenSignup] = useState(false);
      
        const openSignInmodal = () => setOpenSignin(true);
        const openSignUpmodal = () => setOpenSignup(true);
    return (
        
        <>
            <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
            <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
            <nav className="p-4  w-full bg-white shadow-md lg:shadow-none w-full items-center ">
            
            <MobileNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
            <LargeNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />    
                  
            </nav>
        </>
    );
};

export default Navbar;
