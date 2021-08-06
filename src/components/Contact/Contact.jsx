import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div>
            <div className="Contact">
            <div className="contact-form">Demande d'adhésion à la Résistance brave soldat!</div>
            <div class="container"> 

                <label for="name">Prénom</label>
                <input type="text" id="name" name="name" placeholder="Prénom"></input>
                <label for="name">Nom de Famille</label>
                <input type="text" id="lastname" name="lastname" placeholder="Nom de Famille"></input>

                <label for="email">Adresse postale</label>
                <input type="text" id="email" name="email" placeholder="Exemple : 121 avenue du maréchal"></input>

                <label for="Request">Demande d'adhérent à la Résistance</label>
                <textarea id="request" name="request" placeholder="Les carottes sont cuites!"></textarea>

                <input className= "submit" type="submit" value="Envoyer" onClick={()=> alert("Votre demande d'adhésion a été envoyé !")}></input>

             </div>
        </div> 
        <Link className='link-contact' to={{pathname:'/Home'}}>Retour à la page accueil</Link>
        </div>
    )
}

export default Contact;
