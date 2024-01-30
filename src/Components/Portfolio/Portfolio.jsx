import React from 'react';
import './Portfolio.css'
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
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
    <div>
      <h3>My Editing</h3>
      <div className="row mt-4">
        {/* Example artwork cards */}
        <div className="col-md-4 mb-20">
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/1.jpg'}
              className="card-img-top"
              alt="Artwork 1"
            />

            <div className="card-body">
              <h5 className="card-title">Science Book</h5>
              <p className="card-text">Digital Imaging activity.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-20">
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/2.jpg'}
              className="card-img-top"
              alt="Artwork 2"
            />
            <div className="card-body">
              <h5 className="card-title">Book Cover: the Forest</h5>
              <p className="card-text">Digital Imaging Semi Final.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/card.jpg'}
              className="card-img-top"
              alt="Artwork 2"
            />
            <div className="card-body">
              <h5 className="card-title">Business Card: Under armour</h5>
              <p className="card-text">Digital Imaging Activity.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/invite.jpg'}
              className="card-img-top"
              alt="Artwork 2"
            />
            <div className="card-body">
              <h5 className="card-title">invitation card: blue water hotel</h5>
              <p className="card-text">Digital Imaging Semi Final.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/clippingmask.jpg'}
              className="card-img-top"
              alt="Artwork 2"
            />
            <div className="card-body">
              <h5 className="card-title">Clipping Mask: the falls</h5>
              <p className="card-text">Digital Imaging Activity.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/3.jpg'}
              className="card-img-top"
              alt="Artwork 2"
            />
            <div className="card-body">
              <h5 className="card-title">Packaging and labelling</h5>
              <p className="card-text">Digital Imaging Final Activity.</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
    <div className="text-center">
  <h3 style={{ fontSize: '12px' }}>All Rights Reserved &copy; Carlbert's Editing 2024</h3>
</div>
    </div>
  );
};

export default Portfolio;
