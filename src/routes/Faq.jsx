export default function FAQ() {
  return (
    <section className="faq_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="section_title mb-4">
              <h2>الأسئلة الشائعة</h2>
              <p>هنا تجد إجابات عن أهم الاستفسارات</p>
            </div>

            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ما هي أفضل وجهات السفر في الصيف؟
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    أفضل الوجهات تشمل جزر المالديف، طرابزون، جورجيا، وشرم الشيخ.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    هل توفرون باقات شاملة للإقامة والتنقل؟
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    نعم، نوفر باقات شاملة تتضمن تذاكر الطيران، الإقامة،
                    والتنقلات مع مرشدين سياحيين.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    هل يمكن الحجز عبر الموقع مباشرة؟
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    بالطبع، يمكنك الحجز مباشرة من خلال موقعنا الإلكتروني بسهولة
                    وأمان.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    هل توفرون رحلات خاصة للمجموعات أو الشركات؟
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    نعم، نوفر باقات مخصصة للمجموعات والشركات مع خيارات مرنة
                    تناسب كافة الاحتياجات.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    هل يمكن تعديل أو إلغاء الحجز بعد إتمامه؟
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    بالتأكيد، يمكن تعديل أو إلغاء الحجز وفقًا لشروط وأحكام الحجز
                    الخاصة بكل باقة.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-none d-lg-block">
            <figure>
              <img src="/icons/faq.svg" alt="أسئلة شائعة" className="faq_img" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
