import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className='HeroDetails'>
            <div className='detail-card'>
            <img className='image-detail' src={detail.image} alt={detail.description} />
                <div className='detail-card-content'>
                    <h2>{detail.name}</h2>
                    <p>Description : {detail.description}</p>
                </div>
            </div>
            <Link className='link-detail' to={{pathname:'/'}}>Retour à la page principale</Link>
        </div>
    )
}

export default HomeDetails
