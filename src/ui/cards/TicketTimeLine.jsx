import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  dateTimeDiffCalc,
  formatTimeHHMM,
  minutesToHM,
  diffInDays,
} from "../../utils/helpers";

export default function TicketTimeLine({ flight }) {
  const legs = flight.legs;
  const firstLeg = legs[0];
  const lastLeg = legs[legs.length - 1];

  const departureTime = firstLeg?.departure_info?.date;
  const arrivalTime = lastLeg?.arrival_info?.date;
  const departureAirport = firstLeg?.departure_info?.airport_code;
  const arrivalAirport = lastLeg?.arrival_info?.airport_code;

  const totalDuration = dateTimeDiffCalc(departureTime, arrivalTime);
  const crossDays = diffInDays(departureTime, arrivalTime);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  return (
    <div className="departure">
      {/* Departure */}
      <div className="time">
        <h6>{formatTimeHHMM(departureTime)}</h6>
        <span>{departureAirport}</span>
      </div>

      {/* Timeline */}
      <div className="time_line">
        {legs.map((leg, index) => {
          if (index < legs.length - 1) {
            const stop = {
              from: leg.arrival_info.date,
              to: legs[index + 1].departure_info.date,
              code: leg.arrival_info.airport_code,
              name: leg.arrival_info.city_name,
            };

            const stopDurationMinutes = dateTimeDiffCalc(stop.from, stop.to);
            const offsetInMinutes = dateTimeDiffCalc(departureTime, stop.from);
            const timeStartTransit = stop.from;
            const timeEndTransit = stop.to;

            const width = (stopDurationMinutes / totalDuration) * 100;
            const left = (offsetInMinutes / totalDuration) * 100;

            return (
              <OverlayTrigger
                key={index}
                placement="bottom"
                overlay={renderTooltip({
                  content: (
                    <span style={{ fontSize: "12px" }}>
                      {minutesToHM(stopDurationMinutes)} layover at <br />
                      {stop.name}
                    </span>
                  ),
                })}
              >
                <div
                  className="line"
                  style={{
                    width: `${width}%`,
                    left: `${left}%`,
                  }}
                >
                  <span className="time">
                    <div>{formatTimeHHMM(timeStartTransit)}</div>
                    <div>
                      <i className="fa-regular fa-timer"></i>{" "}
                      {minutesToHM(stopDurationMinutes)}
                    </div>
                    <div>{formatTimeHHMM(timeEndTransit)}</div>
                  </span>

                  <span>{stop.code}</span>
                </div>
              </OverlayTrigger>
            );
          }
          return null;
        })}

        {legs.length === 1 && (
          <>
            <span className="flight_d up">
              <i className="fa-regular fa-timer"></i>{" "}
              {minutesToHM(totalDuration)}
            </span>
            <span className="flight_d">Direct Flight</span>
          </>
        )}
      </div>

      {/* Arrival */}
      <div className="time">
        <h6>
          {formatTimeHHMM(arrivalTime)}
          {crossDays > 0 && (
            <>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip({
                  content: (
                    <span style={{ fontSize: "12px" }}>
                      arrives {crossDays} day(s) later
                    </span>
                  ),
                })}
              >
                <span>+{crossDays}</span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip({
                  content: (
                    <span style={{ fontSize: "12px" }}>night flight</span>
                  ),
                })}
              >
                <i
                  className="fa-regular fa-moon"
                  style={{ color: "#FFD700" }}
                />
              </OverlayTrigger>
            </>
          )}
        </h6>
        <span>{arrivalAirport}</span>
      </div>
    </div>
  );
}
