import React, {useState} from "react"
import PasswordChecklist from "react-password-checklist"
import {useHistory} from 'react-router-dom'



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
            <form onSubmit={validation}>
                <label>Password:</label>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                {/* <label>Password Again:</label> */}
                {/* <input type="password" onChange={e => setPasswordAgain(e.target.value)}/> */}
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
                    <input type="submit" className="connection"/>
                    
            </form>
	);
    
}
export default Access
