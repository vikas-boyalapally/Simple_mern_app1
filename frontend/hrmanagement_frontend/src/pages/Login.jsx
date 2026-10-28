import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function Login() {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate()

    let handleLogin = async (event) => {
        event.preventDefault()
        if (email == "admin@gmail.com" && password == "admin") {
            // Perform login logic here
            navigate("/adminhome")
        } else {
            //check the user credentials from the database
            let req = await fetch("http://localhost:3000/api/emp/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                }
            );
            let res = await req.json();
            console.log(res);
        }
    }
        return (
            <div>
                <h1>Login Page</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter email"


                    /> <br />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter password"


                    /> <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }



export default Login