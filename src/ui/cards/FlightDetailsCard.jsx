import {
  dateTimeDiffCalc,
  formatTimeHHMM,
  minutesToHM,
} from "../../utils/helpers";

export default function FlightDetailsCard({ type, flight }) {
  const { legs } = flight;

  const firstLeg = legs?.[0];
  const lastLeg = legs?.[legs?.length - 1];

  const totalDuration = dateTimeDiffCalc(
    firstLeg?.departure_info?.date,
    lastLeg?.arrival_info?.date
  );

  // unique airlines
  const airPorts = [
    ...new Set(legs?.map((leg) => leg?.airline_info?.carrier_code)),
  ];

  // build layovers (transit airports)
  const layovers = legs?.slice(0, -1)?.map((leg, idx) => {
    const nextLeg = legs[idx + 1];
    return {
      airport_code: leg?.arrival_info?.airport_code,
      airport_name: leg?.arrival_info?.airport_name,
      duration: minutesToHM(
        dateTimeDiffCalc(leg?.arrival_info?.date, nextLeg?.departure_info?.date)
      ),
    };
  });

  return (
    <div className="flight">
      <h6 className="mb-2">{type}</h6>

      {/* air ports from to */}
      <div className="airports">
        <div className="airPort">
          <span>{new Date(firstLeg?.departure_info?.date)?.toDateString()}</span>
          <h6>
            {firstLeg?.departure_info?.airport_code}{" "}
            {formatTimeHHMM(firstLeg?.departure_info?.date)}
          </h6>
          <span>{firstLeg?.departure_info?.airport_name}</span>
        </div>

        <div className="icon">
          <i className="fa-light fa-plane-departure"></i>
        </div>

        <div className="airPort last">
          <span>{new Date(lastLeg?.arrival_info?.date)?.toDateString()}</span>
          <h6>
            {lastLeg?.arrival_info?.airport_code}{" "}
            {formatTimeHHMM(lastLeg?.arrival_info?.date)}
          </h6>
          <span>{lastLeg?.arrival_info?.airport_name}</span>
        </div>
      </div>

      {/* time and airlines */}
      <div className="time_airline">
        <div className="time">
          <p>
            {minutesToHM(totalDuration)}{" "}
            {layovers?.length > 0 && (
              <span>
                via{" "}
                {layovers
                  ?.map((layover) => layover?.airport_code)
                  ?.join(", ")}
              </span>
            )}
          </p>

          {layovers?.length > 0 && (
            <p>
              <i className="fa-light fa-hourglass-clock"></i>{" "}
              {layovers?.map((layover, i) => (
                <span key={i}>
                  Stopover at {layover?.airport_code} - {layover?.duration}{" "}
                </span>
              ))}
            </p>
          )}
        </div>

        <div className="airlines">
          {airPorts?.map((airline, idx) => (
            <img
              key={idx}
              src={`http://img.wway.io/pics/root/${airline}@svg`}
              alt={airline}
            />
          ))}
        </div>
      </div>

      {/* time line */}
      <div className="time_line">
        {legs?.map((leg, idx) => {
          const departure = leg?.departure_info;
          const arrival = leg?.arrival_info;
          const duration = leg?.time_info?.leg_duration_time_minute;

          return (
            <div key={idx}>
              {/* segment */}
              <div className="segment">
                <div className="timing">
                  <div className="time">
                    <span>{new Date(departure?.date)?.toLocaleDateString()}</span>{" "}
                    <b>{formatTimeHHMM(departure?.date)}</b>
                  </div>

                  <div className="time">
                    <i className="fa-regular fa-stopwatch"></i>
                    <span>{minutesToHM(duration)}</span>
                  </div>

                  <div className="time">
                    <span>{new Date(arrival?.date)?.toLocaleDateString()}</span>{" "}
                    <b>{formatTimeHHMM(arrival?.date)}</b>
                  </div>
                </div>

                <div className="line" />

                <div className="segment_info">
                  <div className="title">
                    <h6>{departure?.airport_code}</h6>
                    <span>{departure?.airport_name}</span>
                  </div>

                  <div className="content">
                    <ul>
                      <li>
                        <div className="airline">
                          <img
                            src={`http://img.wway.io/pics/root/${leg?.airline_info?.carrier_code}@svg`}
                            alt={leg?.airline_info?.carrier_name}
                          />
                          <h6>{leg?.airline_info?.carrier_name}</h6>
                        </div>
                      </li>
                      <li>
                        <p>Economy</p>
                      </li>
                    </ul>
                  </div>

                  <div className="title">
                    <h6>{arrival?.airport_code}</h6>
                    <span>{arrival?.airport_name}</span>
                  </div>
                </div>
              </div>

              {/* layover after each leg except last */}
              {idx < legs?.length - 1 && (
                <div className="stop_over">
                  <span>
                    Layover at {legs[idx]?.arrival_info?.airport_code} for{" "}
                    <b>
                      {minutesToHM(
                        dateTimeDiffCalc(
                          legs[idx]?.arrival_info?.date,
                          legs[idx + 1]?.departure_info?.date
                        )
                      )}
                    </b>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
