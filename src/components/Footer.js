import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-column">
            <Link to="/" className="footer-logo">evanox</Link>
            <p className="footer-about">
              شركة برمجية متخصصة في تطوير تطبيقات الويب، إنشاء مواقع الويب، وتطوير البرمجيات المخصصة لتلبية احتياجات عملائنا من الشركات والأفراد.
            </p>
            <div className="social-links">
              <a href="https://wa.me/9639380773359" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="واتساب"><i className="fab fa-whatsapp"></i></a>
             
              <a href="https://www.instagram.com/evanox.ne?igsh=d2ljaW5xM3BobHRt" className="social-link"><i className="fab fa-instagram"></i></a>
              
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">روابط سريعة</h3>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/">الرئيسية</Link></li>
              <li className="footer-link"><Link to="/about">من نحن</Link></li>
              <li className="footer-link"><Link to="/services">خدماتنا</Link></li>
              <li className="footer-link"><Link to="/portfolio">معرض الأعمال</Link></li>
              
              <li className="footer-link"><Link to="/contact">تواصل معنا</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">خدماتنا</h3>
            <ul className="footer-links">
              <li className="footer-link"><Link to="/services">تطوير مواقع الويب</Link></li>
              <li className="footer-link"><Link to="/services">تطوير التطبيقات</Link></li>
              <li className="footer-link"><Link to="/services">البرمجيات المخصصة</Link></li>
              <li className="footer-link"><Link to="/marketing">استراتيجيات التسويق</Link></li>
              <li className="footer-link"><Link to="/ideas">أفكار مبتكرة</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">تواصل معنا</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt footer-contact-icon"></i>
                <span>سوريا، دمشق</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone footer-contact-icon"></i>
                <span>359 077 938 963+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} evanox. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
