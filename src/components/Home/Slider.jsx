import React, {useState, useEffect} from 'react';
import axios from "axios" ;
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

function Slider() {
    const [resistance, setResistance] = useState([]);
    useEffect(() => {
        axios
        .get("https://a.nacapi.com/Resistant")
        .then((res) => res.data)
        .then((data) => setResistance(data))
    }, [])

    return (        
        <Carousel autoPlay interval={6000} infiniteLoop thumbWidth={120} showIndicator>
            {resistance.map((resist) => (
                <div key={resist.id}>
                    < resistance resist={resist} />
                    <img src={resist.image} alt="" />
                    <div className="overlay">
                        <h2 className="overlay_name">{resist.name}</h2>
                        <p className="overlay_quote">{resist.quote}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default Slider;
