import React, {useState} from "react"
import PasswordChecklist from "react-password-checklist"
import {useHistory} from 'react-router-dom'
import music from "./annonce.ogg"
import"./Access.css"

function Access() {
        const mypassword="debarquement"
	    const [password, setPassword] = useState("")
	    // const [passwordAgain, setPasswordAgain] = useState("Peter1el")
        let history = useHistory();
        const validation = () => { 
            if(password === mypassword){
                history.push("/Home");
            }else{
                history.push("/refused");
            }
        }

	return (
        <div className= "secretpage">
        <div className= "bande-son"> <audio src={music}
         controls></audio>
        </div>
         <p className= "indice">Le mot de passe correspond au résumé de la bande sonore en un seul mot !</p>

            <form onSubmit={validation}>
                
                <div className="mdp">
                <label className="password">Mot de passe:</label>
                <input className="pass" type="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                {/* <label>Password Again:</label> */}
                {/* <input type="password" onChange={e => setPasswordAgain(e.target.value)}/> */}
                <PasswordChecklist className="checklist"
                    rules={["minLength","match"]}
                    minLength={12}
                    value={password}
                    valueAgain={mypassword}
                    messages={{
                        minLength: "Le nombre de lettres est bon !",
                        match: "Le mot de passe est conforme !",
                        // number: "",
                        // capital: "",
                    }}
                    />
                    <div className= "submit">
                    <input className="sub" type="submit"/>

                    </div>
                    </form>
                    </div>
             
	);
    
}
export default Access
