import React, {useState} from "react"
import PasswordChecklist from "react-password-checklist"
import {useHistory} from 'react-router-dom'
import music from "./annonce.ogg"
import"./Access.css"



function Access() {
        const mypassword="Peter"
	    const [password, setPassword] = useState("")
	    // const [passwordAgain, setPasswordAgain] = useState("Peter1el")
        let history = useHistory();
        const validation = () => { 
            if(password == mypassword){

                history.push("/");
            }else{
                history.push("/refused");
            }
        }

	return (

        <div className= "secretpage">
        <div className= "bande-son"> <audio src={music}
         controls></audio>
        </div>
            <form onSubmit={validation}>

                <div className="form">
                <label>Password:</label>
                </div>
                <div className= "mdp">
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                {/* <label>Password Again:</label> */}
                {/* <input type="password" onChange={e => setPasswordAgain(e.target.value)}/> */}
                </div>
                <div className= "checklist">
                <PasswordChecklist
                    rules={["minLength","specialChar","number","capital","match"]}
                    minLength={8}
                    value={password}
                    
                    // valueAgain={passwordAgain}
                    messages={{
                        minLength: "Mauvaise longeur ",
                        specialChar: "il manque un caractere.",
                        // number: "",
                        // capital: "",
                        
                    }}
                    
                    />
                    </div>    
                    <div className= "submit">
                    <input type="submit" className="connection"/>
                    </div>
                    </form>
                    </div>
                    
                   
	);
    
}
export default Access
