// src/components/Balance.jsx
import React from "react";

function Balance({ expenses }) {
    const total = expenses.reduce((acc, cur) => acc + cur.amount, 0);

    return (
        <div className="text-center mb-6">
            <h2 className="text-lg font-semibold">Total Balance</h2>
            <p className={`text-2xl font-bold ${total >= 0 ? "text-green-600" : "text-red-500"}`}>
                ${total.toFixed(2)}
            </p>
        </div>
    );
}

export default Balance;
