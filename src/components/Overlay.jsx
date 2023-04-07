import React, { useState } from "react";

export const Overlay = (props) => {

    const handleSave = () => {
        if(props.isEditing){
            props.setActivities(
                props.activities.map((item) => {
                    if(item.id === props.editId){
                        return {...item, name: props.name, desc: props.description}
                    }
                    return item
                })
            )
            props.setEditId(null)
            props.setIsEditing(false)
            props.setVisibility(false)
        }else{
            props.setVisibility(false)
            const newActivity = [...props.activities, {id: new Date().getTime().toString(), name: props.name, desc: props.description}]
            props.setActivities(newActivity)
        }
    }

    return (
        <div className={(props.visibility && props.isEditing) || props.visibility ? "" : "hidden"}>
            <div className='flex items-center justify-center min-w-screen min-h-screen bg-black fixed inset-0 bg-opacity-50'>
                <div className="w-screen p-2 py-[50px] bg-white rounded-2xl mx-[200px]">
                    <div>
                        <div className="m-[5px]">Name</div>
                        <input className="mb-[20px] border-gray-500 border-[1px] rounded-2xl px-4 text-l w-[400px]" type="text" placeholder="Type something"
                            onChange={(event) => props.setName(event.target.value)} value={props.name}/>
                    </div>
                    <div> 
                        <div className="m-[5px]">Description</div>
                        <textarea className="mb-[20px] border-gray-500 border-[1px] rounded-2xl px-4 pb-[40px] text-l w-[400px]" placeholder="Type something" 
                            onChange={(event) => props.setDescription(event.target.value)} value={props.desc}/>
                    </div>
                    <div className="flex justify-center">
                        <div className="mx-[8px] p-[5px] px-[15px] bg-slate-300 text-white rounded-2xl cursor-pointer" onClick={() => {props.setVisibility(false)}}>Close</div>
                        <div className="mx-[8px] p-[5px] px-[15px] bg-[#40669F] text-white rounded-2xl cursor-pointer" onClick={() => {handleSave()}}>Save</div>
                    </div>
                </div>
            </div>
        </div>
    )
}