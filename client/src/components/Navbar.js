
// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Bot, LogOut, Menu, X } from 'lucide-react';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { isLoggedIn, logout } = useAuth(); // Fetch login state and logout function
//   const navigate = useNavigate();
//   const location = useLocation(); // To track the current page
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Logout Handler
//   const handleLogout = () => {
//     logout();
//     navigate('/'); // Redirect to Home after logout
//     setMenuOpen(false);
//   };

//   // Toggle Menu for mobile view
//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   // Links for non-logged-in users
//   const guestLinks = () => {
//     if (location.pathname === '/Login') {
//       return (
//         <>
//           <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
//           <NavLink to="/Signup" onClick={toggleMenu}>Signup</NavLink>
//         </>
//       );
//     } else if (location.pathname === '/Signup') {
//       return (
//         <>
//           <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
//           <NavLink to="/Login" onClick={toggleMenu}>Login</NavLink>
//         </>
//       );
//     } else {
//       // Home Page Links
//       return (
//         <>
          
//           <NavLink to="/Login" onClick={toggleMenu}>Login</NavLink>
//           <NavLink to="/Signup" onClick={toggleMenu}>Signup</NavLink>
//         </>
//       );
//     }
//   };

//   // Links for logged-in users
//   const authenticatedLinks = (
//     <>
//       <NavLink to="/" onClick={toggleMenu}>Review Bot</NavLink>
//       {/* <NavLink to="/chatbot" onClick={toggleMenu}>Chatbot Page</NavLink> */}
//       <NavLink to="/linkinput" onClick={toggleMenu}>Link Input</NavLink>
//       <button
//         onClick={handleLogout}
//         className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
//       >
//         <LogOut className="h-5 w-5" />
//         <span>Logout</span>
//       </button>
//     </>
//   );

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-2">
//           <Bot className="h-8 w-8 text-blue-600" />
//           <span className="text-2xl font-semibold text-gray-800">Review Bot</span>
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
//         </button>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center space-x-4">
//           {isLoggedIn ? authenticatedLinks : guestLinks()}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col space-y-2 mt-2 px-4">
//           {isLoggedIn ? authenticatedLinks : guestLinks()}
//         </div>
//       )}
//     </nav>
//   );
// };

// // Reusable NavLink Component
// const NavLink = ({ to, children, onClick }) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className="text-gray-600 hover:text-blue-600"
//   >
//     {children}
//   </Link>
// );

// export default Navbar;
// // boltnew
// // import React, { useState, useRef, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { Bot, Menu, X, User, Settings, LogOut } from 'lucide-react';
// // import { useAuth } from '../../context/AuthContext';
// // import './Navbar.css';

// // // Internal NavLink component
// // const NavLink = ({ to, children, onClick }) => (
// //   <Link
// //     to={to}
// //     onClick={onClick}
// //     className="nav-link group"
// //   >
// //     <span className="nav-link-text">{children}</span>
// //     <span className="nav-link-underline"></span>
// //   </Link>
// // );

// // // Internal UserMenu component
// // const UserMenu = ({ onClose }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const menuRef = useRef(null);
// //   const { logout } = useAuth();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// //         setIsOpen(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => document.removeEventListener('mousedown', handleClickOutside);
// //   }, []);

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/');
// //     setIsOpen(false);
// //     onClose?.();
// //   };

// //   return (
// //     <div className="user-menu" ref={menuRef}>
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className="user-menu-button"
// //       >
// //         <User className="user-menu-icon" />
// //       </button>

// //       {isOpen && (
// //         <div className="user-menu-dropdown">
// //           <button
// //             onClick={() => {
// //               navigate('/profile');
// //               setIsOpen(false);
// //               onClose?.();
// //             }}
// //             className="user-menu-item"
// //           >
// //             <Settings className="user-menu-item-icon" />
// //             <span>Profile Settings</span>
// //           </button>
// //           <button
// //             onClick={handleLogout}
// //             className="user-menu-item user-menu-item-logout"
// //           >
// //             <LogOut className="user-menu-item-icon" />
// //             <span>Logout</span>
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Main Navbar component
// // const Navbar = () => {
// //   const { isLoggedIn } = useAuth();
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const toggleMenu = () => setMenuOpen((prev) => !prev);

// //   const authenticatedLinks = (
// //     <>
// //       <NavLink to="/linkinput" onClick={() => setMenuOpen(false)}>Link Input</NavLink>
// //       <NavLink to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</NavLink>
// //       <UserMenu onClose={() => setMenuOpen(false)} />
// //     </>
// //   );

