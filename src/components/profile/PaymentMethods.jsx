import { useState } from 'react';

const paymentOptions = [
  { id: 'visa', label: 'فيزا كريدت (البطاقة الائتمانية)', icon: 'visa.png' },
  { id: 'mastercard', label: 'ماستر كارد كريدت (البطاقة الائتمانية)', icon: 'mastercard.png' },
  { id: 'bank_transfer', label: 'حوالة مصرفية', icon: 'bank.png' },
  { id: 'amex', label: 'أمريكان إكسبريس', icon: 'amex.png' },
  { id: 'maestro', label: 'ماستر كارد سيوروس', icon: 'maestro.png' },
  { id: 'paypal', label: 'باي بال', icon: 'paypal.png' },
  { id: 'diners', label: 'داينرز كلوب', icon: 'diners.png' },
  { id: 'cod', label: 'الدفع نقداً', icon: 'cod.png' },
  { id: 'bitcoin', label: 'بيتكوين (bitcoin)', icon: 'bitcoin.png' },
  { id: 'apple_pay', label: 'Apple Pay', icon: 'applepay.png' },
  { id: 'debit_master', label: 'ماستر كارد ديبيت (بطاقة الخصم المباشر)', icon: 'mastercard.png' },
  { id: 'debit_visa', label: 'فيزا ديبيت (بطاقة الخصم المباشر)', icon: 'visa.png' },
  { id: 'western_union', label: 'ويسترن يونيون', icon: 'wu.png' },
  { id: 'fawry', label: 'Fawry Pay', icon: 'fawry.png' },
  { id: 'installments', label: 'Card Installments', icon: 'installments.png' },
];

export default function PaymentMethods() {
  const [selected, setSelected] = useState([]);

  const toggleOption = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="payment-methods card p-4">
      <h4 className="fw-bold mb-3">طرق الدفع</h4>
      <p className="mb-4 text-muted">
        عند اختيارك واحدة أو أكثر من طرق الدفع (10 على الأكثر)، ستظهر الأسعار على جدول خاص بالحد الأدنى من الرسوم. الرجاء الانتباه إلى أن بعض شركاتنا لا يدعمن جميع طرق الدفع.
      </p>

      <div className="methods-grid row">
        {paymentOptions.map((option) => (
          <div key={option.id} className="col-md-6 mb-3 d-flex align-items-center">
            <input
              type="checkbox"
              id={option.id}
              checked={selected.includes(option.id)}
              onChange={() => toggleOption(option.id)}
              className="form-check-input me-2"
            />
            <label htmlFor={option.id} className="form-check-label">
              <img src={`/icons/${option.icon}`} alt={option.label} className="me-2 icon" />
              {option.label}
            </label>
          </div>
        ))}
      </div>

      <button className="btn btn-primary w-100 mt-4">حفظ</button>
    </div>
  );
}
