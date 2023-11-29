import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/Register.css';  // Assuming you have created this CSS file

const Register = () => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://kadjkvt9nl.execute-api.us-west-2.amazonaws.com/prod/create-user', {
                body: { userId, username, password, email, contact }
            });
            console.log(response.data);
            // Handle registration success
        } catch (error) {
            console.error(error);
            // Handle registration error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" />
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact" />
            <button type="submit">Register</button>
            <p>Already have an account? <Link to="/">Login Here</Link></p>
        </form>
    );
};

export default Register;
