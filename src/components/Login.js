// Login.js
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        
      const response = await fetch('https://zd2dk10m3d.execute-api.us-east-1.amazonaws.com/prod/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: { username, password } }),
      });
  
      if (!response.ok) {
        console.error('Server response:', response.status, response.statusText);
        const text = await response.text(); // Get response text (which might not be JSON)
        console.error('Server response body:', text);
        return; // Exit early if the response is not ok
      }
  
      const data = await response.json();
      console.log(data);
      // Handle login success or failure here
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
