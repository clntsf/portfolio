import './styles/NavBar.css';
import linkedIn from "../images/icons8-linkedin.svg"
import github from "../images/icons8-github.svg"
import email from "../images/mail.svg"

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
                <a className="navbar-logo-button" href="mailto:colin.tsf@gmail.com">
                    <img src={email} className="navbar-logo" alt="email" title="Email Contact"/>
                </a>
                <a className="navbar-logo-button" href="https://www.linkedin.com/in/colin-sf">
                    <img src={linkedIn} className="navbar-logo" alt="linkedin" title="LinkedIn Profile"/>
                </a>
                <a className="navbar-logo-button" href="https://github.com/clntsf">
                    <img src={github} className="navbar-logo" alt="github" title="Github Profile"/>
                </a>
            </div>
        </div>
    );
};