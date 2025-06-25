import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// استيراد مكونات الهيدر والفوتر
import Header from './components/Header'; // تأكد من المسار الصحيح
import Footer from './components/Footer'; // تأكد من المسار الصحيح

// استيراد مكونات الصفحات
import Home from './pages/Home';
import About from './pages/About'; 
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

import Contact from './pages/Contact';


import './App.css'; // أو Global.css لستايلات عامة
import ScrollToTop from './ScrollToTop'; // **استيراد مكون ScrollToTop الجديد**

function App() {
  return (
    <Router>
      {/* **مكون ScrollToTop يجب أن يكون داخل <Router> وقبل <Routes>**
        **هذا يضمن أنه يستمع لتغييرات المسار ويقوم بالتمرير إلى أعلى الصفحة في كل مرة يحدث فيها تنقل.**
      */}
      <ScrollToTop /> 
      <div className="App">
        {/* === الهيدر هنا لكي يظهر في جميع الصفحات === */}
        <Header /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          
          <Route path="/contact" element={<Contact />} />
          
          
          
        </Routes>

        {/* === الفوتر هنا لكي يظهر في جميع الصفحات === */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
