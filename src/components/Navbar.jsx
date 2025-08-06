import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><Link to="/">EUNOIA</Link></div>
            <div className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to="/login" className="btn-login">Login</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
