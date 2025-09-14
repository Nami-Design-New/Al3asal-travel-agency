export default function GenderSelect({
  name,
  label = "Gender",
  value,
  onChange,
  error,
}) {
  return (
    <div className="gender_select">
      {label && <label>{label}</label>}

      <div>
        <label
          htmlFor={`${name}-female`}
          className={`gender_card ${value === "female" ? "active" : ""}`}
        >
          <input
            type="radio"
            id={`${name}-female`}
            name={name}
            value="female"
            checked={value === "female"}
            onChange={onChange}
          />
          <img src="/icons/female.svg" alt="female" /> Female
        </label>

        <label
          htmlFor={`${name}-male`}
          className={`gender_card ${value === "male" ? "active" : ""}`}
        >
          <input
            type="radio"
            id={`${name}-male`}
            name={name}
            value="male"
            checked={value === "male"}
            onChange={onChange}
          />
          <img src="/icons/male.svg" alt="male" /> Male
        </label>
      </div>

      {error && <span className="error">{error}</span>}
    </div>
  );
}
