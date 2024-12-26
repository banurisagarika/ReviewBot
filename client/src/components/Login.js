// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons
// import { useNavigate } from 'react-router-dom'; // Importing useNavigate

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // State for password visibility

//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (username && password) {
//       alert('Login Successful!');
//       // Optionally, redirect to another page after successful login
//       // navigate('/dashboard');
//     } else {
//       setErrorMessage('Please enter both username and password.');
//     }
//   };

//   return (
//     <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px' }}>
//         {/* Username */}
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">Username</label>
//           <input
//             type="text"
//             className="form-control"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
        
//         {/* Password */}
//         <div className="mb-3 position-relative">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type={showPassword ? "text" : "password"} // Conditionally set type
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <span
//             className="position-absolute top-50 translate-middle-y"
//             style={{ right: '10px', cursor: 'pointer', marginTop: '13px' }}
//             onClick={togglePasswordVisibility}
//           >
//             {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
//           </span>
//         </div>

//         {/* Error Message */}
//         {errorMessage && <p className="text-danger">{errorMessage}</p>}

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing the FaEye and FaEyeSlash icons


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // For password visibility
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (username && password) {
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        alert(data.message);
        localStorage.setItem('isLoggedIn', 'true'); // Save login status
        navigate('/Linkinput'); // Redirect to Linkinput page
      } else {
        // Handle invalid login (redirect to signup page)
        if (data.error === 'Invalid username or password') {
          alert('Invalid credentials. Redirecting to Signup page.');
          navigate('/signup'); // Redirect to Signup page
        } else {
          setErrorMessage(data.error); // Display other errors
        }
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    }
  } else {
    setErrorMessage('Please enter both username and password.');
  }
};


  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px' }}>
        {/* Username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        {/* Password */}
        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type={showPassword ? "text" : "password"} // Conditionally set type
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
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
        </p>

    </div>
  );
};

export default Login;
