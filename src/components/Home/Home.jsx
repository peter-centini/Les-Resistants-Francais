import React from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <h1 className="Title">
            Nos résistants
            </h1>
            < Slider />
            <div className="text">
                <h1 className="titletext">Chers résistants</h1>
                <div className="par">
                <p className="par1">Je dis l’intérêt supérieur de la patrie, car cette guerre n'est pas une guerre franco allemande qu'une bataille puisse décider. Cette guerre est une guerre mondiale. Si les forces de la liberté triomphent finalement de celles de la servitude, quel serait le destin d'une France qui se serait soumise à l'ennemi ?</p>
                <p className="par2">L'honneur, le bon sens, l'intérêt supérieur de la patrie commandent à tous les Français libres de continuer le combat, là où ils seront et comme ils pourront. Il est par conséquent nécessaire, de grouper partout où cela se peut, une force française aussi grande que possible. Tout ce qui peut être réuni, en fait d'éléments militaires français et de capacité française de production d'armements doit être organisé partout où il y en a. </p>
                <p className="par3">Moi, général de Gaulle, j'entreprends ici, en Angleterre, cette tâche nationale. J'invite tous les militaires français des armées de terre, de mer et de l'air. J'invite les chefs, les soldats, les marins, les aviateurs des forces françaises de terre, de mer, de l'air, où qu'ils se trouvent actuellement, à se mettre en rapport avec moi. J'invite tous les Français qui veulent rester libres à m'écouter et à me suivre. Vive la France, libre, dans l'honneur et dans l'indépendance.</p>
                </div>
            </div>
            <div className="link-to">
            <Link to={{ pathname: `/1`}}>
               <div className="bloc1">Les Ennemis</div>
            </Link>
            <Link to={{ pathname: `/contact`}}>  
               <div className="bloc2">Messages</div>
            </Link>
            <Link to={{ pathname: `/detail/:id`}}>
               <div className="bloc3">Liens</div>
            </Link>
            </div>
        </div>
    )
}

export default Home;
