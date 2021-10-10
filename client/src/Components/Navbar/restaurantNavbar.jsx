import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineArrowLeft} from "react-icons/ai";

const MobileNav = () => {
    return (
    <div className="flex items-center justify-between w-full lg:hidden">
        <AiOutlineArrowLeft />
        <div className="w-28">
            <img 
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                alt="logo"
                className="w-full h-full" 
            />
        </div>
        <div className="flex items-center gap-3">
            <button className="bg-zomato-400 text-white px-2 py-2 rounded-full">Use App</button>
            <span className="border p-2 border-gray-300 text-zomato-400 rounded-full"><FaUserAlt /></span>
        </div>
    </div>
    );
};

const LargeNav = () => {
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
                    <button className="text-gray-500 hover:text-gray-900 text-xl">Login</button>
                    <button className="text-gray-500 hover:text-gray-800 text-xl">Signup</button>
                </div>
            </div>
        </div>
    </>
    );
};


const RestaurantNavbar = () => {
    return (
        <>
            <nav className="p-4  w-full bg-white shadow-md lg:shadow-none w-full items-center ">
            
                <MobileNav />
                <LargeNav />    
                  
            </nav>
        </>
    );
};

export default RestaurantNavbar;
