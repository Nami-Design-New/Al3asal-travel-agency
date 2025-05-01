const BlogDetails = () => {
  return (
    <div className="blog_details_page container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog_header">
            <h1>أفضل وجهات السفر لصيف 2024</h1>

            <div className="tags">
              <span>الوجهات</span>
              <span>سياحة المغامرات</span>
              <span>السياحة الفاخرة</span>
            </div>

            <div className="blog_header_actions">
              <span className="date">
                اخر تحديث:
                <i className="fa-light fa-calendar-days mx-2"></i>
                23 أبريل 2025
              </span>

              <div className="share_section">
                <i className="fa-solid fa-share-nodes"></i>
                <div className="share_buttons">
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                        "popup",
                        "width=600,height=400"
                      )
                    }
                  >
                    فيسبوك
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${window.location.href}`,
                        "popup",
                        "width=600,height=400"
                      )
                    }
                  >
                    تويتر
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `mailto:?subject=مقالة رائعة&body=أنصحك بقراءة هذا الرابط: ${window.location.href}`,
                        "popup",
                        "width=600,height=400"
                      )
                    }
                  >
                    بريد
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="blog_image">
            <img src="/blogs/blog1.jpg" alt="blog" />
          </div>
          <div className="blog_content">
            <div className="content-text">
              <h3>وجهات لا تفوتها في صيف 2024</h3>
              <p>
                يقترب موسم الصيف، ويبحث الجميع عن أماكن مميزة لقضاء عطلة لا
                تنسى. سواء كنت من محبي الشواطئ أو المغامرات الجبلية أو استكشاف
                المدن القديمة، إليك قائمة بأفضل الوجهات لهذا العام.
              </p>

              <h3>أشهر الوجهات الصيفية</h3>
              <ul>
                <li>
                  <strong>جزر المالديف:</strong> لمحبي البحر والشواطئ البيضاء.
                </li>
                <li>
                  <strong>طرابزون - تركيا:</strong> طبيعة خلابة وأجواء منعشة.
                </li>
                <li>
                  <strong>باليرمو - إيطاليا:</strong> ثقافة تاريخية وشواطئ
                  رائعة.
                </li>
                <li>
                  <strong>جورجيا:</strong> جبال خضراء وأنشطة مغامرات.
                </li>
                <li>
                  <strong>شرم الشيخ - مصر:</strong> منتجعات فاخرة وغوص في الشعب
                  المرجانية.
                </li>
              </ul>

              <h4>نصائح لاختيار وجهتك</h4>
              <p>عند اختيار وجهتك هذا الصيف، ضع في اعتبارك:</p>
              <ol>
                <li>ميزانية السفر وتكاليف الإقامة.</li>
                <li>طبيعة الأنشطة التي تفضلها.</li>
                <li>الأجواء المناخية في الفترة التي تنوي السفر فيها.</li>
                <li>سهولة التنقل والخدمات السياحية المتوفرة.</li>
              </ol>

              <blockquote>
                السفر تجربة تصنع الذكريات... اختر المكان الذي يشبهك!
              </blockquote>

              <h4>أفضل عروض 2024 مع العسل للرحلات</h4>
              <p>
                نقدم لك هذا الصيف باقات سفر حصرية تشمل تذاكر الطيران، الإقامة،
                والتنقلات مع مرشدين سياحيين محليين. احجز الآن واستمتع بتجربة لا
                تُنسى مع أفضل العروض.
              </p>

              <h3>الخاتمة</h3>
              <p>
                لا تفوّت فرصة اكتشاف أماكن جديدة هذا الصيف. ابدأ التخطيط الآن،
                واحجز رحلتك مع العسل للرحلات لعطلة فريدة من نوعها.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="recent_blogs">
            <h3>أحدث المقالات</h3>
            <ul>
              <li>
                <a href="#">
                  <div className="blog_item">
                    <img src="/blogs/blog1.jpg" alt="..." />
                    <div className="blog_info">
                      <h4>10 من أجمل الأماكن حول العالم</h4>
                      <span className="date">29 إبريل 2025</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="blog_item">
                    <img src="/blogs/blog2.jpg" alt="..." />
                    <div className="blog_info">
                      <h4>10 من أفضل الوجهات لقضاء عطلة صيفية</h4>
                      <span className="date">28 إبريل 2025</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="blog_item">
                    <img src="/blogs/blog3.jpg" alt="..." />
                    <div className="blog_info">
                      <h4>أنشطة المغامرة في أفريقيا</h4>
                      <span className="date">27 إبريل 2025</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>

            <h3>المقالات الشهيرة</h3>
            <ul>
              <li>
                <a href="#">
                  <div className="blog_item">
                    <img src="/blogs/blog4.jpg" alt="..." />
                    <div className="blog_info">
                      <h4>الاعتقاد السائد مقابل الحقيقة.. 6 وجهات سياحية</h4>
                      <span className="date">19 إبريل 2025</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="blog_item">
                    <img src="/blogs/blog4.jpg" alt="..." />
                    <div className="blog_info">
                      <h4>الاعتقاد السائد مقابل الحقيقة.. 6 وجهات سياحية</h4>
                      <span className="date">19 إبريل 2025</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
