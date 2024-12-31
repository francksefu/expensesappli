import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

const ListExpenses = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "expenses"));
                const expensesData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setExpenses(expensesData);
            } catch (error) {
                console.error("Error fetching expenses: ", error);
            }
        };
        fetchExpenses();
    }, []);

    return(
        <div>
            <h2 className="text-3xl font-bold underline">Expenses</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>{expense.date} -  {expense.description} - {expense.category}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListExpenses;