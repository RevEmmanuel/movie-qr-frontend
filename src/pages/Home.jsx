import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [result, setResults] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://qr-code-generator-nestjs-production.up.railway.app/qr-code');
                setResults(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <img src={result} alt="qr-code" />
        </div>
    );
}
