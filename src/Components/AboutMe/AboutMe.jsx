import React from 'react';
import { useNavigate } from 'react-router-dom';


const AboutMe = () => {
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







    <div className="container mt-5">
      <h2>About Me</h2>

     
      <div className="card-body d-flex">
  <div className="mr-3">
    <img
      src={process.env.PUBLIC_URL + '/what.jpg'}
      className="card-img-top"
      style={{ width: '450px', height: '500px' }}
      alt="Artist Profile"
    />
  </div>
  <div className="ml-3">
    <h4 className="card-title">Artist Profile</h4>
    <p className="card-text">
      <strong className="text-lg">Artist Name:</strong> Carlbert S. Candog
    </p>
    <p className="card-text">
      <strong className="text-lg">About Me:</strong> Hey there! I'm Carlbert S. Candog, a 24-year-old resident of Tangcasan Sur, Loay, Bohol. Currently, I call Panglao, Bohol my educational hub, having studied at Cristal E College.

      Professionally, I'm passionate about making Photoshop, where I ohaha. It's exciting to be part of digital imaging.

      In my downtime, I immerse myself in the beauty of Bohol, whether it's exploring the pristine beaches, enjoying local cuisine, or simply embracing the vibrant culture. I'm also an avid basketball, spearfishing, finding joy in editing, coding, and more.

      I believe in the power of continuous learning, and I'm dedicated to study. One of my favorite mottos is "Embrace the journey, find joy in the details, and let the beauty of Bohol inspire each step forward.".

      Feel free to join me on this journey as I navigate through life in Bohol and beyond. Let's connect and share our experiences, or hit me up if you're interested in art or edit pictures. Looking forward to the adventures ahead!
    </p>
  </div>
</div>
</div>
<div className="text-center">
  <h3 style={{ fontSize: '12px' }}>All Rights Reserved &copy; Carlbert's Editing 2024</h3>
</div>
</div>
  );
};

export default AboutMe;
