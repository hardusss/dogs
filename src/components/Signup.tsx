import axios from "axios";
import { useState } from "react";
function SignUpLogic(username: string, password: string, firstName: string, lastName: string){
    console.log(username, password, firstName, lastName)
    const response = axios.post("https://dogs.kobernyk.com/signup", {
        username,
        password,
        firstName,
        lastName
    })
    .then(data => {
        localStorage.setItem("token", data.data.token)
    })
}

function SingUp(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleChange(e: React.FormEvent<HTMLFormElement>) {
        if (e.target.id == "username"){
            setUsername(e.target.value)
        }
        if (e.target.id == "password"){
            setPassword(e.target.value)
        }
        if (e.target.id == "first_name"){
            setFirstName(e.target.value)
        }
        if (e.target.id == "last_name"){
            setLastName(e.target.value)
        }
    }

    return (
        <form>
            <label htmlFor="username">
                Username: 
            </label>
            <input id="username" type="text" onChange={handleChange}></input>
            <br/>

            <label htmlFor="password">
                Password: 
            </label>
            <input  id="password" type="password" onChange={handleChange}></input>
            <br/>

            <label htmlFor="first_name">
                First Name: 
            </label>
            <input id="first_name" type="text" onChange={handleChange}></input>
            <br/>

            <label htmlFor="last_name">
                Last Name: 
            </label>
            <input id="last_name" type="text" onChange={handleChange}></input>
            <br/>
            <button type="button" onClick={() => SignUpLogic(username, password, firstName, lastName)}>Sign Up</button>
        </form>
    )
}

export default SingUp;