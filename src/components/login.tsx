import axios from "axios";
import { useState } from "react";
async function LoginLogic(username: string, password: string) {
    const token = localStorage.getItem("token")
    const response = axios.post('https://dogs.kobernyk.com/login',{
    username,
    password,
    token,
  })
  
}

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(e: React.FormEvent<HTMLFormElement>) {
        if (e.target.id == "username"){
            setUsername(e.target.value)
        }
        if (e.target.id == "password"){
            setPassword(e.target.value)
        }
    }
    return (
        <form>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" onChange={handleChange}></input>

            <label htmlFor="password">Password: </label>
            <input type="password" id="password" onChange={handleChange}></input>

            <button type="button" onClick={() => LoginLogic(username, password)}>Submit</button>
        </form>
    )
}

export default Login;