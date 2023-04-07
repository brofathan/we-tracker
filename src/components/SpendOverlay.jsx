import React, { useState } from "react";

export const SpendOverlay = (props) => {

    const handleSave = () => {
        if(props.isEditing){
            props.setSpendings(
                props.spendings.map((item) => {
                    if(item.id === props.editId){
                        props.setTotal(parseInt(props.total)+parseInt(props.price));
                        return {...item, spendName: props.spendName, price: props.price}
                    }
                    return item
                })
            )
            props.setEditId(null)
            props.setIsEditing(false)
            props.setSpendVis(false)
        }else{
            props.setSpendVis(false)
            const newSpending = [...props.spendings, {id: new Date().getTime().toString(), spendName: props.spendName, price: props.price}]
            props.setTotal(parseInt(props.total)+parseInt(props.price))
            props.setSpendings(newSpending)
        }
    }

    return (
        <div className={(   props.spendVis && props.isEditing) || props.spendVis ? "" : "hidden"}>
            <div className='flex items-center justify-center min-w-screen min-h-screen bg-black fixed inset-0 bg-opacity-50'>
                <div className="w-screen p-2 py-[50px] bg-white rounded-2xl mx-[200px]">
                    <div>
                        <div className="m-[5px]">Name</div>
                        <input className="mb-[20px] border-gray-500 border-[1px] rounded-2xl px-4 text-l w-[400px]" type="text" placeholder="Type something"
                            onChange={(event) => props.setSpendName(event.target.value)} value={props.spendName}/>
                    </div>
                    <div> 
                        <div className="m-[5px]">Price (Rp)</div>
                        <input className="mb-[20px] border-gray-500 border-[1px] rounded-2xl px-4 text-l w-[400px]" placeholder="Type something" 
                            onChange={(event) => props.setPrice(event.target.value)} value={props.price}/>
                    </div>
                    <div className="flex justify-center">
                        <div className="mx-[8px] p-[5px] px-[15px] bg-slate-300 text-white rounded-2xl cursor-pointer" onClick={() => {props.setSpendVis(false)}}>Close</div>
                        <div className="mx-[8px] p-[5px] px-[15px] bg-[#40669F] text-white rounded-2xl cursor-pointer" onClick={() => {handleSave()}}>Save</div>
                    </div>
                </div>
            </div>
        </div>
    )
}