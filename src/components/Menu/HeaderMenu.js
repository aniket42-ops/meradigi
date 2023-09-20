import { Link } from "react-router-dom";
import "./Header.css";
import Home from "./Assets/Home";
import "rsuite/dist/rsuite.min.css";
import logo from '../Menu/logo.png';

function HeaderMenu(props) {
  return (
    <>
      <nav className="header">
        <ul className="head-links">
          <Link className="img">
            <li>
              <img src={logo} alt="#" height="50px"/>
            </li>
          </Link>
          <Link>
            <a href="/" className="home">
              <li>HOME</li>
            </a>
          </Link>
          <Link to="/" className="services">
           
              
          </Link>
        </ul>
        <ul className="head-links">
          <Link to="/Pricing" className="pricing">
            <li>PRICING</li>
          </Link>
        </ul>
        <ul className="head-links">
          <Link to="/About" className="About">
            <li>ABOUT US</li>
          </Link>
        </ul>

        <ul className="head-links">
          <Link to="/Login" className="login">
            <li>LOGIN</li>
          </Link>
        </ul>
      </nav>
     
      <Home/>
    </>
  );
}

export default HeaderMenu;
