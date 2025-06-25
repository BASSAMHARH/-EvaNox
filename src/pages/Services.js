import React, { useState } from 'react';
import '../styles/Home.css'; // <--- أضف هذا الاستيراد هنا!
import '../styles/Services.css';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
    const whatsappNumber = "+963938077359"; // تأكد من أن هذا هو الرقم الصحيح

  // دالة لإنشاء رابط الواتساب مع رسالة معدة مسبقًا
  const getWhatsappLink = (packageName) => {
    const message = encodeURIComponent(`مرحباً، أود الاستفسار عن باقة: ${packageName}.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const faqs = [
    {
      question: "ما هي مدة تنفيذ مشروع موقع ويب؟",
      answer: "تختلف مدة تنفيذ مشروع موقع الويب حسب حجم وتعقيد المشروع. بشكل عام، يمكن أن تستغرق المواقع البسيطة من 2-4 أسابيع، بينما قد تستغرق المشاريع المعقدة مثل المتاجر الإلكترونية أو المنصات المتخصصة من 8-12 أسبوع."
    },
    {
      question: "هل تقدمون خدمات الصيانة والدعم بعد إطلاق المشروع؟",
      answer: "نعم، نقدم خدمات الصيانة والدعم الفني المستمر لجميع مشاريعنا. لدينا باقات دعم مختلفة تشمل التحديثات الدورية، إصلاح الأخطاء، والتحسينات المستمرة لضمان أداء مثالي لموقعك أو تطبيقك."
    },
    {
      question: "هل يمكنني تعديل محتوى الموقع بنفسي بعد الانتهاء من التطوير؟",
      answer: "بالتأكيد، نحن نصمم مواقع الويب مع أنظمة إدارة محتوى سهلة الاستخدام تتيح لك تحديث المحتوى بنفسك دون الحاجة إلى معرفة تقنية متقدمة. كما نقدم تدريباً مجانياً لفريقك على كيفية إدارة المحتوى."
    },
    {
      question: "ما هي تكلفة تطوير تطبيق للهاتف المحمول؟",
      answer: "تعتمد تكلفة تطوير تطبيق الهاتف المحمول على عدة عوامل مثل تعقيد التطبيق، المنصات المستهدفة (iOS، Android، أو كلاهما)، والميزات المطلوبة. نقدم تقديرات دقيقة بعد فهم متطلبات مشروعك بالتفصيل."
    },
    {
      question: "هل تقدمون خدمات استضافة المواقع؟",
      answer: "نعم، نقدم خدمات استضافة موثوقة وآمنة لمواقع الويب والتطبيقات. تشمل خدماتنا النسخ الاحتياطي المنتظم، شهادات SSL، والدعم الفني على مدار الساعة لضمان توفر موقعك بشكل دائم."
    }
  ];

  return (
    <>
      <section className="services-header">
        <div className="container">
          <h1>خدماتنا</h1>
          <p>نقدم مجموعة متكاملة من الخدمات البرمجية عالية الجودة لتلبية احتياجات عملائنا من الشركات والأفراد</p>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="service-content">
            <div className="service-text">
              <h2 className="section-title">تطوير مواقع الويب</h2>
              <p>نصمم ونطور مواقع ويب احترافية وجذابة تعكس هوية عملائنا وتلبي احتياجاتهم. نحن نركز على تقديم مواقع سريعة وآمنة ومتوافقة مع جميع الأجهزة، مع تجربة مستخدم استثنائية.</p>
              <div className="service-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <div>
                    <h4>مواقع تعريفية للشركات</h4>
                    <p>مواقع احترافية تعرض هوية شركتك وخدماتك بطريقة جذابة وفعالة.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <div>
                    <h4>متاجر إلكترونية</h4>
                    <p>منصات تسوق متكاملة مع أنظمة دفع آمنة وإدارة مخزون فعالة.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <div>
                    <h4>مواقع خدمية</h4>
                    <p>مواقع متخصصة للخدمات المختلفة مع أنظمة حجز وإدارة مواعيد.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <div>
                    <h4>منصات تعليمية</h4>
                    <p>منصات تعليمية تفاعلية مع أنظمة إدارة محتوى وتتبع تقدم المستخدمين.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="تطوير مواقع الويب" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="section-title">تطوير التطبيقات</h2>
              <p>نطور تطبيقات ويب وهاتف متميزة تجمع بين سهولة الاستخدام والأداء العالي. نستخدم أحدث التقنيات لتقديم تطبيقات تلبي احتياجات المستخدمين وتحقق أهداف العملاء.</p>
              <div className="service-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <div>
                    <h4>تطبيقات الويب</h4>
                    <p>تطبيقات ويب تفاعلية وسريعة الاستجابة تعمل على جميع المتصفحات.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <div>
                    <h4>تطبيقات الهاتف لنظام Android</h4>
                    <p>تطبيقات أصلية لنظام Android مع واجهات مستخدم سلسة وأداء عالي.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <div>
                    <h4>تطبيقات الهاتف لنظام iOS</h4>
                    <p>تطبيقات أصلية لنظام iOS تتبع إرشادات التصميم من Apple لتجربة مستخدم مثالية.</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="تطوير التطبيقات" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="service-content">
            <div className="service-text">
              <h2 className="section-title">البرمجيات المخصصة</h2>
              <p>نطور حلول برمجية مخصصة تلبي الاحتياجات الفريدة لعملائنا وتساعدهم على تحسين كفاءة العمل وزيادة الإنتاجية. نحن نفهم تحديات الأعمال ونترجمها إلى حلول تقنية فعالة.</p>
              <div className="service-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <div>
                    <h4>أنظمة إدارة المخزون</h4>
                    <p>أنظمة متكاملة لإدارة المخزون ومتابعة المنتجات والمبيعات.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <div>
                    <h4>أنظمة إدارة الموارد البشرية</h4>
                    <p>برمجيات لإدارة شؤون الموظفين والرواتب والإجازات والتقييمات.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle feature-icon"></i>
                  <div>
                    <h4>أنظمة إدارة المشاريع</h4>
                    <p>حلول لإدارة المشاريع ومتابعة المهام وتنسيق العمل بين فرق العمل.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=80" alt="البرمجيات المخصصة" />
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">عملية العمل</h2>
            <p>نتبع منهجية منظمة وشفافة في تنفيذ مشاريعنا لضمان تحقيق أفضل النتائج</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">التحليل والتخطيط</h3>
                <p>نبدأ بفهم متطلبات المشروع وأهدافه بشكل دقيق، ثم نضع خطة عمل تفصيلية تشمل الجدول الزمني والميزانية والموارد اللازمة.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">التصميم</h3>
                <p>نصمم واجهات المستخدم وتجربة المستخدم بناءً على أفضل الممارسات، مع التركيز على سهولة الاستخدام والجاذبية البصرية.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">التطوير</h3>
                <p>نقوم بتطوير المشروع باستخدام أحدث التقنيات وأفضل الممارسات البرمجية، مع اختبارات مستمرة لضمان الجودة.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">الاختبار والتحسين</h3>
                <p>نجري اختبارات شاملة للتأكد من أداء المشروع وخلوه من الأخطاء، ثم نقوم بالتحسينات اللازمة بناءً على نتائج الاختبارات.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">الإطلاق والدعم</h3>
                <p>نطلق المشروع ونقدم الدعم الفني المستمر لضمان استمرارية عمله بكفاءة، مع تحديثات دورية لمواكبة التطورات التقنية.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">باقات الأسعار</h2>
            <p>نقدم باقات متنوعة تناسب مختلف الاحتياجات والميزانيات</p>
          </div>
          <div className="pricing-grid grid grid-3">
            <div className="pricing-card card">
              <div className="card-body">
                <h3 className="pricing-title">الباقة الأساسية</h3>
                <div className="pricing-price">
                  $700<span className="pricing-period">/مشروع</span>
                </div>
                <p>مثالية للشركات الصغيرة والمشاريع الناشئة</p>
                <ul className="pricing-features">
                  <li className="pricing-feature">موقع ويب تعريفي (حتى 5 صفحات)</li>
                  <li className="pricing-feature">تصميم متجاوب مع جميع الأجهزة</li>
                  <li className="pricing-feature">نظام إدارة محتوى بسيط</li>
                  <li className="pricing-feature">تحسين أساسي لمحركات البحث</li>
                  <li className="pricing-feature">دعم فني لمدة شهر</li>
                </ul>
                  <a 
                  href={getWhatsappLink("الباقة الاحترافية")} 
                  className="btn btn-outline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  اختر هذه الباقة
                </a>
              </div>
            </div>
            <div className="pricing-card card featured">
              <div className="card-body">
                <h3 className="pricing-title">الباقة المتقدمة</h3>
                <div className="pricing-price">
                  $2499<span className="pricing-period">/مشروع</span>
                </div>
                <p>مثالية للشركات المتوسطة والمشاريع المتنامية</p>
                <ul className="pricing-features">
                  <li className="pricing-feature">موقع ويب متكامل (حتى 15 صفحة)</li>
                  <li className="pricing-feature">تصميم احترافي فريد</li>
                  <li className="pricing-feature">نظام إدارة محتوى متقدم</li>
                  <li className="pricing-feature">تحسين شامل لمحركات البحث</li>
                  <li className="pricing-feature">تكامل مع وسائل التواصل الاجتماعي</li>
                  <li className="pricing-feature">دعم فني لمدة 3 أشهر</li>
                </ul>
                  <a 
                  href={getWhatsappLink("الباقة الاحترافية")} 
                  className="btn btn-outline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  اختر هذه الباقة
                </a>
              </div>
            </div>
            <div className="pricing-card card">
              <div className="card-body">
                <h3 className="pricing-title">الباقة الاحترافية</h3>
                <div className="pricing-price">
                  $4999<span className="pricing-period">/مشروع</span>
                </div>
                <p>مثالية للشركات الكبيرة والمشاريع المتخصصة</p>
                <ul className="pricing-features">
                  <li className="pricing-feature">موقع ويب أو تطبيق متخصص</li>
                  <li className="pricing-feature">تصميم احترافي مخصص</li>
                  <li className="pricing-feature">برمجة مخصصة حسب الاحتياجات</li>
                  <li className="pricing-feature">تحسين متقدم لمحركات البحث</li>
                  <li className="pricing-feature">تكامل مع أنظمة الشركة الداخلية</li>
                  <li className="pricing-feature">تدريب الفريق على استخدام النظام</li>
                  <li className="pricing-feature">دعم فني لمدة 6 أشهر</li>
                </ul>
                  <a 
                  href={getWhatsappLink("الباقة الاحترافية")} 
                  className="btn btn-outline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  اختر هذه الباقة
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">الأسئلة الشائعة</h2>
            <p>إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا</p>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <i className={`fas fa-chevron-down faq-icon ${activeIndex === index ? 'active' : ''}`}></i>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;