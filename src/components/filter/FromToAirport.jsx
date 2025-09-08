import AirportsMenu from "./AirportsMenu";

export default function FromToAirport({ handleSelectAirport }) {
  return (
    <div className="from_to">
      <AirportsMenu direction="from" handleSelectAirport={handleSelectAirport} />

      <button className="swap_button" type="button">
        <i className="fa-regular fa-arrow-right-arrow-left"></i>
      </button>

      <AirportsMenu direction="to" />
    </div>
  );
}
