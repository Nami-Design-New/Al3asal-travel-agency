import { useState } from "react";
import { useTranslation } from "react-i18next";

const paymentOptions = [
  {
    id: "visa",
    label: "فيزا كريدت (البطاقة الائتمانية)",
    icon: "mastercard.png",
  },
  {
    id: "mastercard",
    label: "ماستر كارد كريدت (البطاقة الائتمانية)",
    icon: "visa.png",
  },
  { id: "bank_transfer", label: "حوالة مصرفية", icon: "mastercard.png" },
  { id: "amex", label: "أمريكان إكسبريس", icon: "mastercard.png" },
  { id: "maestro", label: "ماستر كارد سيوروس", icon: "mastercard.png" },
  { id: "paypal", label: "باي بال", icon: "mastercard.png" },
  { id: "diners", label: "داينرز كلوب", icon: "mastercard.png" },
  { id: "cod", label: "الدفع نقداً", icon: "mastercard.png" },
  { id: "bitcoin", label: "بيتكوين (bitcoin)", icon: "mastercard.png" },
  { id: "apple_pay", label: "Apple Pay", icon: "mastercard.png" },
  {
    id: "debit_master",
    label: "ماستر كارد ديبيت (بطاقة الخصم المباشر)",
    icon: "mastercard.png",
  },
  {
    id: "debit_visa",
    label: "فيزا ديبيت (بطاقة الخصم المباشر)",
    icon: "mastercard.png",
  },
  { id: "western_union", label: "ويسترن يونيون", icon: "mastercard.png" },
  { id: "fawry", label: "Fawry Pay", icon: "mastercard.png" },
  { id: "installments", label: "Card Installments", icon: "mastercard.png" },
];

export default function PaymentMethods() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState([]);

  const toggleOption = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="payment-methods p-4">
      <h5 className="payment_title">{t("profile.payment")}</h5>
      <p className="payment_subtitle">{t("profile.paymentsubtitle")}</p>

      <div className="methods-grid row">
        {paymentOptions.map((option) => (
          <div key={option.id} className="col-md-6 mb-3 method">
            <input
              type="checkbox"
              id={option.id}
              checked={selected.includes(option.id)}
              onChange={() => toggleOption(option.id)}
              className="form-check-input me-2"
            />
            <label htmlFor={option.id} className="form-check-label">
              <img
                src={`/icons/${option.icon}`}
                alt={option.label}
                className="me-2 icon"
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>

      <button className="custom-btn "> {t("profile.save")}</button>
    </div>
  );
}
