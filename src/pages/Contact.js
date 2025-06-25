import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // رقم الواتساب الذي سيتم إرسال الرسالة إليه
  const whatsappNumber = "+963938077359"; // يرجى التأكد من أن هذا هو الرقم الصحيح لخدمة العملاء (بدون علامة +)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // بناء رسالة الواتساب باستخدام بيانات النموذج
    const message = `
    مرحبا، أود التواصل بخصوص خدمة: *${formData.service || 'لم تحدد'}*.

    الاسم: ${formData.name}
    البريد الإلكتروني: ${formData.email}
    رقم الهاتف: ${formData.phone || 'غير متوفر'}
    الرسالة:
    ${formData.message}
    `;

    // تشفير الرسالة لعنوان URL
    const encodedMessage = encodeURIComponent(message);

    // بناء رابط الواتساب
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // فتح الرابط في علامة تبويب جديدة
    window.open(whatsappUrl, '_blank');

    // مسح بيانات النموذج بعد الإرسال
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <>
      <section className="contact-header">
        <div className="container">
          <h1>تواصل معنا</h1>
          <p>نحن هنا للإجابة على استفساراتك ومساعدتك في تحويل أفكارك إلى واقع</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2 className="contact-info-title">معلومات التواصل</h2>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-info-content">
                  <h3>العنوان</h3>
                  <p>سوريا، دمشق</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-info-content">
                  <h3>الهاتف</h3>
                  <p>+963938077359</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-info-content">
                  <h3>ساعات العمل</h3>
                  <p>الأحد - الخميس: 12:00 صباحاً - 6:00 مساءً</p>
                </div>
              </div>
              <div className="contact-social">
                <h3>تابعنا على وسائل التواصل الاجتماعي</h3>
                <div className="social-icons">
                 <a href="https://wa.me/+963938077359" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="واتساب"><i className="fab fa-whatsapp"></i></a>
              
               <a href="https://www.instagram.com/evanox.ne?igsh=d2ljaW5xM3BobHRt" className="social-link"><i className="fab fa-instagram"></i></a>
               
                  
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h2 className="contact-form-title">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">الاسم الكامل</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service" className="form-label">الخدمة المطلوبة</label>
                  <select
                    id="service"
                    name="service"
                    className="form-control"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="web-development">تطوير مواقع الويب</option>
                    <option value="app-development">تطوير التطبيقات</option>
                    <option value="custom-software">برمجيات مخصصة</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">الرسالة</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit">إرسال الرسالة</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.51594447704!2d36.24688546345902!3d33.50348347071044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1653644496392!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="خريطة موقع الشركة"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
