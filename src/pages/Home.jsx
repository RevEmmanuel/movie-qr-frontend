import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [result, setResults] = useState('');
    const [reloadTimer, setReloadTimer] = useState(10); // Initial timer value in seconds

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://qr-code-generator-nestjs-production.up.railway.app/qr-code');
                setResults(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        // Call the API initially
        fetchData();

        // Set up an interval to call the API every 10 seconds
        const intervalId = setInterval(() => {
            fetchData();
            setReloadTimer(10); // Reset the timer to 10 seconds after each fetch
        }, 10000);

        // Update the timer every second
        const timerId = setInterval(() => {
            setReloadTimer(prevTimer => prevTimer - 1);
        }, 1000);

        // Clean up the intervals when the component unmounts
        return () => {
            clearInterval(intervalId);
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <img src={result} alt="qr-code" />
            <p>Reload in {reloadTimer} {reloadTimer === 1 ? 'second' : 'seconds'}</p>
        </div>
    );
}
