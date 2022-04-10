import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className='container'>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Welcome to CRYPTO CAFE</h1>
                        <button className='home-btn btn' type='button'>Explore Coins</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;