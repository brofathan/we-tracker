import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="flex justify-between items-center">
            <img src={require('../img/Logo.png')} className="w-[247px]"/>
            <ul className="flex text-[12px] px-10 text-white">
                <li className="mx-2 px-7 py-[5px] cursor-pointer bg-white text-[#1E2B3E] rounded-2xl">Monday</li>
                <li className="mx-2 px-7 py-[5px] cursor-pointer">Tuesday</li>
                <li className="mx-2 px-7 py-[5px] cursor-pointer">Wednesday</li>
                <li className="mx-2 px-7 py-[5px] cursor-pointer">Thursday</li>
                <li className="mx-2 px-7 py-[5px] cursor-pointer">Friday</li>
                <li className="mx-2 px-7 py-[5px] cursor-pointer">Saturday</li>
                <li className="mx-2 px-7 py-[5px] cursor-pointer">Sunday</li>
            </ul>
        </div>
    )
}