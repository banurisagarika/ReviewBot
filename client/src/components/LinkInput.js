// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProductLinkInput = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [productLink, setProductLink] = useState('');

//   // Check if the user is logged in (you can implement session/cookie check here)
//   useEffect(() => {
//     const loggedIn = localStorage.getItem('isLoggedIn'); // Example with localStorage
//     if (loggedIn) {
//       setIsLoggedIn(true);
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleNavigate = () => {
//     // Navigate to the ProdDes page with state
//     navigate('/ProdDes', { state: { productLink } });
//   };

//   const handleProductLinkSubmit = (e) => {
//     e.preventDefault();
//     if (productLink) {
//       console.log('Product Link Submitted:', productLink);
//     }
//   };

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
//       {isLoggedIn ? (
//         <div style={styles.formContainer}>
//           <h2 style={styles.heading}>Enter Product Link</h2>
//           <form onSubmit={handleProductLinkSubmit}>
//             <div style={styles.formGroup}>
//               <div style={styles.inputWrapper}>
//                 <label htmlFor="productLink" style={styles.label}>
//                   Product Link:
//                 </label>
//                 <input
//                   type="url"
//                   id="productLink"
//                   value={productLink}
//                   onChange={(e) => setProductLink(e.target.value)}
//                   style={styles.input}
//                   required
//                   placeholder="Enter product link here"
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               style={styles.button}
//               onClick={handleNavigate}>
//               Submit
//             </button>
//           </form>
//         </div>
//       ) : (
//         <p>Please log in to continue.</p>
//       )}
//     </div>
//   );
// };

// export default ProductLinkInput;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ProductLinkInput = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [productLink, setProductLink] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loggedIn = localStorage.getItem('isLoggedIn');
//     if (loggedIn) {
//       setIsLoggedIn(true);
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleProductLinkSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const formData = new URLSearchParams();
//       formData.append('url', productLink);

//       const res = await axios.post('http://localhost:5000/scrape', formData, {
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       });

//       const { product_details, reviews } = res.data;
//       const reviewsArray = reviews.map((review) => review['review']);

//       let positive = 0,
//         negative = 0;

//       try {
//         const sentimentResponse = await axios.post('http://localhost:5000/senti', {
//           reviewTexts: reviewsArray,
//         });
//         const { positive: posCount, negative: negCount } = sentimentResponse.data;
//         positive = posCount;
//         negative = negCount;
//       } catch (error) {
//         console.error('Error in sentiment analysis:', error);
//       }

//       let summary = 'No summary available.';
//       try {
//         const summaryResponse = await axios.post('http://localhost:8000/summarize', {
//           reviews: reviewsArray,
//         });
//         summary = summaryResponse.data.summary || summary;
//       } catch (error) {
//         console.error('Error in summarization:', error);
//       }

//       try {
//         await axios.post('http://localhost:5000/upload_reviews', {
//           reviews: res.data,
//         });
//         console.log('Uploaded reviews');
//       } catch (error) {
//         console.error('Error in uploading reviews:', error);
//       }

//       navigate('/product', {
//         state: {
//           product: {
//             image: product_details.image || null,
//             name: product_details.name || 'Unknown Product',
//             price: product_details.price || 'Price not available',
//             sumRes: summary,
//             pos: positive,
//             neg: negative,
//             high: product_details.highlights || [],
//             rating: product_details.rating || 'No rating',
//             reviews: reviewsArray,
//           },
//         },
//       });
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data || 'Error fetching product details.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const styles = {
//     pageContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       background: 'linear-gradient(135deg, #a8c0d9, #f0f4f8)',
//       margin: 0,
//     },
//     formContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '40px',
//       borderRadius: '12px',
//       boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
//       backgroundColor: 'rgba(255, 255, 255, 0.95)',
//       width: '100%',
//       maxWidth: '450px',
//       textAlign: 'center',
//       backdropFilter: 'blur(5px)',
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
//       backgroundColor: loading ? '#b5b5b5' : 'grey',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '8px',
//       fontSize: '16px',
//       cursor: loading ? 'not-allowed' : 'pointer',
//       width: '100%',
//     },
//   };

//   return (
//     <div style={styles.pageContainer}>
//       {isLoggedIn ? (
//         <div style={styles.formContainer}>
//           <h2 style={styles.heading}>Enter Product Link</h2>
//           <form onSubmit={handleProductLinkSubmit}>
//             <div style={styles.formGroup}>
//               <label htmlFor="productLink" style={styles.label}>
//                 Product Link:
//               </label>
//               <input
//                 type="url"
//                 id="productLink"
//                 value={productLink}
//                 onChange={(e) => setProductLink(e.target.value)}
//                 style={styles.input}
//                 required
//                 placeholder="Enter product link here"
//               />
//             </div>
//             <button
//               type="submit"
//               style={styles.button}
//               disabled={loading}
//             >
//               {loading ? 'Analyzing...' : 'Submit'}
//             </button>
//           </form>
//           {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
//         </div>
//       ) : (
//         <p>Please log in to continue.</p>
//       )}
//     </div>
//   );
// };

// export default ProductLinkInput;



import React, { useState } from "react";
import { Link2 } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LinkInput.css";

const LinkInput = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new URLSearchParams();
      formData.append("url", url);

      const res = await axios.post("http://localhost:5000/scrape", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      const { product_details, reviews,specifications,highlights } = res.data;
      console.log(res.data);
  
      const reviewsArray = reviews.map((review)=>{return review["review"]})
      
      let positive = 0,
        negative = 0;
      try {
        const sentimentResponse = await axios.post("http://localhost:5000/senti", {
          reviewTexts: reviewsArray,
        });
        const { positive: posCount, negative: negCount } = sentimentResponse.data;
        positive = posCount;
        negative = negCount;
      } catch (error) {
        console.error("Error in sentiment analysis:", error);
      }

      let summary = "No summary available.";
      try {
        const summaryResponse = await axios.post("http://localhost:4000/summarize", {
          reviews: reviewsArray,
        });
        console.log(summaryResponse);
        summary = summaryResponse.data.summary || summary;
      } catch (error) {
        console.error("Error in summarization:", error);
      }

      try {
        const response = await axios.post("http://localhost:5000/upload_reviews", {
          reviews: res.data,
        });
        console.log("Uploaded reviews");
      } catch (error) {
        console.error("Error in uploading reviews:", error);
      }



      navigate("/product", {
        state: {
          product: {
            image: product_details.image || null,
            name: product_details.name || "Unknown Product",
            price: product_details.price || "Price not available",
            sumRes: summary,
            pos: positive,
            neg: negative,
            high: product_details.highlights || [],
            rating: product_details.rating || "No rating",
            reviews: reviewsArray, 
          },
        },
      });
    } catch (err) {
      console.log(err);
      setError(err.response?.data || "Error fetching product details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="link-input-container">
      <div className="link-input-card">
        <div className="link-input-icon">
          <Link2 />
        </div>
        <h2 className="link-input-title">Add Review Link</h2>
        <p className="link-input-description">Enter the product URL to analyze reviews</p>

        <form onSubmit={handleSubmit} className="link-input-form">
          <div>
            <label htmlFor="url" className="link-input-label">
              URL
            </label>
            <input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/product"
              className="link-input-field"
              required
            />
          </div>
          <button type="submit" className="link-input-button" disabled={loading}>
            {loading ? "Analyzing..." : "Analyze Reviews"}
          </button>
        </form>

        {error && <div className="link-input-error">{error}</div>}
      </div>
    </div>
  );
};

export default LinkInput;