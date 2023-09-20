import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import logo from '../../logo.png';  
import Dropdown from "../../../Dropdown";
import { navItems } from "../../../NavItems";
import './Layout.css';

const Layout = () => {const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav>
        <ul>
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" height="50px"/>
        </Link>
          <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
              
            );
          })}
        </ul>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;