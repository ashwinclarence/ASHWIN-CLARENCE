import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar-container container-fluid' id='home'>
            <div className="navbar-row row">
                <div className="nav-left">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-solid fa-phone"></i>
                </div>
                <div className="nav-right">
                    <div className="logobox">
                        <a href="/">ASHWIN CLARENCE</a>
                    </div>
                    <div className="navlinks">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#qualification">Qualification</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <i className="fa-solid fa-toggle-on"></i>
                    {/* <i class="fa-solid fa-toggle-off"></i> */}
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Navbar
