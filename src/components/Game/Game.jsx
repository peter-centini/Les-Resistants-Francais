import React, {useState, useEffect} from 'react'
import axios from 'axios';
import NaziList from './NaziList';
import './Game.css'
import { Link } from 'react-router-dom';

function Game(props) {
    const [resistantName, setResistantName] = useState();
    const [resistantImg, setResistantImg] = useState();
    const [resistantLife, setResistantLife] = useState();
    const resistantId = props.match.params.id
    

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/resistants/${resistantId}`)
        .then((res) =>  {
            setResistantName(res.data.name)
            setResistantImg(res.data.image)
            setResistantLife(res.data.life)
        })
    }, [resistantId])

    return (
        <div className="BattleGame">
            <h1>Extermine les nazis</h1>
            <div className="Battle">
                <div className="Resistant">
                <img  classname="ResistantImg" src={resistantImg} alt={resistantName} />
                </div>
                <div className="Stats">
                <span className="ResistantName">{resistantName}</span>
                <span className="ResistantLife">Life : {resistantLife}</span>
                <div className ="Buttons">
                <Link to={{pathname: '/0'}}style={{ textDecoration: 'none' }}><button className="ResistantBtn1">Perso 1</button></Link>
                <Link to={{pathname: '/1'}}style={{ textDecoration: 'none' }}><button className="ResistantBtn2">Perso 2</button></Link>
                <Link to={{pathname: '/2'}}style={{ textDecoration: 'none' }}><button className="ResistantBtn3">Perso 3</button></Link>
                </div>
                </div>
                <div className="Fight">
            
                </div>
                <div className="RandomNazi">
                    <NaziList />
                </div>
            </div>
            <Link className='game-detail' to={{pathname:'/Home'}}>Retour à la page accueil</Link>
        </div>
    )}


export default Game
