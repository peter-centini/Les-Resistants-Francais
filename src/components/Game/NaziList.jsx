import React, {useState, useEffect} from 'react'
import './NaziList.css'

function NaziList() {
    const nazis =
    [
        {
           id: 0,
           name: "Adolf Hitler",
           image: "https://zupimages.net/up/21/31/no3i.png",
           force: 40,
           défense: 85,
           dynamites: 4
        },
        {
            id: 1,
            name: "Heinrich Himmler",
            image: "https://zupimages.net/up/21/31/564g.png",
            force: 70,
            défense: 60,
            dynamites: 1
         },
         {
            id: 2,
            name: "Fedor von Bock",
            image: "https://zupimages.net/up/21/31/564g.png",
            force: 60,
            défense: 55,
            dynamites: 2
         }
    ]

    const [randomNazi, setRandomNazi] = useState(0);
    const generateRandomNazi = (e) => {
        const naziL = nazis.length
        setRandomNazi(Math.floor(Math.random() * naziL))};
    return (
        <div className="Container">
        <div className="NaziCard">
            {nazis[randomNazi].name}
            <img className="NaziImg" src={nazis[randomNazi].image} />
            
        </div>
        <button className="NaziBtn" onClick={generateRandomNazi}>Choisir</button>
        </div>
    )
}

export default NaziList
