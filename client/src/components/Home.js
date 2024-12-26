// import React, { useState } from 'react';

// function ProductAnalysisForm() {
//   const [productLink, setProductLink] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Product Link:', productLink);
//   };

//   // Internal styles for a more subtle and calm design
//   const styles = {
//     pageContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       background: 'linear-gradient(135deg, #a8c0d9, #f0f4f8)', // Subtle gradient background
//       margin: 0,
//     },
//     formContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '40px',
//       borderRadius: '12px',
//       boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
//       backgroundColor: 'rgba(255, 255, 255, 0.95)', // Light and subtle transparency
//       width: '100%',
//       maxWidth: '450px',
//       textAlign: 'center',
//       backdropFilter: 'blur(5px)', // Slight blur effect for transparency
//     },
//     heading: {
//       fontSize: '26px',
//       fontWeight: '600',
//       marginBottom: '18px',
//       color: '#4f4f4f', 
//       letterSpacing: '1px',
//     },
//     formGroup: {
//       marginBottom: '18px',
//       width: '100%',
//     },
//     label: {
//       fontSize: '16px',
//       fontWeight: '500',
//       color: '#7a7a7a', 
//       display: 'block',
//       marginBottom: '8px',
//     },
//     input: {
//       padding: '12px 18px',
//       width: '100%',
//       border: '2px solid #c1c1c1', 
//       borderRadius: '8px',
//       fontSize: '16px',
//       outline: 'none',
//       color: '#4f4f4f', 
//     },
//     button: {
//       padding: '12px 18px',
//       backgroundColor: 'grey', 
//       color: '#fff',
//       border: 'none',
//       borderRadius: '8px',
//       fontSize: '16px',
//       cursor: 'pointer',
//       width: '100%',
      
//     },
    
//     buttonHover: {
//       backgroundColor: '#9db5c1', // Slightly darker shade on hover
//     },
//     buttonActive: {
//       backgroundColor: '#8e9bb1', // Darker shade when active
//     },
//     inputWrapper: {
//       marginBottom: '12px',
//       position: 'relative',
//     },
//     '@media (max-width: 480px)': {
//       formContainer: {
//         padding: '20px',
//       },
//       button: {
//         padding: '10px 16px',
//       },
//     },
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.formContainer}>
//         <h2 style={styles.heading}>Your Product Link Please</h2>
//         <form onSubmit={handleSubmit}>
//           <div style={styles.formGroup}>
//             <div style={styles.inputWrapper}>
//               <label htmlFor="productLink" style={styles.label}>
//                 Product Link:
//               </label>
//               <input
//                 type="text"
//                 id="productLink"
//                 placeholder="Enter product link here"
//                 value={productLink}
//                 onChange={(e) => setProductLink(e.target.value)}
//                 style={styles.input}
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             style={styles.button}
//             className="button-states" // Use CSS classes for hover and active states
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ProductAnalysisForm;
// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const Homepage = () => {
//   const navigate = useNavigate();

//   // const handleStartNow = () => {
//   //   navigate('/Linkinput');
//   // };

//   return (
//     <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <h1>Welcome to Review Bot</h1>
//       <p>Explore and analyze product reviews with AI.</p>
//       <Link to="/Login" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Get Started</Link>
//     </div>
//   );
// };

// export default Homepage;
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();


  return (
    <div className="container mx-auto text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to ReviewBot</h1>
      <p className="text-lg mb-6">
        Analyze and summarize product reviews instantly with our AI tool!
      </p>
      {/* Tailwind button */}
      <Link
        to="/Login"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Start Now
      </Link>
    </div>
  );
};

export default Home;
