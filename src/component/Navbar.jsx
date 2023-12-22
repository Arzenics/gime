import React from "react";
import logo from '../assets/img/logo.png';
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to='/about'>
              About
            </NavLink>
            <NavLink className="nav-link" to='/news'>
              News
            </NavLink>
            <NavLink to='/login' className="btn">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
