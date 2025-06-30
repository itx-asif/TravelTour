// src/components/ExpenseList.jsx
import React from "react";

function ExpenseList({ expenses, onDelete }) {
    return (
        <div className="space-y-3">
            {expenses.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded shadow-sm"
                >
                    <div>
                        <p className="font-semibold">{item.desc}</p>
                        <p className={`text-sm ${item.amount < 0 ? "text-red-500" : "text-green-600"}`}>
                            ${item.amount}
                        </p>
                    </div>
                    <button
                        onClick={() => onDelete(index)}
                        className="text-red-500 hover:underline"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ExpenseList;
