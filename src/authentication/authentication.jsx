import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './authentication.css'
import { useAuth } from '../component/AppRouter/Auth';
function Authentication() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const myStyle = {
    border: 'none',
    backgroundColor: 'white',
    height: '40px',
    width: '200px',
    textAlign: 'center',
    borderRadius: '10px',
    marginLeft: '10px',
    color: 'black',
  };
  const handleSignIn = () => {
    setError('');
   
    if (username === '' || password === '') {
      setError('Please enter both username and password.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      login({ username }); 
      navigate('/home');
    } else {
      setError('Incorrect username or password.');
    }
  };
  const handleSignUp = () => {
    setError('');
    if (username === '' || password === '') {
      setError('Please enter both username and password.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      setError('Username already exists. Please choose a different username.');
    } else {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      login({ username }); 
      navigate('/home');
    }
  };
  return (
  
    <div className="prime ">
    <div  style={{ display: 'flex', justifyContent:"center" }}>
      <div  className="authentication-content">
        <h1 style={{ marginTop: '250px' }}>Welcome!</h1>
        <div style={{ marginTop: '50px' }}>
          <label htmlFor="name" style={{ fontSize: '1.5rem' }}>
            Username:{' '}
          </label>
          <input
            id="name"
            type="text"
            placeholder="Username"
            style={myStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="password" style={{ fontSize: '1.5rem' }}>
            Password:{' '}
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            style={myStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <button
            style={{
              backgroundColor: '#1a98ff',
              border: 'none',
              borderRadius: '10px',
              height: '40px',
              width: '100px',
              marginRight: '10px',
            }}
            onClick={handleSignIn}
          >
            Sign in
          </button>
          <button
            style={{
              backgroundColor: '#1a98ff',
              border: 'none',
              borderRadius: '10px',
              height: '40px',
              width: '100px',
            }}
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </div>
        {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
       
      </div>
    </div>
    </div>
   
  );
}
export default Authentication;


