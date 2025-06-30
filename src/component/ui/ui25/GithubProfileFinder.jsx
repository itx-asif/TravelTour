import React, { useState, useEffect } from "react";

function GitHubProfileFinder() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    // Fetch suggestions from GitHub
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (username.length < 2) {
                setSuggestions([]);
                return;
            }

            try {
                const res = await fetch(`https://api.github.com/search/users?q=${username}`);
                const data = await res.json();
                setSuggestions(data.items?.slice(0, 5) || []);
            } catch (err) {
                console.log(err);
                setSuggestions([]);
            }
        };

        const delay = setTimeout(fetchSuggestions, 300); // debounce
        return () => clearTimeout(delay);
    }, [username]);

    // Fetch full user profile
    const handleSearch = async (user = username) => {
        if (!user.trim()) return;

        try {
            const res = await fetch(`https://api.github.com/users/${user}`);
            if (!res.ok) {
                setUserData(null);
                setError("User not found");
                return;
            }
            const data = await res.json();
            setUserData(data);
            setError("");
            setSuggestions([]);
        } catch (err) {
            setError(err.message);
            setUserData(null);
        }
    };

    const handleSuggestionClick = (login) => {
        setUsername(login);
        handleSearch(login);
    };

    return (
        <>
            <div className="relative mb-5">
                <div className="relative flex  max-w-xl  m-auto items-center justify-center gap-5">
                    <input
                        type="text"
                        placeholder="GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full grow px-4 py-2 border rounded"
                    />
                    <button
                        onClick={() => handleSearch()}
                        className=" px-6 py-2 w-fit bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Search
                    </button>
                </div>

                {suggestions.length > 0 && (
                    <ul className="absolute z-10 bg-white border w-full mt-1 rounded shadow max-h-48 overflow-auto">
                        {suggestions.map((user) => (
                            <li
                                key={user.id}
                                onClick={() => handleSuggestionClick(user.login)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                            >
                                <img src={user.avatar_url} className="w-6 h-6 rounded-full" alt="" />
                                {user.login}
                            </li>
                        ))}
                    </ul>
                )}
            </div>



            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

            {userData && (
                <div className="text-center mt-6">
                    <img
                        src={userData.avatar_url}
                        alt={userData.login}
                        className="w-20 h-20 rounded-full mx-auto mb-3 border"
                    />
                    <h3 className="text-xl font-semibold">{userData.name || userData.login}</h3>
                    {userData.bio && <p className="text-gray-600 mt-1">{userData.bio}</p>}

                    <div className="mt-4 flex justify-center gap-6 text-sm text-gray-700">
                        <div>
                            <strong>Repos</strong>
                            <div>{userData.public_repos}</div>
                        </div>
                        <div>
                            <strong>Followers</strong>
                            <div>{userData.followers}</div>
                        </div>
                    </div>

                    <a
                        href={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-600 hover:underline"
                    >
                        View GitHub Profile →
                    </a>
                </div>
            )}
        </>
    );
}

export default GitHubProfileFinder;
