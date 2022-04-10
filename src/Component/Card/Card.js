import React from 'react';
import { Link } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails';

const Card = ({ coins }) => {
    console.log(coins)
    return (
        <div className="col-lg-4 mb-3">
            <div className="card text-center">
                <img className='w-50 m-auto' src={coins.image} alt="" />
                <div className="card-body">
                    <h6>Name:{coins.name}</h6>
                    <p>Id:{coins.id}</p>
                    <p>current_price:{coins.current_price}</p>
                    <Link to={`/card-details/${coins.id}`}>
                        <button className='btn btn-primary'>Details coins</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Card;