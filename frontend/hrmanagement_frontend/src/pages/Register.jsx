import { useState } from 'react'

function Register() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [role, setRole] = useState("");
    let [message, setMessage] = useState("");

    let handleRegister = async (event) => {
        event.preventDefault();

        try {
            let response = await fetch("http://localhost:3000/api/emp/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password, role })
            });
            let data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed.");
            }

            setMessage("Registration successful.");
        } catch (error) {
            setMessage(error.message || "Unable to register. Please try again.");
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    placeholder="Enter name"
                    required
                />
                <br />
                <input
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    placeholder="Enter emailid"
                    required
                />
                <br />
                <input
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    placeholder="Enter password"
                    required
                />
                <br />
                <select
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                    required
                >
                    <option value="">Choose role</option>
                    <option value="HR">HR</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                </select>
                <br />
                <button type="submit">Register</button>
            </form>
            {message && <p role="status">{message}</p>}
        </div>
    )
}

export default Register