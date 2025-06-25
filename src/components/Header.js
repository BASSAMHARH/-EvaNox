// Header.js
import React, { useState } from 'react';
import '../styles/Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة لفتح/إغلاق قائمة الجوال

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="header">
        <div className="header-logo">
          <Link to="/">
            {/* Replace the span with an img tag pointing to your icon */}
            <img src="/Evanox_modified.png" alt="Evanox Logo" className="logo-icon" />
          </Link>
        </div>

        {/* زر قائمة البرجر للجوال */}
        <button className="menu-toggle-button" onClick={toggleMenu} aria-label="Toggle navigation menu">
          {/* يمكنك استبدال هذا بنص أو SVG icon أو أيقونة من مكتبة أيقونات */}
          {isMenuOpen ? '✕' : '☰'} {/* يتغير الزر بين أيقونة الإغلاق ورمز البرجر */}
        </button>

       <ul className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
          
          <li className="nav-item">
            <NavLink to="/portfolio" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>معرض الأعمال</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>خدماتنا</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>من نحن</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeMenu}>الرئيسية</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => "btn btn-primary contact-btn" + (isActive ? " active" : "")} onClick={closeMenu}>تواصل معنا</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;