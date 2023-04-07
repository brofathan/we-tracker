import React from "react";

export const Spending = (props) => {

    return (
        <ul>
            <li>
                <div className="flex justify-between my-[20px] items-center">
                    <div className="max-w-[100px]">
                        <div className="font-bold">{props.spendName}</div>
                        <div className="text-xs">Rp{props.price}</div>
                    </div>
                    <div onClick={() => {props.editSpend(props.id)}} className="h-[40px] mx-[8px] p-[5px] px-[15px] bg-[#40669F] text-white rounded-2xl cursor-pointer">Edit</div>
                    <div onClick={() => {props.removeSpend(props.id)}} className="h-[40px] p-[5px] px-[15px] bg-red-400 text-white rounded-2xl cursor-pointer">Remove</div>
                </div>
            </li>
        </ul>
    )
}