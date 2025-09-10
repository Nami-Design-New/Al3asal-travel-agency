import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  dateTimeDiffCalc,
  formatTimeHHMM,
  minutesToHM,
} from "../../utils/helpers";

export default function TicketTimeLine({ flight }) {
  console.log("flight depart data =>>>>", flight.departureDate);
  console.log("flight arrival data =>>>>", flight.arrivalDate);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  return (
    <div className="departure">
      {/* Departure */}
      <div className="time">
        <h6>{formatTimeHHMM(flight?.departure?.time)}</h6>
        <span>{flight?.departure?.airport}</span>
      </div>

      {/* Timeline */}
      <div className="time_line">
        {flight?.segments
          ?.filter((seg) => seg.type === "layover")
          .map((stop, index) => {
            const stopDurationMinutes = dateTimeDiffCalc(stop.from, stop.to);
            const offsetInMinutes = dateTimeDiffCalc(
              flight.departure.time,
              stop.from
            );

            const width = (stopDurationMinutes / flight.totalDuration) * 100;
            const left = (offsetInMinutes / flight.totalDuration) * 100;

            return (
              <OverlayTrigger
                key={index}
                placement="bottom"
                overlay={renderTooltip({
                  content: (
                    <span style={{ fontSize: "12px" }}>
                      {minutesToHM(stopDurationMinutes)} layover at <br />
                      {stop?.name}
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
                    <i className="fa-regular fa-timer"></i>{" "}
                    {minutesToHM(stopDurationMinutes)}
                  </span>
                  <span>{stop?.code}</span>
                </div>
              </OverlayTrigger>
            );
          })}

        {flight?.segments?.filter((seg) => seg.type === "layover")?.length ===
          0 && (
          <>
            <span className="flight_d up">
              <i className="fa-regular fa-timer"></i>{" "}
              {minutesToHM(flight.totalDuration)}
            </span>
            <span className="flight_d">Direct Flight</span>
          </>
        )}
      </div>

      {/* Arrival */}
      <div className="time">
        <h6>
          {formatTimeHHMM(flight?.arrival?.time)}

          {flight.departureDate !== flight.arrivalDate && (
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip({
                content: (
                  <span style={{ fontSize: "12px" }}>arrives next day</span>
                ),
              })}
            >
              <span>+1</span>
            </OverlayTrigger>
          )}

          {flight.departureDate !== flight.arrivalDate && (
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip({
                content: <span style={{ fontSize: "12px" }}>night flight</span>,
              })}
            >
              <i className="fa-regular fa-moon" style={{ color: "#FFD700" }} />
            </OverlayTrigger>
          )}
        </h6>
        <span>{flight?.arrival?.airport}</span>
      </div>
    </div>
  );
}
