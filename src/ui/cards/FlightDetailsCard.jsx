export default function FlightDetailsCard({ type }) {
  return (
    <div className="flight">
      <h6 className="mb-2">{type}</h6>

      {/* air ports from to */}
      <div className="airports">
        <div className="airPort">
          <span>Tue, 1 Jul</span>
          <h6>SPX 01:40</h6>
          <span>Sphinx International Airport</span>
        </div>

        <div className="icon">
          <i className="fa-light fa-plane-departure"></i>
        </div>

        <div className="airPort last">
          <span>Tue, 1 Jul</span>
          <h6>RUH 12:15</h6>
          <span>King Khalid International Airport</span>
        </div>
      </div>

      {/* time and airlines */}
      <div className="time_airline">
        <div className="time">
          <p>
            10h 30m <span>via DXB</span>
          </p>
          <p>
            <i className="fa-light fa-hourglass-clock"></i> Long Stopover - 04h
            15m
          </p>
        </div>

        <div className="airlines">
          <img src="/airlines/E5.webp" alt="e5" />
          <img src="/airlines/XY.webp" alt="xy" />
        </div>
      </div>

      {/* time line */}
      <div className="time_line">
        {/* first segment */}
        <div className="segment">
          <div className="timing">
            <div className="time">
              <span>1 Jul</span> <b>01:40</b>
            </div>

            <div className="time">
              <i className="fa-regular fa-stopwatch"></i>
              <span>03h 45m</span>
            </div>

            <div className="time">
              <span>1 Jul</span> <b>05:15</b>
            </div>
          </div>

          <div className="line" />

          <div className="segment_info">
            <div className="title">
              <h6>SPX</h6>
              <span>Sphinx International Airport</span>
            </div>

            <div className="content">
              <ul>
                <li>
                  <div className="airline">
                    <img src="/airlines/E5.webp" alt="air arabia" />
                    <h6>Air Arabia</h6>
                  </div>
                  <p>FZ192 (Boeing 737-200)</p>
                </li>

                <li>
                  <p>Economy</p>
                  <div className="features">
                    <i className="fa-regular fa-bowl-spoon not_available"></i>
                    <i className="fa-regular fa-tv"></i>
                    <i className="fa-regular fa-wifi not_available"></i>
                    <i className="fa-solid fa-plug"></i>
                  </div>
                </li>
              </ul>
            </div>

            <div className="title">
              <h6>DXB</h6>
              <span>King Khalid International Airport</span>
            </div>
          </div>
        </div>

        {/* layover time */}
        <div className="stop_over">
          <span>
            Layover time <b>17h 55m</b>
          </span>
        </div>

        {/* second segment */}
        <div className="segment">
          <div className="timing">
            <div className="time">
              <span>1 Jul</span> <b>01:40</b>
            </div>

            <div className="time">
              <i className="fa-regular fa-stopwatch"></i>
              <span>03h 45m</span>
            </div>

            <div className="time">
              <span>1 Jul</span> <b>05:15</b>
            </div>
          </div>

          <div className="line" />

          <div className="segment_info">
            <div className="title">
              <h6>SPX</h6>
              <span>Sphinx International Airport</span>
            </div>

            <div className="content">
              <ul>
                <li>
                  <div className="airline">
                    <img src="/airlines/XY.webp" alt="air arabia" />
                    <h6>Flynas</h6>
                  </div>
                  <p>FZ192 (Boeing 737-200)</p>
                </li>

                <li>
                  <p>Economy</p>
                  <div className="features">
                    <i className="fa-regular fa-bowl-spoon"></i>
                    <i className="fa-regular fa-tv not_available"></i>
                    <i className="fa-regular fa-wifi "></i>
                    <i className="fa-solid fa-plug"></i>
                  </div>
                </li>
              </ul>
            </div>

            <div className="title">
              <h6>DXB</h6>
              <span>King Khalid International Airport</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
