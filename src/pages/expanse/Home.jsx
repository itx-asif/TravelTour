// src/App.jsx
import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Balance from "./components/Balance";

function ExpanseHome() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        setExpenses(savedExpenses);
    }, []);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const deleteExpense = (index) => {
        const updated = [...expenses];
        updated.splice(index, 1);
        setExpenses(updated);
    };

    return (
        <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4 text-center text-orange-600">💸 Expense Tracker</h1>
            <Balance expenses={expenses} />
            <ExpenseForm onAdd={addExpense} />
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </div>
    );
}

export default ExpanseHome;
