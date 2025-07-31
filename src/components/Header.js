import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Pashupatinath Devastana</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="/#services">Services</a></li>
          <li className="nav-item"><Link className="nav-link" to="/gallery">Images</Link></li>
          <li className="nav-item"><a className="nav-link" href="/#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
