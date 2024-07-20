import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BitcoinPrice = () => {
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
            .then(response => {
                let bitcoin_price = response.data["bitcoin"]["usd"];
                setBitcoinPrice(bitcoin_price);
                console.log("Got Bitcoin Price: " + bitcoin_price.toString() + " USD");
            })
            .catch(error => {
                console.log(error);
            });
        // Set a timeout to ensure a minimum loading time of 1 second
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Cleanup the timer
        return () => clearTimeout(timer);
    }, []);

    if (loading || !bitcoinPrice) {
        return <div />
    }

    return (
        <div className='flex flex-col items-center justify-center  w-3/4'>
            <h1 className="pt-10 flex items-center text-5xl font-bold bg-gradient-to-r from-emerald-500 to-red-500 text-transparent bg-clip-text">
                BTC Price: {bitcoinPrice}$
            </h1>
        </div>
    );
};

export default BitcoinPrice;
