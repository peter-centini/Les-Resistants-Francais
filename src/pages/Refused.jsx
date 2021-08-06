import React from 'react'
import "./Refused.css"
import { Link } from 'react-router-dom'

function refuse() {
    return (
 
        <div>
         <h1 className="titre"> Accé refuser car tu as rentrer le mauvais mot de passe</h1>
          <p className="non">ENTREE INTERDITE AUX COLLABOS !!</p>
            <Link className="backhome" to={{pathname: '/'}}>retour vers Page Acceuil !!!</Link>     
       </div>
    )
}

export default refuse
