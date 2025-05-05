export default function CheckField({ id, name, text, checked, onChange }) {
  return (
    <label htmlFor={id} className="check_field">
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        checked={checked}
        onChange={onChange}
      />
      <span>{text}</span>
    </label>
  );
}
