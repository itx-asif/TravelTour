import React, { useState } from 'react';
import axios from 'axios';
import { FaSearchLocation, FaTemperatureHigh, FaWind, FaTint } from 'react-icons/fa';

function WeatherApp() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e&units=metric`
            );
            setWeather(res.data);
            setError('');
        } catch (err) {
            setWeather(null);
            setError('City not found.');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-16 p-6 bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl shadow-xl text-gray-800">
            <h1 className="text-3xl font-bold text-center mb-6">🌤 Weather App</h1>

            <div className="flex gap-3 mb-6">
                <input
                    type="text"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    onClick={fetchWeather}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                >
                    <FaSearchLocation /> Search
                </button>
            </div>

            {error && <p className="text-red-600 text-center mb-4">{error}</p>}

            {weather && (
                <div className="bg-white rounded-xl p-6 shadow-inner">
                    <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
                    <p className="text-gray-600 capitalize mb-4">{weather.weather[0].description}</p>

                    <div className="grid grid-cols-2 gap-6 text-center">
                        <div>
                            <FaTemperatureHigh className="text-blue-500 text-2xl mx-auto mb-1" />
                            <p className="font-semibold text-xl">{weather.main.temp}°C</p>
                            <p className="text-sm text-gray-500">Temperature</p>
                        </div>

                        <div>
                            <FaTint className="text-blue-500 text-2xl mx-auto mb-1" />
                            <p className="font-semibold text-xl">{weather.main.humidity}%</p>
                            <p className="text-sm text-gray-500">Humidity</p>
                        </div>

                        <div>
                            <FaWind className="text-blue-500 text-2xl mx-auto mb-1" />
                            <p className="font-semibold text-xl">{weather.wind.speed} m/s</p>
                            <p className="text-sm text-gray-500">Wind Speed</p>
                        </div>

                        <div>
                            <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="Weather Icon"
                                className="w-12 h-12 mx-auto"
                            />
                            <p className="text-sm text-gray-500">Icon</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
