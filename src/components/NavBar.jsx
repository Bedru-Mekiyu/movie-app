import {Link } from "react-router-dom";
import '../css/Navbar.css'
function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
            <Link to='/'>movieApp</Link>
         
            </div>
            <div className="navbar-links">
                <Link to='/'>home</Link>
                <Link to='/favorites'>favorites</Link>
            </div>
        </nav>
    );
}
export default NavBar;