// //   const guestLinks = (
// //     <>
// //       <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
// //       <NavLink to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</NavLink>
// //     </>
// //   );

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">
// //         <Link to="/" className="navbar-logo">
// //           <Bot className="navbar-logo-icon" />
// //           <span className="navbar-logo-text">Review Bot</span>
// //         </Link>

// //         <button
// //           className="navbar-mobile-button"
// //           onClick={toggleMenu}
// //           aria-label="Toggle menu"
// //         >
// //           {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
// //         </button>

// //         <div className={`navbar-links ${menuOpen ? 'show' : ''}`}>
// //           {isLoggedIn ? authenticatedLinks : guestLinks}
// //         </div>

// //         {menuOpen && (
// //           <div className="navbar-mobile-menu">
// //             {isLoggedIn ? authenticatedLinks : guestLinks}
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { Bot, Menu, X, User, Settings, LogOut } from 'lucide-react';
// // // // import { useAuth } from '../src/context/AuthContext';

// // // import {useAuth} from 'context/AuthContext';

// // // import './Navbar.css';



// // // const NavLink = ({ to, children, onClick }) => (
// // //   <Link
// // //     to={to}
// // //     onClick={onClick}
// // //     style={{
// // //       position: 'relative',
// // //       color: '#4B5563', // gray-600
// // //       transition: 'color 0.3s',
// // //     }}
// // //     onMouseOver={(e) => (e.currentTarget.style.color = '#2563EB')} // blue-600
// // //     onMouseOut={(e) => (e.currentTarget.style.color = '#4B5563')}
// // //   >
// // //     <span>{children}</span>
// // //     <span
// // //       style={{
// // //         position: 'absolute',
// // //         bottom: 0,
// // //         left: 0,
// // //         width: '0%',
// // //         height: '2px',
// // //         backgroundColor: '#2563EB', // blue-600
// // //         transition: 'width 0.3s',
// // //       }}
// // //       className="underline"
// // //     ></span>
// // //   </Link>
// // // );

// // // const UserMenu = ({ onClose }) => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const menuRef = useRef(null);
// // //   const { logout } = useAuth();
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// // //         setIsOpen(false);
// // //       }
// // //     };
// // //     document.addEventListener('mousedown', handleClickOutside);
// // //     return () => document.removeEventListener('mousedown', handleClickOutside);
// // //   }, []);

// // //   const handleLogout = () => {
// // //     logout();
// // //     navigate('/');
// // //     setIsOpen(false);
// // //     onClose?.();
// // //   };

// // //   return (
// // //     <div ref={menuRef} style={{ position: 'relative' }}>
// // //       <button
// // //         onClick={() => setIsOpen((prev) => !prev)}
// // //         style={{
// // //           display: 'flex',
// // //           alignItems: 'center',
// // //           justifyContent: 'center',
// // //           width: '40px',
// // //           height: '40px',
// // //           borderRadius: '50%',
// // //           backgroundColor: '#EFF6FF', // blue-50
// // //           transition: 'background-color 0.3s',
// // //         }}
// // //         onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#DBEAFE')} // blue-100
// // //         onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#EFF6FF')}
// // //       >
// // //         <User style={{ width: '20px', height: '20px', color: '#2563EB' }} />
// // //       </button>
// // //       {isOpen && (
// // //         <div
// // //           style={{
// // //             position: 'absolute',
// // //             right: 0,
// // //             marginTop: '8px',
// // //             width: '192px',
// // //             backgroundColor: 'white',
// // //             borderRadius: '8px',
// // //             boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
// // //             zIndex: 50,
// // //             animation: 'fadeIn 0.2s ease-out',
// // //           }}
// // //         >
// // //           <button
// // //             onClick={() => {
// // //               navigate('/profile');
// // //               setIsOpen(false);
// // //               onClose?.();
// // //             }}
// // //             style={{
// // //               display: 'flex',
// // //               alignItems: 'center',
// // //               width: '100%',
// // //               padding: '8px 16px',
// // //               textAlign: 'left',
// // //               transition: 'background-color 0.2s',
// // //             }}
// // //             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#EFF6FF')} // blue-50
// // //             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
// // //           >
// // //             <Settings style={{ width: '16px', height: '16px', marginRight: '8px' }} />
// // //             <span>Profile Settings</span>
// // //           </button>
// // //           <button
// // //             onClick={handleLogout}
// // //             style={{
// // //               display: 'flex',
// // //               alignItems: 'center',
// // //               width: '100%',
// // //               padding: '8px 16px',
// // //               color: '#DC2626', // red-600
// // //               textAlign: 'left',
// // //               transition: 'background-color 0.2s',
// // //             }}
// // //             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FEE2E2')} // red-50
// // //             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
// // //           >
// // //             <LogOut style={{ width: '16px', height: '16px', marginRight: '8px' }} />
// // //             <span>Logout</span>
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // const Navbar = () => {
// // //   const { isLoggedIn } = useAuth();
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   const toggleMenu = () => setMenuOpen((prev) => !prev);

