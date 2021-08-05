import React, {useState, useEffect} from 'react'
import axios from 'axios';
import NaziList from './NaziList';
import './Game.css'
// import { Link } from 'react-router-dom';

function Game(props) {
    const [resistantName, setResistantName] = useState();
    const [resistantImg, setResistantImg] = useState();
    const resistantId = props.match.params.id

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/resistants/${resistantId}`)
        .then((res) =>  {
            setResistantName(res.data.name)
            setResistantImg(res.data.image)
        })
    }, [resistantId])

    return (
        <div className="BattleGame">
            <h1>Extermine les nazis</h1>
            <div className="Battle">
                <div className="Resistant">
                <img  classname="ResistantImg" src={resistantImg} alt={resistantName} />
                <span className="ResistantsName">{resistantName}</span>
                <button className="ResistantBtn">Choisir</button>
                </div>
                <div className="RandomNazi">
                    <NaziList />
                </div>
            </div>
        </div>
    )}


export default Game
