import React, {useState, useEffect} from 'react'
import './NaziList.css'
import './Game.css'

function NaziList() {
    const nazis =
    [
        {
           id: 0,
           name: "Adolf Hitler",
           image: "https://zupimages.net/up/21/31/no3i.png",
           life: 105,
           attack: 40,
           defense: 85,
           dynamites: 4
        },
        {
            id: 1,
            name: "Heinrich Himmler",
            image: "https://zupimages.net/up/21/31/564g.png",
            life: 100,
            attack: 70,
            defense: 60,
            dynamites: 1
         },
         {
            id: 2,
            name: "Fedor von Bock",
            image: "https://zupimages.net/up/21/31/564g.png",
            life: 100,
            attack: 60,
            defense: 55,
            dynamites: 2
         }
    ]
    const [randomNazi, setRandomNazi] = useState(0);
    const generateRandomNazi = (e) => {
        const naziL = nazis.length
        setRandomNazi(Math.floor(Math.random() * naziL))};
    const [enemyLife, setEnemyLife] = useState(nazis[randomNazi].life)
    const [winMessage, setWinMessage] = useState("");
    
    const attack1 = () => {
        setEnemyLife(enemyLife-5)
    if (enemyLife <= 0 ) {
        setWinMessage ("Nazi exterminé!")
    }
    };
    
    return (
        <div className="Container">
        <div className="NaziCard">
            <div className="NaziStats">
            <span>{nazis[randomNazi].name}</span>
            <span>Life : {enemyLife}</span>
            <span>{winMessage}</span>
            </div>
            <img className="NaziImg" src={nazis[randomNazi].image} />
            
        </div>
        <button className="NaziBtn" onClick={generateRandomNazi}>Choisir</button>
        <button  onClick = {attack1}>Attack</button>
        </div>
    )
}

export default NaziList
