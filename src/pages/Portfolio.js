import React, { useState } from 'react';
import '../styles/Portfolio.css'; // Keep your existing CSS file

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  // Removed modal state as it's no longer needed for this view
  // const [modalOpen, setModalOpen] = useState(false);
  // const [selectedProject, setSelectedProject] = useState(null);

  // You can keep the projects data here, even if not displayed,
  // in case you want to reactivate them later or use them for other purposes.
  const projects = [
    {
      id: 1,
      title: 'موقع شركة تجارية',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      client: 'شركة الأفق للتجارة',
      date: '2023',
      technologies: 'React, Node.js, MongoDB',
      description: 'تصميم وتطوير موقع ويب احترافي لشركة تجارية يعرض منتجاتها وخدماتها بطريقة جذابة وسهلة الاستخدام. يتضمن الموقع نظام إدارة محتوى يمكن العميل من تحديث المحتوى بسهولة.',
      features: [
        'تصميم متجاوب مع جميع الأجهزة',
        'نظام إدارة محتوى سهل الاستخدام',
        'معرض منتجات متطور',
        'نموذج تواصل متكامل',
        'تكامل مع وسائل التواصل الاجتماعي',
        'تحسين لمحركات البحث'
      ]
    },
    {
      id: 2,
      title: 'تطبيق إدارة المهام',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      client: 'شركة النجاح للاستشارات',
      date: '2023',
      technologies: 'React Native, Firebase',
      description: 'تطوير تطبيق متكامل لإدارة المهام والمشاريع يساعد الفرق على تنظيم العمل وتتبع التقدم. يتيح التطبيق إنشاء مهام، تعيينها للأعضاء، تتبع الوقت، وإدارة الموارد.',
      features: [
        'إدارة المهام والمشاريع',
        'تعيين المهام للأعضاء',
        'تتبع الوقت والتكاليف',
        'لوحات كانبان تفاعلية',
        'تقارير وإحصائيات',
        'إشعارات وتذكيرات'
      ]
    },
    {
      id: 3,
      title: 'متجر إلكتروني',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=80',
      client: 'متجر الأناقة',
      date: '2023',
      technologies: 'React, Node.js, Express, MongoDB',
      description: 'تصميم وتطوير متجر إلكتروني متكامل لبيع الملابس والإكسسوارات. يتضمن المتجر نظام إدارة منتجات، سلة تسوق، نظام دفع آمن، وإدارة طلبات وشحن.',
      features: [
        'عرض المنتجات بطريقة جذابة',
        'نظام بحث وتصفية متقدم',
        'سلة تسوق وعملية شراء سلسة',
        'نظام دفع آمن',
        'إدارة المخزون والطلبات',
        'نظام تقييم ومراجعات'
      ]
    },
    {
      id: 4,
      title: 'نظام إدارة مدرسة',
      category: 'software',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80',
      client: 'مدرسة المستقبل',
      date: '2022',
      technologies: 'PHP, Laravel, MySQL, Vue.js',
      description: 'تطوير نظام متكامل لإدارة المدارس يشمل إدارة الطلاب، المعلمين، الفصول، الجداول الدراسية، الاختبارات، والدرجات. يتيح النظام للإدارة والمعلمين والطلاب وأولياء الأمور الوصول إلى المعلومات المناسبة لهم.',
      features: [
        'إدارة بيانات الطلاب والمعلمين',
        'جداول دراسية وحضور وغياب',
        'إدارة الاختبارات والدرجات',
        'تواصل بين المدرسة وأولياء الأمور',
        'إدارة الرسوم والمدفوعات',
        'تقارير وإحصائيات شاملة'
      ]
    },
    {
      id: 5,
      title: 'تطبيق توصيل طلبات',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      client: 'شركة توصيل سريع',
      date: '2022',
      technologies: 'Flutter, Firebase, Google Maps API',
      description: 'تطوير تطبيق لتوصيل الطلبات يربط بين المطاعم والمتاجر والعملاء وسائقي التوصيل. يتيح التطبيق للعملاء طلب المنتجات، تتبع الطلبات في الوقت الفعلي، والدفع إلكترونياً.',
      features: [
        'تصفح المطاعم والمتاجر',
        'طلب المنتجات وتخصيصها',
        'تتبع الطلبات في الوقت الفعلي',
        'نظام دفع متعدد الخيارات',
        'تقييم الخدمة والمنتجات',
        'إدارة الحسابات والعناوين'
      ]
    },
    {
      id: 6,
      title: 'منصة تعليمية',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      client: 'أكاديمية التعلم',
      date: '2022',
      technologies: 'React, Node.js, MongoDB, Socket.io',
      description: 'تطوير منصة تعليمية متكاملة تتيح للمدرسين إنشاء ونشر دورات تعليمية، وللطلاب الاشتراك في الدورات والتفاعل مع المحتوى. تتضمن المنصة نظام إدارة محتوى، فصول افتراضية، اختبارات، ومنتديات نقاش.',
      features: [
        'إنشاء ونشر الدورات التعليمية',
        'فصول افتراضية مباشرة',
        'اختبارات وتقييمات',
        'منتديات نقاش وتفاعل',
        'شهادات إتمام الدورات',
        'تتبع تقدم الطلاب'
      ]
    }
  ];

  // filteredProjects and modal functions are no longer directly used in the render,
  // but kept commented out for potential future re-activation.
  // const filteredProjects = filter === 'all'
  //   ? projects
  //   : projects.filter(project => project.category === filter);

  // const openModal = (project) => {
  //   setSelectedProject(project);
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <>
      <section className="portfolio-header">
        <div className="container">
          <h1>معرض أعمالنا</h1>
          <p>نفخر بتقديم مجموعة من أحدث مشاريعنا التي تعكس جودة عملنا والتزامنا بالتميز</p>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-filter">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              جميع المشاريع
            </button>
            <button
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              مواقع الويب
            </button>
            <button
              className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
              onClick={() => setFilter('app')}
            >
              تطبيقات
            </button>
            <button
              className={`filter-btn ${filter === 'software' ? 'active' : ''}`}
              onClick={() => setFilter('software')}
            >
              برمجيات مخصصة
            </button>
          </div>

          {/* New "Coming Soon" section */}
          <div className="coming-soon-message">
            <p>قريباً سيتم عرض المزيد من أعمالنا الرائعة هنا!</p>
          </div>

          {/* The portfolio-grid and modal rendering are removed */}
          {/*
          <div className="portfolio-grid grid grid-3">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-item">
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-category">
                    {project.category === 'web' && 'موقع ويب'}
                    {project.category === 'app' && 'تطبيق'}
                    {project.category === 'software' && 'برمجيات مخصصة'}
                  </p>
                  <button className="portfolio-link" onClick={() => openModal(project)}>
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            ))}
          </div>
          */}
        </div>
      </section>

      {/* The modal rendering is removed */}
      {/*
      {modalOpen && selectedProject && (
        <div className={`portfolio-modal ${modalOpen ? 'active' : ''}`}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-info">
                <div className="info-item">
                  <p className="info-label">العميل</p>
                  <p className="info-value">{selectedProject.client}</p>
                </div>
                <div className="info-item">
                  <p className="info-label">التاريخ</p>
                  <p className="info-value">{selectedProject.date}</p>
                </div>
                <div className="info-item">
                  <p className="info-label">التقنيات</p>
                  <p className="info-value">{selectedProject.technologies}</p>
                </div>
              </div>
              <div className="modal-description">
                <h3>وصف المشروع</h3>
                <p>{selectedProject.description}</p>
              </div>
              <div className="modal-features">
                <h3>المميزات الرئيسية</h3>
                <ul className="feature-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-cta">
                <button className="btn btn-primary modal-btn" onClick={closeModal}>إغلاق</button>
              </div>
            </div>
          </div>
        </div>
      )}
      */}
    </>
  );
};

export default Portfolio;