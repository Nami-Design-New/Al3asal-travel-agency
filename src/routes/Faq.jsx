import { useState } from "react";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <section className="faq_section">
      <div className="container">
        <div className="section_title mb-5 text-center">
          <h2>الأسئلة الشائعة</h2>
          <p>هنا تجد إجابات عن أهم الاستفسارات</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <ul className="nav flex-column faq_tabs" role="tablist">
              <li
                className={`nav-item ${activeTab === "tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("tab1")}
              >
                <i className="fas fa-globe-americas"></i> ما هي أفضل وجهات السفر
                في الشتاء؟
              </li>
              <li
                className={`nav-item ${activeTab === "tab2" ? "active" : ""}`}
                onClick={() => handleTabClick("tab2")}
              >
                <i className="fas fa-cogs"></i> هل يمكن تعديل مواعيد السفر؟
              </li>
              <li
                className={`nav-item ${activeTab === "tab3" ? "active" : ""}`}
                onClick={() => handleTabClick("tab3")}
              >
                <i className="fas fa-passport"></i> ما هي متطلبات التأشيرة للسفر
                إلى أوروبا؟
              </li>
              <li
                className={`nav-item ${activeTab === "tab4" ? "active" : ""}`}
                onClick={() => handleTabClick("tab4")}
              >
                <i className="fas fa-calendar-check"></i> كيف يمكنني إلغاء
                الحجز؟
              </li>
              <li
                className={`nav-item ${activeTab === "tab5" ? "active" : ""}`}
                onClick={() => handleTabClick("tab5")}
              >
                <i className="fas fa-users"></i> هل يمكن ترتيب رحلات خاصة
                للمجموعات؟
              </li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className={`tab-content ${activeTab}`}>
              {activeTab === "tab1" && (
                <p>
                  أفضل الوجهات لفصل الشتاء تشمل أماكن مثل سويسرا لتمتع بالتزلج
                  على الجليد، كما تعتبر مناطق البحر الأحمر مثل شرم الشيخ
                  والغردقة من الخيارات الممتازة لمحبي الشمس والطقس المعتدل.
                </p>
              )}
              {activeTab === "tab2" && (
                <p>
                  نعم، يمكنك تعديل مواعيد السفر قبل موعد الرحلة، بشرط أن تكون قد
                  تم الحجز وفقًا للسياسات المتبعة في باقتك. يتطلب ذلك دفع رسوم
                  إضافية في بعض الأحيان حسب شروط كل باقة.
                </p>
              )}
              {activeTab === "tab3" && (
                <p>
                  تختلف متطلبات التأشيرة حسب الجنسية ووجهة السفر في أوروبا. من
                  الضروري التحقق من المتطلبات الخاصة بكل دولة عبر القنصليات أو
                  السفارات الأوروبية.
                </p>
              )}
              {activeTab === "tab4" && (
                <p>
                  نعم، يمكنك إلغاء الحجز وفقًا لسياسة الإلغاء الخاصة بكل باقة.
                  عادة ما تكون هناك رسوم إلغاء بناءً على المدة الزمنية قبل
                  الرحلة.
                </p>
              )}
              {activeTab === "tab5" && (
                <p>
                  نعم، نقدم خدمات مخصصة للرحلات الخاصة سواء للمجموعات أو
                  الشركات. تشمل هذه الخدمات تخطيط شامل للرحلة مع مرشدين سياحيين
                  خاصين وخيارات مميزة للإقامة.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
