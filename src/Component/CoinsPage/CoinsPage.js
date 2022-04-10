import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './CoinsPage.css'


const CoinsPage = () => {
    const [coin, setCoin] = useState([])
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [])
    return (
        <div className='container pt-5'>
            <div className="row">
                {
                    coin.map(coins => <Card key={coins.id} coins={coins}></Card>)
                }
            </div>
        </div>
    );
}

export default CoinsPage;