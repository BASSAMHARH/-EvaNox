import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * * هذا المكون يستمع لتغييرات المسار ويقوم تلقائيًا بتمرير النافذة إلى أعلى الصفحة.
 * يجب وضعه داخل مكون <Router>، عادةً في App.js.
 */
function ScrollToTop() {
  const { pathname } = useLocation(); // الحصول على المسار الحالي من الـ URL

  useEffect(() => {
    // عندما يتغير المسار (pathname)، قم بالتمرير إلى أعلى النافذة.
    // 'smooth' للتمرير الناعم، 'auto' للتمرير الفوري.
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // يمكنك تغيير هذا إلى 'auto' للتمرير الفوري
    });
  }, [pathname]); // أعد تشغيل هذا التأثير عندما يتغير المسار (pathname)

  return null; // هذا المكون لا يعرض أي واجهة مستخدم، وظيفته هي فقط التأثيرات الجانبية
}

export default ScrollToTop;
