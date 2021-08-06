import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDetails.css';

function HomeDetails(props) {
    const [detail, setDetail] = useState([]);
    const resistId = props.match.params.id;

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/resistant/${resistId}`)
        .then((res) => res.data)
        .then((data) => setDetail(data))
    }, [resistId])

    return (
        <div className='ResistDetails'>
            <div className='detail-card'>
            <img className='image-detail' src={detail.image} alt={detail.description} />
                <div className='detail-content'>
                    <h2 className='h2-css'>{detail.name}</h2>
                    <p className='p-css'>Description : {detail.description}</p>
                </div>
            </div>
            <Link className='link-detail' to={{pathname:'/Home'}}>Retour à la page accueil</Link>
        </div>
    )
}

export default HomeDetails;
