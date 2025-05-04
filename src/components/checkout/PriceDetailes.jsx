import { useState } from "react";
import { useTranslation } from "react-i18next";
import FlightDetails from "./../../ui/modals/FlightDetails";

export default function PriceDetailes() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="price_details_container">
      <div className="about_booking">
        <div className="non_refundable">
          <h6>{t("checkoutForm.nonRefundable")}</h6>
        </div>

        <button onClick={() => setShowModal(true)}>
          <div>
            <h6>
              Giza (SPX) <i className="fa-light fa-arrow-right-arrow-left"></i>
              Riyadh (RUH)
            </h6>

            <span>Tue, 15 Jul - Fri, 22 Aug · 2 passengers</span>
          </div>
          <i className="fa-regular fa-chevron-right"></i>
        </button>
      </div>

      <div className="price_details">
        <div className="total_price">
          <h5>{t("checkoutForm.totalPrice")}</h5>
          <h5>
            26,191.01 <span>EGP</span>
          </h5>
        </div>

        <span className="line" />

        <div className="ticket_details">
          <div className="flight">
            <div className="path">
              <h6>{t("flights.departure")}</h6>
              <h5>
                SPX <i className="fa-regular fa-arrow-right-long"></i> RUH
              </h5>
            </div>
            <div className="airlines">
              <div className="img">
                <img src="/airlines/E5.webp" alt="" />
              </div>
              <div className="img">
                <img src="/airlines/XY.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="price">
            <h6>
              2 Adults, Economy
              <span>2 x 1,740.53 EGP</span>
            </h6>

            <h5>
              3,481.07 <span>EGP</span>
            </h5>
          </div>

          <div className="price">
            <h6>{t("checkoutForm.totaltax")}</h6>

            <h5>
              5,481.05 <span>EGP</span>
            </h5>
          </div>
        </div>

        <span className="line" />

        <div className="ticket_details">
          <div className="flight">
            <div className="path">
              <h6>{t("flights.departure")}</h6>
              <h5>
                SPX <i className="fa-regular fa-arrow-right-long"></i> RUH
              </h5>
            </div>
            <div className="airlines">
              <div className="img">
                <img src="/airlines/E5.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="price">
            <h6>
              2 Adults, Economy
              <span>2 x 1,740.53 EGP</span>
            </h6>

            <h5>
              3,481.07 <span>EGP</span>
            </h5>
          </div>

          <div className="price">
            <h6>{t("checkoutForm.totaltax")}</h6>

            <h5>
              5,481.05 <span>EGP</span>
            </h5>
          </div>
        </div>

        <span className="line" />

        <div className="total_price">
          <h6>{t("checkoutForm.bookingFee")}</h6>
          <h5>
            284.21 <span>EGP</span>
          </h5>
        </div>
      </div>
      <FlightDetails show={showModal} setShow={setShowModal} />
    </div>
  );
}
