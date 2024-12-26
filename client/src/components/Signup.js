

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const passwordPattern = /^.{5,}$/;
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password
        if (!passwordPattern.test(password)) {
            setErrorMessage('Password must be at least 5 characters.');
            return;
        }

        setErrorMessage('');

        try {
            // Send signup data to the backend
            const response = await axios.post('http://localhost:8000/api/signup', {username: username, password: password}, {
               
                headers: {
                    'Content-Type': 'application/json',
                },
               
            });

            if (response.status === 201) {
                alert('Sign Up Successful!');
                navigate('/login'); // Redirect to login page
            } else {
                const data = await response.data;
                setErrorMessage(data.error || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);setErrorMessage('An error occurred. Please try again.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{
                minHeight: '100vh',
                backgroundImage: "url('/desktop-wallpaper-login-page-login.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px' }}>
                {/* Username Field */}
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
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4 position-relative">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="position-absolute top-50 translate-middle-y"
                        style={{ right: '10px', cursor: 'pointer', marginTop: '13px' }}
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                    </span>
                </div>

                {/* Error Message */}
                {errorMessage && <p className="text-danger">{errorMessage}</p>}

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
