import React from 'react'
import "./Refused.css"
import { Link } from 'react-router-dom'

function refuse() {
    return (
       <div className="Refuse">
          <h1 className="titre"> Accès refusé car tu as rentré le mauvais mot de passe</h1>
          <p className="non">ENTREE INTERDITE AUX COLLABOS !!</p>
            <Link className="backhome" to={{pathname: '/'}}>Retour vers page accueil !!!</Link>     
       </div>
    )
}

export default refuse;
