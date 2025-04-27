export default function CheckField({ id, name, text, checked }) {
  return (
    <label htmlFor={id} className="check_field">
      <input type="radio" id={id} name={name} value={id} checked={checked} />
      <span>{text}</span>
    </label>
  );
}