// // //   const renderLinks = () =>
// // //     isLoggedIn ? (
// // //       <>
// // //         <NavLink to="/linkinput" onClick={toggleMenu}>
// // //           Link Input
// // //         </NavLink>
// // //         <UserMenu onClose={toggleMenu} />
// // //       </>
// // //     ) : (
// // //       <>
// // //         <NavLink to="/login" onClick={toggleMenu}>
// // //           Login
// // //         </NavLink>
// // //         <NavLink to="/signup" onClick={toggleMenu}>
// // //           Sign Up
// // //         </NavLink>
// // //       </>
// // //     );

// // //   return (
// // //     <nav
// // //       style={{
// // //         backgroundColor: 'white',
// // //         boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
// // //         position: 'sticky',
// // //         top: 0,
// // //         zIndex: 50,
// // //         animation: 'slideDown 0.3s ease-out',
// // //       }}
// // //     >
// // //       <div
// // //         style={{
// // //           maxWidth: '1120px',
// // //           margin: '0 auto',
// // //           padding: '0 16px',
// // //           display: 'flex',
// // //           justifyContent: 'space-between',
// // //           alignItems: 'center',
// // //           height: '64px',
// // //         }}
// // //       >
// // //         <Link
// // //           to="/"
// // //           style={{
// // //             display: 'flex',
// // //             alignItems: 'center',
// // //             textDecoration: 'none',
// // //           }}
// // //         >
// // //           <Bot style={{ width: '32px', height: '32px', color: '#2563EB' }} />
// // //           <span
// // //             style={{
// // //               fontSize: '20px',
// // //               fontWeight: '600',
// // //               background: 'linear-gradient(120deg, #3b82f6, #1d4ed8)',
// // //               WebkitBackgroundClip: 'text',
// // //               WebkitTextFillColor: 'transparent',
// // //               marginLeft: '8px',
// // //             }}
// // //           >
// // //             Review Bot
// // //           </span>
// // //         </Link>
// // //         <button
// // //           onClick={toggleMenu}
// // //           style={{
// // //             background: 'none',
// // //             border: 'none',
// // //             color: '#4B5563',
// // //             fontSize: '24px',
// // //             display: 'flex',
// // //             alignItems: 'center',
// // //             cursor: 'pointer',
// // //           }}
// // //           aria-label="Toggle menu"
// // //         >
// // //           {menuOpen ? (
// // //             <X style={{ width: '32px', height: '32px' }} />
// // //           ) : (
// // //             <Menu style={{ width: '32px', height: '32px' }} />
// // //           )}
// // //         </button>
// // //         <div
// // //           style={{
// // //             display: menuOpen ? 'flex' : 'none',
// // //             flexDirection: 'column',
// // //             alignItems: 'flex-start',
// // //           }}
// // //         >
// // //           {renderLinks()}
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bot, Menu, User, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Toggles the state of menus
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleUserMenu = () => setUserMenuOpen((prev) => !prev);

  // Handles logout and resets menus
  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
    setUserMenuOpen(false);
  };

  // Defines guest links based on the current route
  const guestLinks = () => {
    const links = [
      { to: '/', label: 'Home', show: location.pathname !== '/' },
      { to: '/Login', label: 'Login', show: location.pathname !== '/Login' },
      { to: '/Signup', label: 'Signup', show: location.pathname !== '/Signup' },
    ];

    return links
      .filter((link) => link.show)
      .map(({ to, label }) => (
        <NavLink key={to} to={to} onClick={toggleMenu}>
          {label}
        </NavLink>
      ));
  };

  // Defines authenticated links
  const authenticatedLinks = (
    <>
      <NavLink to="/linkinput" onClick={toggleMenu}>
        Link Input
      </NavLink>
      <div className="relative">
        <button
          onClick={toggleUserMenu}
          className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <User className="h-5 w-5" />
        </button>
        {userMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setUserMenuOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Bot className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-semibold text-gray-800">Review Bot</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? authenticatedLinks : guestLinks()}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 px-4 pb-4">
          {isLoggedIn ? authenticatedLinks : guestLinks()}
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-600 hover:text-blue-600 transition duration-150"
  >
    {children}
  </Link>
);

export default Navbar;
