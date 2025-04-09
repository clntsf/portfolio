import './styles/NavBar.css';
import linkedIn from "../images/linkedin.svg"

export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-links">
                <a className="nav-link" href="student-dashboard">Home</a>
                <a className="nav-link" href="student-applications">Projects</a>
                <a className="nav-link" href="student-listings">Work Experience</a>
                <a className="nav-link" href="student-edit-profile">Contact</a>
            </div>
            <div className="nav-socials">
                <button className="navbar-logo-button"><img src={linkedIn} className="navbar-logo" alt="linkedin" /></button>
            </div>
        </div>
    );
};