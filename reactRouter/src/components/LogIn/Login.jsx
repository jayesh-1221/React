import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '5rem auto',
    padding: '2.5rem',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Segoe UI, sans-serif'
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#555'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1.5rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem'
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    fontSize: '1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  const [hover, setHover] = useState(false);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Username</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={inputStyle}
          placeholder="Enter username"
          required
        />

        <label style={labelStyle}>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={inputStyle}
          placeholder="Enter password"
          required
        />

        <button
          type="submit"
          style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
