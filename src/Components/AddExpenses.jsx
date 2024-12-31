import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.config"

const AddExpenses = () => {
    let d = new Date();
    console.log(d.getFullYear() + '-' + d.getMonth() + '-' + d.getDay())
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(toString(d.getFullYear() + '-' + d.getMonth() + '-' + d.getDay()));
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "expenses"), {
                amount: parseFloat(amount),
                category,
                date,
                description
            });
            
        } catch (error) {
            console.error("Error adding expenses: ", error);
        }
        setAmount(0);
        setCategory('');
        setDescription('');
    };

    return (
        <>
            <h1 className="text-3xl font-semibold text-glad-500 uppercase text-slate-500 pt-5">Insert your expenses</h1>
            <form onSubmit={handleSubmit} className="mx-auto bg-white rounded-lg px-4">
                <div className="mt-8 mb-8 bg-slate-100 py-5 w-80 mx-auto rounded-xl">
                <input
                    type="number"
                    placeholder="Amount"
                    range="0.1"
                    className="p-2 border rounded m-2 mx-auto block"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input 
                    type="date"
                    className="p-2 border rounded m-2 mx-auto block"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input 
                    type="text"
                    className="p-2 border rounded m-2 mx-auto block"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <textarea 
                    value={description}
                    className="p-2 border rounded m-2 mx-auto block"
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button className="py-1 px-4 bg-purple-600 text-white rounded-full hover:bg-purple-800" type="submit">Submit</button>
                </div>
            </form>
        </>
        
    )
};

export default AddExpenses;