import React from "react";
import { Navbar } from "./Navbar";
import { Body } from "./Body";

export const Container = () => {
    return(
        <div>
            <div className="w-full h-full rounded-[50px] bg-[#40669F] px-[25px] pb-[25px]">
                <Navbar/>
                <Body />
            </div>
        </div>
    )
}