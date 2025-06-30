import React, { useState } from 'react';

const faqData = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces."
    },
    {
        id: 2,
        question: "What is a components?",
        answer: "A components is a reusable piece of UI in a React application."
    },
    {
        id: 3,
        question: "What is JSX?",
        answer: "JSX is a syntax extension that looks like HTML and is used in React to describe UI elements."
    },
    {
        id: 4,
        question: "What is the useState hook?",
        answer: "The useState hook allows you to add state to functional components."
    },
    {
        id: 5,
        question: "What is useEffect used for?",
        answer: "useEffect is a hook used for side effects like data fetching, subscriptions, or manually changing the DOM."
    }
];

function Accordion() {
    const [activeIds, setActiveIds] = useState([]);
    const [multiEnabled, setMultiEnabled] = useState(false);

    const toggleFaq = (id) => {
        if (multiEnabled) {
            // Toggle current ID in list
            setActiveIds((prev) =>
                prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
            );
        } else {
            // Single open at a time
            setActiveIds((prev) => (prev[0] === id ? [] : [id]));
        }
    };

    return (
        <>
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => setMultiEnabled((prev) => !prev)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    {multiEnabled ? "Disable Multi" : "Enable Multi"}
                </button>
            </div>

            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
                <div className="space-y-4">
                    {faqData.map((faq) => (
                        <div key={faq.id} className="bg-white shadow-md rounded-lg">
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full text-left px-4 py-3 font-semibold text-xl border-b"
                            >
                                {faq.question}
                            </button>
                            {activeIds.includes(faq.id) && (
                                <p className="px-4 py-3 text-gray-700">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Accordion;
