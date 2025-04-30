// import { useParams } from "react-router";

export default function BlogDetails() {
    //   const { id } = useParams();
    
    
      return (
        <section className="blog_details">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-12 p-2">
                <div className="blog_header">
                  <h1>أفضل وجهات السفر لصيف 2024</h1>
                  <div className="blog_header_actions">
                    <span className="date">
                      <i className="fa-light fa-calendar-days"></i> 15 أبريل 2024
                    </span>
                  
                  </div>
                </div>
    
                <div className="blog_content">
                  <div className="img">
                    <img src="/blogs/blog5.jpg" alt="أفضل وجهات السفر لصيف 2024" />
                  </div>
    
                  <div className="content-text">
                    <h3>وجهات لا تفوتها في صيف 2024</h3>
                    <p>يقترب موسم الصيف، ويبحث الجميع عن أماكن مميزة لقضاء عطلة لا تنسى. سواء كنت من محبي الشواطئ أو المغامرات الجبلية أو استكشاف المدن القديمة، إليك قائمة بأفضل الوجهات لهذا العام.</p>
    
                    <h3>أشهر الوجهات الصيفية</h3>
                    <ul>
                      <li><strong>جزر المالديف:</strong> لمحبي البحر والشواطئ البيضاء.</li>
                      <li><strong>طرابزون - تركيا:</strong> طبيعة خلابة وأجواء منعشة.</li>
                      <li><strong>باليرمو - إيطاليا:</strong> ثقافة تاريخية وشواطئ رائعة.</li>
                      <li><strong>جورجيا:</strong> جبال خضراء وأنشطة مغامرات.</li>
                      <li><strong>شرم الشيخ - مصر:</strong> منتجعات فاخرة وغوص في الشعب المرجانية.</li>
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
                    <p>نقدم لك هذا الصيف باقات سفر حصرية تشمل تذاكر الطيران، الإقامة، والتنقلات مع مرشدين سياحيين محليين. احجز الآن واستمتع بتجربة لا تُنسى مع أفضل العروض.</p>
    
                    <h3>الخاتمة</h3>
                    <p>لا تفوّت فرصة اكتشاف أماكن جديدة هذا الصيف. ابدأ التخطيط الآن، واحجز رحلتك مع العسل للرحلات لعطلة فريدة من نوعها.</p>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-3 col-12 p-2">
                <div className="recent_blogs">
                  <h3>المقالات الأخيرة</h3>
                  <ul>
                    <li><a href="#"><h4>أفضل وجهات السفر لصيف 2024</h4></a></li>
                    <li><a href="#"><h4>أجمل المنتجعات العائلية في تركيا</h4></a></li>
                    <li><a href="#"><h4>نصائح لتجربة طيران أكثر راحة</h4></a></li>
                    <li><a href="#"><h4>دليلك لاكتشاف جورجيا</h4></a></li>
                    <li><a href="#"><h4>أجمل شواطئ المالديف</h4></a></li>
                    <li><a href="#"><h4>كيف تختار فندقك المثالي؟</h4></a></li>
                    <li><a href="#"><h4>أفضل وجهات التسوق في دبي</h4></a></li>
                    <li><a href="#"><h4>خطوات التخطيط لرحلة العمر</h4></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    