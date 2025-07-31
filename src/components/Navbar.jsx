import '../styles/Navbar.css'
function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>EUNOIA</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#courses">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="" className="tbl-biru">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
