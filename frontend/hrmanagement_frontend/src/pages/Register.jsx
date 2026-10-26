function Register()
{
    return (<div>
        <h1> Register </h1>
        <form>
            <input type="text" placeholder="Enter Name"></input><br/>
            <input type="email" placeholder="Enter Email"></input><br/>
            <input type="password" placeholder="Enter Password"></input><br/>
            <select>
                <option value="">Choose Role</option>
                <option value="HR">HR</option>
                <option value="EMPLOYEE">EMPLOYEE</option>
            </select><br/>
            <button type="submit">Register</button>
        </form>
    </div>)

}
export default Register