import React from 'react';

function Tabs() {
    const [activeTab, setActiveTab] = React.useState(1);
    const tabs = [
        {
            id: 1,
            label: 'Tab 1',
            content: 'Content for Tab 1'
        },
        {
            id: 2,
            label: 'Tab 2',
            content: 'Content for Tab 2'
        },
        {
            id: 3,
            label: 'Tab 3',
            content: 'Content for Tab 3'
        }
    ]
    return (
        <div>
            <div className="flex justify-center py-8 ">
                {tabs.map((tab, i) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 mx-2 rounded-lg transition-colors duration-300 ${
                            tab.id === activeTab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}

                    </button>

                ))}
            </div>
            <div className="p-4 text-center">
                {tabs.map((tab) => (
                    tab.id === activeTab && (
                        <div key={tab.id} className="text-gray-800">
                            <h2 className="text-xl font-semibold mb-2">{tab.label}</h2>
                            <p>{tab.content}</p>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Tabs;