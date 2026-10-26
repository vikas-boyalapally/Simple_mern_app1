import { Link } from "react-router-dom";
import './Header.css'
function Header() {
    return (
        <div className="header">
            <a href="/">Home</a>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to="/adminlogin">AdminLogin</Link>
            <Link to="/Register">Register</Link>

        </div>
    )
}
export default Header;