import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQRCode } from 'react-qrcode';

export default function Home() {
    // const [result, setResults] = useState('https://qr-code-generator-nestjs-production.up.railway.app/movies/2938af');
    // const [reloadTimer, setReloadTimer] = useState(10); // Initial timer value in seconds
    // const [dataUrl, setDataUrl] = useState('');

    // Use the useQRCode hook with the result state to generate the dataUrl

    const data = useQRCode('https://movie-qr-frontend-pgxadu11s-deolaaxo-gmailcom.vercel.app/2938af');
    // useEffect(() => {
    //     setDataUrl(data);
    //     console.log('called ooo');
    // }, [result]);

    {/*useEffect(() => {*/}
    //     const fetchData = async () => {
    //         try {
    //             console.log('called');
    //             const response = await axios.get('https://qr-code-generator-nestjs-production.up.railway.app/qr-code');
    {/*            setResults(`https://qr-code-generator-nestjs-production.up.railway.app/movies/${response.data}`);*/}
    {/*        } catch (error) {*/}
    {/*            console.log(error);*/}
    {/*        }*/}
    {/*    };*/}

    {/*    // Call the API initially*/}
    //     fetchData();
    //
    {/*    // Set up an interval to call the API every 10 seconds*/}
    {/*    const intervalId = setInterval(() => {*/}
    {/*        fetchData();*/}
    {/*        setReloadTimer(10); // Reset the timer to 10 seconds after each fetch*/}
    {/*    }, 10000);*/}

    //     // Update the timer every second
    //     const timerId = setInterval(() => {
    //         setReloadTimer(prevTimer => prevTimer - 1);
    //     }, 1000);
    //
    //     // Clean up the intervals when the component unmounts
    //     return () => {
    //         clearInterval(intervalId);
    //         clearInterval(timerId);
    //     };
    // }, []);

    return (
        <div>
            <img src={data} alt="qr-code" />
            <p>Reload in 10 seconds</p>
        </div>
    );
}
