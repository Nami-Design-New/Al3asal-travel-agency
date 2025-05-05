import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function MyProfile() {
  const { t } = useTranslation();
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingPassport, setIsEditingPassport] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "MARIAM SAMIR",
    birthdate: "2025-05-04",
    gender: "",
    nationality: "",
    email: "mariam777@gmail.com",
    phone: "",
    passport: {
      number: "",
      country: "",
      issueDate: "",
      expiryDate: "",
    },
  });

  const handleChange = (section, field, value) => {
    if (section === "passport") {
      setProfileData((prev) => ({
        ...prev,
        passport: { ...prev.passport, [field]: value },
      }));
    } else {
      setProfileData((prev) => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="myprofile container">
      <h5 className="profile_title">{t("profile.myprofile")}</h5>
      <div className="profile_content">
        <div className="card mb-4">
          <div className="card-header">
            <span className="card-title">{t("profile.personalDetails")}</span>
            <button
              className="btn btn-light"
              onClick={() => setIsEditingPersonal((prev) => !prev)}
            >
              {isEditingPersonal ? t("profile.save") : t("profile.edit")}
            </button>
          </div>
          <div className="card-body row">
            <div className="col-md-6">
              <span className="lable">{t("profile.name")}: </span>
              {isEditingPersonal ? (
                <input
                  className="form-control"
                  value={profileData.name}
                  onChange={(e) => handleChange("", "name", e.target.value)}
                />
              ) : (
                profileData.name
              )}
            </div>
            <div className="col-md-6">
              <span className="lable">{t("profile.birthdate")}: </span>
              {isEditingPersonal ? (
                <input
                  type="date"
                  className="form-control"
                  value={profileData.birthdate}
                  onChange={(e) =>
                    handleChange("", "birthdate", e.target.value)
                  }
                />
              ) : (
                profileData.birthdate
              )}
            </div>
            <div className="col-md-6">
              <span className="lable">{t("profile.email")}: </span>
              {isEditingPersonal ? (
                <input
                  className="form-control"
                  value={profileData.email}
                  onChange={(e) => handleChange("", "email", e.target.value)}
                />
              ) : (
                profileData.email
              )}
            </div>
          </div>
        </div>

        {/* Passport Info Card */}
        <div className="card mb-4">
          <div className="card-header">
            <span className="card-title">{t("profile.passportInfo")}</span>
            <button
              className="btn btn-light"
              onClick={() => setIsEditingPassport((prev) => !prev)}
            >
              {isEditingPassport ? t("profile.save") : t("profile.edit")}
            </button>
          </div>
          <div className="card-body row">
            <div className="col-md-6">
              <span className="lable">{t("profile.passportNumber")}: </span>
              {isEditingPassport ? (
                <input
                  className="form-control"
                  value={profileData.passport.number}
                  onChange={(e) =>
                    handleChange("passport", "number", e.target.value)
                  }
                />
              ) : (
                profileData.passport.number || "--"
              )}
            </div>
            <div className="col-md-6">
              <span className="lable">{t("profile.issueCountry")}: </span>
              {isEditingPassport ? (
                <input
                  className="form-control"
                  value={profileData.passport.country}
                  onChange={(e) =>
                    handleChange("passport", "country", e.target.value)
                  }
                />
              ) : (
                profileData.passport.country || "--"
              )}
            </div>
            <div className="col-md-6">
              <span className="lable">{t("profile.issueDate")}: </span>
              {isEditingPassport ? (
                <input
                  type="date"
                  className="form-control"
                  value={profileData.passport.issueDate}
                  onChange={(e) =>
                    handleChange("passport", "issueDate", e.target.value)
                  }
                />
              ) : (
                profileData.passport.issueDate || "--"
              )}
            </div>
            <div className="col-md-6">
              <span className="lable">{t("profile.expiryDate")}: </span>
              {isEditingPassport ? (
                <input
                  type="date"
                  className="form-control"
                  value={profileData.passport.expiryDate}
                  onChange={(e) =>
                    handleChange("passport", "expiryDate", e.target.value)
                  }
                />
              ) : (
                profileData.passport.expiryDate || "--"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
