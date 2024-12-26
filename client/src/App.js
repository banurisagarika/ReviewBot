// import logo from './logo.svg';
// import Navbar from './components/Navbar.js';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import { Link, NavLink, useNavigate } from "react-router-dom";

// import './Styles.css'

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* Add other routes here */}
//       </Routes>
//     </Router>
//   );

// }

// export default App;



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
// import Chatbot from './components/ChatBot';
import Signup from './components/Signup';
import Home from './components/Home';
import LinkInput from './components/LinkInput';
import { AuthProvider } from './context/AuthContext';
import ProductDetail from './components/ProductDetail';
import "./components/ProductDetail.css";





function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/LinkInput" element={<LinkInput/>}/>
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/ProductDetail" element={<ProductDetail />} />
      {/* <Route path="/Chatbot" element={<Chatbot />} /> */}
      </Routes>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
