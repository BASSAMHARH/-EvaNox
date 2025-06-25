import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// استيراد db و auth من ملف firebase.js
import db, { auth } from '../firebase'; 
import { doc, getDoc, updateDoc, increment, setDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth'; // للاستماع لحالة المصادقة

import '../styles/Home.css';
import '../styles/Particles.css';

const Home = () => {
  const [currentTagline, setCurrentTagline] = useState(1);
  const [fadeState, setFadeState] = useState('fade-in');

  // حالات جديدة لعداد الزوار
  const [visitorCount, setVisitorCount] = useState(0);
  const [loadingVisitorCount, setLoadingVisitorCount] = useState(true);
  const [visitorCountError, setVisitorCountError] = useState(null);

  const taglines = {
    1: "وَمَضَاتُ بَرْمَجَةٍ تُنِيرُ عَالَمَكَ الرَّقْمِي",
    2: "البرمجة ليست سطورًا جامدة... بل هي رقصةٌ بين الظلام والنور.\nوهنا يأتي دورنا؛ فنحن نأخذُ أفكارَكَ من عتمتها إلى حيثُ تُبصِرُ النورَ.\nونؤمنُ أن كلَّ مشكلةٍ هي فرصةُ نجاحٍ تنتظرُ مَنْ يُحققها."
  };

  // useEffect للتحكم في تبديل الـ tagline
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeState('fade-out');
      
      setTimeout(() => {
        setCurrentTagline(2);
        setFadeState('fade-in');
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect لعداد الزوار باستخدام Firebase Firestore
  useEffect(() => {
    let unsubscribeFromFirestore = () => {}; // وظيفة لإلغاء الاشتراك من Firestore listener
    let unsubscribeAuth = () => {}; // وظيفة لإلغاء الاشتراك من Auth listener

    // دالة تقوم بإعداد عداد الزوار والتفاعل مع Firestore
    const setupVisitorCounter = async (user) => {
      if (!user) {
        console.log("User not authenticated yet. Waiting for authentication...");
        setVisitorCountError("Not authenticated.");
        setLoadingVisitorCount(false);
        return;
      }
      console.log("User is authenticated:", user.uid);

      try {
        const visitorCountDocRef = doc(db, 'metrics', 'visitors');

        // 1. زيادة عداد الزوار
        const docSnap = await getDoc(visitorCountDocRef);

        if (docSnap.exists()) {
          // إذا كان المستند موجوداً، قم بزيادة العداد
          await updateDoc(visitorCountDocRef, {
            count: increment(1)
          });
          console.log("Visitor count incremented.");
        } else {
          // إذا كان المستند غير موجود (أول زيارة)، قم بإنشائه بقيمة 1
          await setDoc(visitorCountDocRef, { count: 1 });
          console.log("Visitor count initialized to 1.");
        }

        // 2. الاستماع لتغييرات العداد في الوقت الفعلي وعرضها
        unsubscribeFromFirestore = onSnapshot(visitorCountDocRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            setVisitorCount(data.count);
            setLoadingVisitorCount(false);
          } else {
            setVisitorCount(0); // في حال حذف المستند أو لم يتم إنشاؤه بعد
            setLoadingVisitorCount(false);
          }
        }, (err) => {
          console.error("Error listening to visitor count:", err);
          setVisitorCountError("Failed to load visitor count.");
          setLoadingVisitorCount(false);
        });

      } catch (err) {
        console.error("Error setting up visitor counter:", err);
        setVisitorCountError("Failed to connect or update visitor count.");
        setLoadingVisitorCount(false);
      }
    };

    // الاستماع لتغييرات حالة المصادقة (مهم لضمان أن المستخدم مصادق عليه قبل التفاعل مع Firestore)
    unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setupVisitorCounter(user); // إذا كان المستخدم مصادق عليه، ابدأ إعداد العداد
      } else {
        console.log("Auth state changed: No user. Waiting for authentication to complete.");
      }
    });

    // دالة cleanup: إلغاء الاشتراك عند إلغاء تحميل المكون
    return () => {
      unsubscribeFromFirestore(); // إلغاء الاشتراك من Firestore listener
      unsubscribeAuth(); // إلغاء الاشتراك من Auth listener
    };
  }, []); // المصفوفة الفارغة تعني أن هذا الـ useEffect سيتم تشغيله مرة واحدة عند تحميل المكون

  return (
    <>
      <section className="home-hero">
        <div className="hero-content">
          <h1 className="company-name">EVANOX</h1>
          <p className={`tagline ${fadeState}`}>
            {taglines[currentTagline].split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < taglines[currentTagline].split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="btn btn-secondary hero-btn">خدماتنا</Link>
            <Link to="/contact" className="btn btn-outline hero-btn">تواصل معنا</Link>
          </div>

          {/* تم نقل عرض عداد الزوار إلى هنا (بعد الأزرار) */}
          <p className="visitor-counter">
            عدد الزوار الكلي: {loadingVisitorCount ? 'جاري التحميل...' : visitorCountError ? visitorCountError : visitorCount}
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">خدماتنا</h2>
            <p>نقدم مجموعة متكاملة من الخدمات البرمجية لتلبية احتياجات عملائنا</p>
          </div>
          <div className="services-grid grid grid-3">
            <div className="service-card card">
              <div className="card-body">
                <i className="fas fa-laptop-code service-icon"></i>
                <h3 className="card-title">تطوير مواقع الويب</h3>
                <p className="card-text">نصمم ونطور مواقع ويب احترافية وجذابة تعكس هوية عملائنا وتلبي احتياجاتهم.</p>
                <Link to="/services" className="btn btn-outline">المزيد</Link>
              </div>
            </div>
            <div className="service-card card">
              <div className="card-body">
                <i className="fas fa-mobile-alt service-icon"></i>
                <h3 className="card-title">تطوير التطبيقات</h3>
                <p className="card-text">نطور تطبيقات ويب وهاتف متميزة تجمع بين سهولة الاستخدام والأداء العالي.</p>
                <Link to="/services" className="btn btn-outline">المزيد</Link>
              </div>
            </div>
            <div className="service-card card">
              <div className="card-body">
                <i className="fas fa-cogs service-icon"></i>
                <h3 className="card-title">برمجيات مخصصة</h3>
                <p className="card-text">نطور حلول برمجية مخصصة تلبي الاحتياجات الفريدة لعملائنا وتساعدهم على النمو.</p>
                <Link to="/services" className="btn btn-outline">المزيد</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">من نحن</h2>
              <p>شركة evanox هي شركة برمجية متخصصة في تطوير تطبيقات الويب، إنشاء مواقع الويب، وتطوير البرمجيات المخصصة. نحن نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان، وليس العكس.</p>
              <p>نسعى جاهدين لتقديم حلول برمجية مبتكرة وعالية الجودة تساعد عملائنا على تحقيق أهدافهم وتطوير أعمالهم.</p>
              <Link to="/about" className="btn btn-primary">اقرأ المزيد عنا</Link>
            </div>
            <div className="about-image">
              <img src="./Aboutus.png" alt="فريق evanox" />
            </div>
          </div>
        </div>
      </section>

      <div className="coming-soon-message">
        <p>قريباً سيتم عرض المزيد من أعمالنا الرائعة هنا!</p>
      </div>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">هل أنت جاهز لتحويل أفكارك إلى واقع؟</h2>
          <p className="cta-text">دعنا نساعدك في تحقيق رؤيتك من خلال حلولنا البرمجية المبتكرة. تواصل معنا اليوم لمناقشة مشروعك.</p>
          <Link to="/contact" className="btn btn-secondary">تواصل معنا الآن</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
