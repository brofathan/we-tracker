import React from "react";

export const Activity = (props) => {

    return (
        <ul>
            <li>
                <div className="flex justify-between my-[20px] items-center">
                    <div className="max-w-[100px]">
                        <div className="font-bold">{props.name}</div>
                        <div className="text-xs">{props.desc}</div>
                    </div>
                    <div onClick={() => {props.editAct(props.id)}} className="h-[40px] mx-[8px] p-[5px] px-[15px] bg-[#40669F] text-white rounded-2xl cursor-pointer">Edit</div>
                    <div onClick={() => {props.removeAct(props.id)}} className="h-[40px] p-[5px] px-[15px] bg-red-400 text-white rounded-2xl cursor-pointer">Remove</div>
                </div>
            </li>
        </ul>
    )
}