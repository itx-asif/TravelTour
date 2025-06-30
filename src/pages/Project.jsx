import React, { useRef, useState } from 'react';
import Accordion from "../component/ui/ui25/accordion.jsx";
import Tabs from "../component/ui/ui25/Tabs.jsx";
import Popup from "../component/ui/ui25/Popup.jsx";
import RandomColor from "../component/ui/ui25/RandomColor.jsx";
import StarRating from "../component/ui/ui25/StarRating.jsx";
import LoadMoreList from "../component/ui/ui25/LoadMoreList.jsx";
import QRCode from "../component/ui/ui25/QRCode.jsx";
import GitHubProfileFinder from "../component/ui/ui25/GithubProfileFinder.jsx";
import BackToTopButton from "../component/ui/ui25/BackToTop.jsx";
import ProgressBar from "../component/ui/ui25/progressbar.jsx";

function Project() {
    const [showPopup, setShowPopup] = useState(false);
    const handlePopupToggle = () => setShowPopup(!showPopup);

    // Refs to sections
    const refs = {
        Accordion: useRef(null),
        Tabs: useRef(null),
        Popup: useRef(null),
        RandomColor: useRef(null),
        StarRating: useRef(null),
        LoadMoreList: useRef(null),
        QRCode: useRef(null),
        GitHubProfileFinder: useRef(null),
    };

    const scrollToSection = (section) => {
        const ref = refs[section];
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>

            <div className="bg-white  sticky top-0 z-40">
                <div className="max-w-5xl flex px-4 py-6 items-center justify-between gap-5 mx-auto">
                    <h1 className={"text-2xl capitalize"}> select to jump to section</h1>
                    <select
                        onChange={(e) => scrollToSection(e.target.value)}
                        className="w-full md:w-64 p-2 rounded border"
                        defaultValue=""
                    >
                        <option value="" disabled>Jump to Section</option>
                        {Object.keys(refs).map((key) => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </select>
                </div>
                <ProgressBar />
            </div>

            <div className="min-h-screen bg-gray-100 py-10 px-4">
                <div className="max-w-5xl mx-auto space-y-12">

                    <section ref={refs.Accordion} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Accordion</h2>
                        <Accordion />
                    </section>

                    <section ref={refs.Tabs} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Tabs</h2>
                        <Tabs />
                    </section>

                    <section ref={refs.Popup} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold mb-4">Popup</h2>
                        <button
                            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            onClick={handlePopupToggle}
                        >
                            Toggle Popup
                        </button>
                        {showPopup && <Popup onClose={handlePopupToggle} />}
                    </section>

                    <section ref={refs.RandomColor} className="rounded-lg overflow-hidden shadow-md">
                        <RandomColor />
                    </section>

                    <section ref={refs.StarRating} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold mb-4">Star Rating</h2>
                        <StarRating />
                    </section>

                    <section ref={refs.LoadMoreList} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Load More List</h2>
                        <LoadMoreList />
                    </section>

                    <section ref={refs.QRCode} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold mb-4">QR Code Generator</h2>
                        <QRCode />
                    </section>

                    <section ref={refs.GitHubProfileFinder} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h2 className="text-xl font-semibold mb-4">GitHub Profile Finder</h2>
                        <GitHubProfileFinder />
                    </section>
                </div>

                <BackToTopButton />
            </div>
        </>
    );
}

export default Project;
