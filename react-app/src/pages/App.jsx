import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import './styles/App.css';

export default function App() {
  return (
    <div className="App">
        <NavBar />
        <h1>Hello React!</h1>
        <div className="content-box">
            <span></span>
        </div>
        <Footer />
    </div>
  );
}
