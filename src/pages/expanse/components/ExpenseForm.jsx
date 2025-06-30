// src/components/ExpenseForm.jsx
import React, { useState } from "react";

function ExpenseForm({ onAdd }) {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!desc || !amount) return;
        onAdd({ desc, amount: parseFloat(amount) });
        setDesc("");
        setAmount("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <input
                type="text"
                placeholder="Expense Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full border rounded px-4 py-2"
            />
            <input
                type="number"
                placeholder="Amount (use - for expense)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border rounded px-4 py-2"
            />
            <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
            >
                Add Expense
            </button>
        </form>
    );
}

export default ExpenseForm;
