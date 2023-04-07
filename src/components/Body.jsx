import React, { useState } from "react";
import { Overlay } from "./Overlay";
import { Activity } from "./Activity";
import { SpendOverlay } from "./SpendOverlay";
import { Spending } from "./Spending";

export const Body = () => {

    const [visibility, setVisibility] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [activities, setActivities] = useState([])

    const [spendVis, setSpendVis] = useState(false)
    const [spendName, setSpendName] = useState("")
    const [price, setPrice] = useState(0)
    const [spendings, setSpendings] = useState([])
    const [total, setTotal] = useState(0)
    
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)

    const editAct = (id) => {
        const editItem = activities.find((item) => item.id === id)
        setEditId(id)
        setName(editItem.name)
        setDescription(editItem.desc)
        setIsEditing(true)
        setVisibility(true)

    }
    const removeAct = (id) => {
        setActivities(activities.filter((act) => act.id !== id))
    }

    const editSpend = (id) => {
        const editItem = spendings.find((item) => item.id === id)

        setTotal(parseInt(total)-parseInt(editItem.price))

        setEditId(id)
        setSpendName(editItem.spendName)
        setPrice(editItem.price)
        setIsEditing(true)
        setSpendVis(true)
    }

    const removeSpend = (id) => {
        setSpendings(spendings.filter((spend) => spend.id !== id))
        spendings.forEach((spend) => {
            if(spend.id === id){
                setTotal(parseInt(total)-parseInt(spend.price))
            }
        });
        
    }

    return(
        <>
        <div className="flex justify-around w-full min-h-screen rounded-[50px] bg-white px-[70px] py-[80px]">
            <div className="flex flex-col">
                <div className="text-2xl mb-[10px] font-bold text-[#1E2B3E]">Today's Activity</div>

                {activities.length === 0 ? (
                    <div onClick={() => {setVisibility(true)}} className="mt-[50px] px-[90px] py-[20px] cursor-pointer bg-slate-300 rounded-2xl text-white">+ Add activity</div>
                ) : (
                    <div>
                    {activities.map((act, key) => (
                        <Activity key={key} id={act.id} name={act.name} desc={act.desc} 
                            editAct={editAct} 
                            removeAct={removeAct}
                            />
                    ))}

                        <div onClick={() => {setVisibility(true)}} className="mt-[50px] px-[90px] py-[20px] cursor-pointer bg-slate-300 rounded-2xl text-white">+ Add activity</div>
                    </div> 
                )}

            </div>

            <div className="min-h-screen min-w-[1px] my-[30px] bg-gray-300" />

            <div className="flex flex-col">
                <div className="text-2xl mb-[10px] font-bold text-[#1E2B3E]">Today's Spending</div>
                {spendings.length === 0 ? (
                    <div onClick={() => {setSpendVis(true)}} className="mt-[50px] px-[90px] py-[20px] cursor-pointer bg-slate-300 rounded-2xl text-white">+ Add spending</div>
                ) : (
                    <div>
                    {spendings.map((spend, key) => (
                        <Spending key={key} id={spend.id} spendName={spend.spendName} price={spend.price} 
                            editSpend={editSpend} 
                            removeSpend={removeSpend}
                            />
                    ))}
                    <div>Total: {total}</div>

                    <div onClick={() => {setSpendVis(true)}} className="mt-[50px] px-[90px] py-[20px] cursor-pointer bg-slate-300 rounded-2xl text-white">+ Add spending</div>
                    </div> 
                )}
            </div>
        </div>

        <div>
            <Overlay 
                visibility={visibility} 
                setVisibility={setVisibility} 
                name={name}
                setName={setName} 
                description={description}
                setDescription={setDescription}
                activities={activities}
                setActivities={setActivities}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                editId={editId}
                setEditId={setEditId}
            />
            <SpendOverlay 
                spendVis={spendVis}
                setSpendVis={setSpendVis}
                spendName={spendName}
                setSpendName={setSpendName} 
                price={price}
                setPrice={setPrice}
                spendings={spendings}
                setSpendings={setSpendings}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                editId={editId}
                setEditId={setEditId}
                total={total}
                setTotal={setTotal}
            
            />
        </div>
        </>
    )
}