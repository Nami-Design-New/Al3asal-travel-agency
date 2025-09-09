import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { formatTimeHHMM, minutesToHM } from "../../utils/helpers";

export default function TicketTimeLine({ flight }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  return (
    <div className="departure">
      <div className="time">
        <h6>{formatTimeHHMM(flight?.departure?.time)}</h6>
        <span>{flight?.departure?.airport}</span>
      </div>

      <div className="time_line">
        {flight?.segments
          ?.filter((seg) => seg.type === "layover")
          .map((stop, index) => {
            const stopDurationMinutes =
              (new Date(stop.to) - new Date(stop.from)) / (1000 * 60);

            const offsetInMinutes =
              (new Date(stop.from) - new Date(flight.departure.time)) /
              (1000 * 60);

            const width = (stopDurationMinutes / flight.totalDuration) * 100;
            const left = (offsetInMinutes / flight.totalDuration) * 100;

            return (
              <OverlayTrigger
                key={index}
                placement="bottom"
                overlay={renderTooltip({
                  content: (
                    <>
                      {minutesToHM(stopDurationMinutes)} layover at <br />{" "}
                      {stop?.name}
                    </>
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
                  <span>{stop?.code}</span>
                </div>
              </OverlayTrigger>
            );
          })}
      </div>

      <div className="time">
        <h6>{formatTimeHHMM(flight?.arrival?.time)}</h6>
        <span>{flight?.arrival?.airport}</span>
      </div>
    </div>
  );
}
