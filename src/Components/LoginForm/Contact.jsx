import React from 'react';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
      navigate('/');
    };
  return (
    <div className="container mt-5">
      <h5 className="modal-title" style={{ marginLeft: '490px' , }}>
                Welcome to Carlbert's Photoshop
              </h5>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/Dashboard">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AboutMe">
                  About Me
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/Contact">
                  Contact
                  <span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
          <button
          type="button"
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button>
        </div>
      </nav>
    <div className="container mt-5 text-center">
      <h2 style={{ fontSize: '20px' }}>Contact Me</h2>
      <p>
        You can reach out to us through the following channels:
      </p>
      <ul>
        <h1 style={{ fontSize: '25px' }}>Email: carlbert12342@gmail.com</h1>
        <h1 style={{ fontSize: '25px' }}>Phone: +63 9483130795</h1>
        <h1 style={{ fontSize: '25px' }}>Social Media: @carl_cec_photoshop</h1>
      </ul>
    </div>
    <div className="text-center">
  <h3 style={{ fontSize: '12px' }}>All Rights Reserved &copy; Carlbert's Editing 2024</h3>
</div>
    </div>
  );
};

export default Contact;
