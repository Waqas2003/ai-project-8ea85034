import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users/register', { name, email, password, confirmPassword });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
        <br />
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} />
        <br />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;