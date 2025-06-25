import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <>
      <section className="about-header">
        <div className="container">
          <h1>من نحن</h1>
          <p>شركة evanox هي شركة برمجية متخصصة تسعى لتقديم حلول تقنية مبتكرة تساعد العملاء على تحقيق أهدافهم وتطوير أعمالهم</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="about-story-content">
            <div className="about-story-text">
              <h2 className="section-title">قصة الشركة</h2>
              <p>تأسست شركة evanox بهدف تقديم حلول برمجية متميزة للسوق السوري، انطلاقاً من إيماننا بأن التكنولوجيا يمكن أن تكون محركاً أساسياً للتنمية والتطوير في مختلف المجالات.</p>
              <p>بدأت رحلتنا كفكرة طموحة لخريج هندسة معلوماتية يؤمن بإمكانية تقديم خدمات برمجية عالية الجودة تنافس الخدمات العالمية، مع فهم عميق لاحتياجات السوق المحلي وتحدياته.</p>
              <p>نسعى من خلال خبراتنا وشغفنا بالتكنولوجيا إلى تقديم حلول مخصصة تلبي احتياجات عملائنا من الشركات والأفراد، وتساعدهم على مواكبة التطور التكنولوجي وتحقيق النجاح في عالم رقمي متغير.</p>
            </div>
            <div className="about-story-image">
              <img src="./Aboutus.png" alt="قصة evanox" />
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission">
        <div className="container">
          <div className="vision-mission-container">
            <div className="vision-card">
              <div className="vision-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h2>رؤيتنا</h2>
              <p>نطمح أن نكون الشركة الرائدة في مجال تطوير البرمجيات في سوريا، وأن نساهم في تعزيز التحول الرقمي للشركات والمؤسسات المحلية، وبناء مستقبل رقمي أفضل للجميع.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h2>رسالتنا</h2>
              <p>تقديم حلول برمجية مبتكرة وعالية الجودة تلبي احتياجات عملائنا وتساعدهم على تحقيق أهدافهم، من خلال فريق متميز يجمع بين المهارة التقنية والفهم العميق لاحتياجات السوق.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">قيمنا ومبادئنا</h2>
            <p>نؤمن بأن القيم والمبادئ هي أساس النجاح المستدام، ونسعى لتجسيدها في كل ما نقوم به</p>
          </div>
          <div className="values-grid grid grid-4">
            <div className="value-card card">
              <div className="card-body">
                <div className="value-icon">
                  <i className="fas fa-gem"></i>
                </div>
                <h3 className="card-title">الجودة</h3>
                <p className="card-text">نلتزم بتقديم أعلى معايير الجودة في جميع مشاريعنا، ونسعى دائماً للتحسين المستمر.</p>
              </div>
            </div>
            <div className="value-card card">
              <div className="card-body">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="card-title">الابتكار</h3>
                <p className="card-text">نشجع التفكير الإبداعي ونسعى دائماً لإيجاد حلول مبتكرة للتحديات التي تواجه عملائنا.</p>
              </div>
            </div>
            <div className="value-card card">
              <div className="card-body">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="card-title">النزاهة</h3>
                <p className="card-text">نؤمن بأهمية الصدق والشفافية في تعاملاتنا مع العملاء والشركاء والموظفين.</p>
              </div>
            </div>
            <div className="value-card card">
              <div className="card-body">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="card-title">العمل الجماعي</h3>
                <p className="card-text">نؤمن بقوة العمل الجماعي والتعاون لتحقيق أفضل النتائج وتجاوز توقعات العملاء.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="team-section">
  <div className="container">
    <div className="text-center">
      <h2 className="section-title">فريقنا</h2>
      <p>يتكون فريقنا من مجموعة من المتخصصين الموهوبين والشغوفين بالتكنولوجيا</p>
    </div>
    <div className="team-grid"> {/* لا حاجة لكلاس grid grid-3 هنا، الـ CSS سيتولى الأمر */}

      {/* العضو الأول (القائد) - سيظهر في المنتصف بالأعلى في الشاشات الكبيرة */}
      <div className="team-member">
        <div className="team-image">
          <img src="BASSAM.jpeg" alt="بسام حرح" />
        </div>
        <h3 className="team-name">بسام محمد نذار حرح</h3>
        <p className="team-position">مدير قسم (Frontend Develpment)</p>
      </div>

      {/* الأعضاء الثلاثة الآخرين - سيظهرون في الصف السفلي */}
      <div className="team-member">
        <div className="team-image">
          <img src="LOL.JPG" alt="لؤي كشكول" />
        </div>
        <h3 className="team-name">لؤي نذير كشكول</h3>
        <p className="team-position">مدير قسم (Backend Develpment)</p>
      </div>

      <div className="team-member">
        <div className="team-image">
          <img src="ABD.jpeg" alt="عبد الرحمن فلاحة" />
        </div>
        <h3 className="team-name">عبد الرحمن عبد الرزاق فلاحة</h3>
        <p className="team-position">مدير قسم (Design)</p>
      </div>

      <div className="team-member">
        <div className="team-image">
          <img src="Ibr.jpg " alt="محمد إبراهيم محمد البني" />
        </div>
        <h3 className="team-name">محمد إبراهيم محمد البني</h3>
        <p className="team-position">مدير قسم (Testing & Verification)</p>
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default About;
