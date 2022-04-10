import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CardDetails.css'

const CardDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(data => {
                setCoin(data)
                console.log(data)
            })

    }, [id])
    return (
        <div className="coinDetails">
            <div className='container pb-5'>
                <div className="row">
                    <h3 className='text-primary text-center mt-5 mb-5 fs-1'>COIN DETAILS</h3>
                    <div className="col-md-6 mx-auto text-center">
                        <div className="card">
                            <div className="card-body">
                                <img src={coin?.image?.large} alt="" />
                                <h4>ID: {coin.id}</h4>
                                <h5>RANK: {coin.market_cap_rank}</h5>
                                <h6>asset_platform_id: {coin.asset_platform_id}</h6>
                                <p>categories: {coin.categories}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4>coingecko_rank: {coin.coingecko_rank}</h4>
                                <h4>coingecko_score: {coin.coingecko_score}</h4>
                                <h4>community_score: {coin.community_score}</h4>
                                <h4>liquidity_score: {coin.liquidity_score}</h4>
                                <h4>market_cap_rank: {coin.market_cap_rank}</h4>
                                <p>sentiment_votes_down_percentage: {coin.sentiment_votes_down_percentage}</p>
                                <p>sentiment_votes_up_percentage: {coin.sentiment_votes_up_percentage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;