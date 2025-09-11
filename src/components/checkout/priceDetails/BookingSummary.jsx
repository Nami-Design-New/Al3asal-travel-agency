import dayjs from "dayjs";

export default function BookingSummary({
  departFlight,
  returnFlight,
  passengers,
  onClick,
}) {
  const firstLeg = departFlight?.legs?.[0];
  const lastLeg = departFlight?.legs?.[departFlight?.legs?.length - 1];

  return (
    <button onClick={onClick}>
      <div>
        <h6>
          {firstLeg?.departure_info?.city_name} (
          {firstLeg?.departure_info?.airport_code}){" "}
          {returnFlight?.package_info ? (
            <i className="fa-light fa-arrow-right-arrow-left"></i>
          ) : (
            <i className="fa-light fa-arrow-left"></i>
          )}
          {lastLeg?.arrival_info?.city_name} (
          {lastLeg?.arrival_info?.airport_code})
        </h6>

        <span>
          {dayjs(firstLeg?.departure_info?.date).format("ddd, D MMM")}
          {returnFlight?.legs?.[0]?.departure_info.date && (
            <>
              {" - "}
              {dayjs(returnFlight?.legs?.[0]?.departure_info.date).format(
                "ddd, D MMM"
              )}{" "}
              ·{" "}
            </>
          )}
          {passengers} passengers
        </span>
      </div>
      <i className="fa-regular fa-chevron-left"></i>
    </button>
  );
}
