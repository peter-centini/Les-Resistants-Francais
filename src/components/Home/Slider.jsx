import React, {useState, useEffect} from 'react';
import axios from "axios" ;
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

function Slider() {
    const [resistance, setResistance] = useState([]);
    useEffect(() => {
        axios
        .get("https://a.nacapi.com/resistant")
        .then((res) => res.data)
        .then((data) => setResistance(data))
    }, [])

    return (   
        <Carousel 
        autoPlay 
        centerMode
        centerSlidePercentage={33}
        interval={5000}
        infiniteLoop thumbWidth={120} 
        showIndicator={false}
        showStatus={false}
         >
            {resistance.map((resist) => (
                <div key={resist.id}>
                    < resistance resist={resist} />
                    <div className="photo">
                    <img className="picture" src={resist.image} alt="" />
                    </div>
                    <div className="overlay">
                    <Link to={{ pathname: `/detail/:id`}}>
                        <h2 className="overlay_name">{resist.name}</h2>
                    </Link>
                        <p className="overlay_quote">{resist.quote}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    
    )
}

export default Slider;
