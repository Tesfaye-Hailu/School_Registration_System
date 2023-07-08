import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css'; // Import the CSS file for styling

const NavBar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav>
      <ul className="navbar">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === '/courses' ? 'active' : ''}>
          <Link to="/courses">Courses</Link>
        </li>
        <li className={location.pathname === '/students' ? 'active' : ''}>
          <Link to="/students">Student Details</Link>
        </li>
        <li className={location.pathname === '/search' ? 'active' : ''}>
          <Link to="/search">Search</Link>
        </li>
        <li className={location.pathname === '/studentList' ? 'active' : ''}>
          <Link to="/studentList">StudentList</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;