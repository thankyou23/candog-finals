import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
   
    if (username === 'carlbert12' && password === 'candog12') {
      
      navigate('/dashboard');

      
      alert('Login successful! Redirecting to the dashboard.');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleKeyPress = (e) => {

    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="container mt-15 text-center">
      <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
            <div className="modal-header">
              <h2>Login</h2>
            </div>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
