import './styles/NavBar.css';
import linkedIn from "../images/linkedin.svg"
// import github from "../images/github.svg"

export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-links">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="projects-page">Projects</a>
                <a className="nav-link" href="experience-page">Work Experience</a>
                <a className="nav-link" href="contact-page">Contact</a>
            </div>
            <div className="nav-socials">
                <a className="navbar-logo-button" href="https://www.linkedin.com/in/colin-sf">
                    <img src={linkedIn} className="navbar-logo" alt="linkedin" />
                </a>
                {/* <button className="navbar-logo-button"><img src={github} className="navbar-logo" alt="github" /></button> */}
            </div>
        </div>
    );
};