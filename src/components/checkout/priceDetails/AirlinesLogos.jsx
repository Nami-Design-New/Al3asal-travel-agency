export default function AirlinesLogos({ airlines }) {
  return (
    <div className="airlines">
      {airlines.map((code) => (
        <div className="img" key={code}>
          <img src={`http://img.wway.io/pics/root/${code}@svg`} alt={code} />
        </div>
      ))}
    </div>
  );
}
