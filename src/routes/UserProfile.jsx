import { useState } from "react";

const UserProfile = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: "مريم سمير",
    dob: "لم يتم توفيره",
    accessibility: "لم يتم توفيره",
    bio: "لم يتم توفيره",
    gender: "لم يتم توفيره",
  });

  const [contactInfo, setContactInfo] = useState({
    mobile: "لم يتم توفيره",
    emergencyContact: "لم يتم توفيره",
    email: "mariemsamir52@gmail.com",
    address: "لم يتم توفيره",
  });

  const [isEditingBasic, setIsEditingBasic] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [avatar, setAvatar] = useState("/images/user.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditBasic = () => {
    setIsEditingBasic(!isEditingBasic);
  };

  const handleEditContact = () => {
    setIsEditingContact(!isEditingContact);
  };

  const handleChange = (section, field, value) => {
    if (section === "basic") {
      setBasicInfo((prev) => ({
        ...prev,
        [field]: value,
      }));
    } else if (section === "contact") {
      setContactInfo((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <img src={avatar} alt="user avatar" className="avatar-img" />
          <label htmlFor="upload-avatar" className="upload-icon">
            <i className="fas fa-plus"></i>
            <input
              type="file"
              id="upload-avatar"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div className="user-info">
          <h2>مرحبًا، مريم</h2>
          <p className="email">mariemsamir52@gmail.com</p>
        </div>
      </div>

      <div className="profile-sections">
        <div className="profile-nav">
          <button className="nav-item active">
            <span>الملف الشخصي</span>
            <p>قم بتوفير تفاصيلك الشخصية والمستندات الخاصة بالسفر</p>
          </button>
          <button className="nav-item">
            <span>التواصل</span>
            <p>تحكم في الإشعارات التي تتلقاها</p>
          </button>
          <button className="nav-item">
            <span>طرق الدفع</span>
            <p>عرض طرق الدفع المحفوظة</p>
          </button>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <div className="section-header">
              <div className="section-title-wrapper">
                <h3>المعلومات الأساسية</h3>
                <button className="edit-btn" onClick={handleEditBasic}>
                  {isEditingBasic ? "حفظ" : "تعديل"}
                </button>
              </div>
              <p className="description">
                تأكد من أن هذه المعلومات تطابق بطاقة السفر الخاصة بك، مثل جواز
                السفر أو رخصة القيادة.
              </p>
            </div>

            <div className="section-fields">
              {[
                { field: "name", label: "الاسم" },
                { field: "dob", label: "تاريخ الميلاد" },
                { field: "accessibility", label: "إمكانية الوصول" },
                { field: "bio", label: "السيرة الذاتية" },
                { field: "gender", label: "الجنس" },
              ].map(({ field, label }) => (
                <div className="field-row" key={field}>
                  <label htmlFor={field} className="field-label">
                    {label}
                  </label>
                  {isEditingBasic ? (
                    <input
                      id={field}
                      type="text"
                      value={basicInfo[field]}
                      onChange={(e) =>
                        handleChange("basic", field, e.target.value)
                      }
                      className="edit-input"
                    />
                  ) : (
                    <div className="field-value">{basicInfo[field]}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <div className="section-header">
              <div className="section-title-wrapper">
                <h3>التواصل</h3>
                <button className="edit-btn" onClick={handleEditContact}>
                  {isEditingContact ? "حفظ" : "تعديل"}
                </button>
              </div>
              <p className="description">
                يمكنك تسجيل الدخول، تلقي إشعارات عن النشاطات الحسابية، والحصول
                على تحديثات الرحلات عبر مشاركة هذه المعلومات.
              </p>
            </div>

            <div className="section-fields">
              {[
                { field: "mobile", label: "رقم الهاتف" },
                {
                  field: "emergencyContact",
                  label: "جهة الاتصال في حالات الطوارئ",
                },
                { field: "email", label: "البريد الإلكتروني" },
                { field: "address", label: "العنوان" },
              ].map(({ field, label }) => (
                <div className="field-row" key={field}>
                  <label htmlFor={field} className="field-label">
                    {label}
                  </label>
                  {isEditingContact ? (
                    <input
                      id={field}
                      type="text"
                      value={contactInfo[field]}
                      onChange={(e) =>
                        handleChange("contact", field, e.target.value)
                      }
                      className="edit-input"
                    />
                  ) : (
                    <div className="field-value">{contactInfo[field]}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
