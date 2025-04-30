import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { durationToMinutes, getTimeDiffInMinutes } from "../../utils/helpers";

export default function TicketTimeLine({ flight }) {
  const totalFlightMinutes = getTimeDiffInMinutes(
    flight?.departure?.time,
    flight?.arrival?.time
  );

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  return (
    <div className="departure">
      <div className="time">
        <h6>{flight?.departure?.time}</h6>
        <span>{flight?.departure?.airport}</span>
      </div>

      <div className="time_line">
        {flight?.stops?.map((stop, index) => {
          const stopDurationMinutes = durationToMinutes(stop?.duration);
          const offsetInMinutes = getTimeDiffInMinutes(
            flight?.departure?.time,
            stop?.startTime
          );

          const width = (stopDurationMinutes / totalFlightMinutes) * 100;
          const left = (offsetInMinutes / totalFlightMinutes) * 100;

          return (
            <OverlayTrigger
              key={index}
              placement="bottom"
              overlay={renderTooltip({
                content: (
                  <>
                    {stop?.duration} stop at <br /> {stop?.name}
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
              ></div>
            </OverlayTrigger>
          );
        })}
      </div>

      <div className="time">
        <h6>{flight?.arrival?.time}</h6>
        <span>{flight?.arrival?.airport}</span>
      </div>
    </div>
  );
}
