import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  getPassengers,
  getTotalPrice,
  getTotalService,
} from "./priceDetails/utils";
import useFlightsStore from "../../stores/flightsStore";
import BookingSummary from "./priceDetails/BookingSummary";
import TicketDetails from "./priceDetails/TicketDetails";
import FlightDetails from "../../ui/modals/FlightDetails";
import useGetSettings from "../../hooks/useGetSettings";

export default function PriceDetails() {
  const { t } = useTranslation();
  const { dapart_flight, return_flight } = useFlightsStore();
  const [showModal, setShowModal] = useState(false);
  const { data: settings } = useGetSettings();

  const departFares = dapart_flight?.fares?.[0]?.fare_info;
  const returnFares = return_flight?.fares?.[0]?.fare_info;
  const profitPercentage = settings?.profit_percentage || 0;

  const basePrice = getTotalPrice(departFares, returnFares);

  const finalPrice = (basePrice + (basePrice * profitPercentage) / 100).toFixed(
    2
  );

  return (
    <div className="price_details_container">
      <div className="about_booking">
        <div className="non_refundable">
          <h6>{t("checkoutForm.nonRefundable")}</h6>
        </div>

        <BookingSummary
          departFlight={dapart_flight}
          returnFlight={return_flight}
          passengers={getPassengers(departFares)}
          onClick={() => setShowModal(true)}
        />
      </div>

      <div className="price_details">
        {/* total price */}
        <div className="total_price">
          <h5>{t("checkoutForm.totalPrice")}</h5>
          <h5>
            {finalPrice} <span>USD</span>
          </h5>
        </div>

        <span className="line" />

        {/* departure ticket */}
        <TicketDetails
          title={t("flights.departure")}
          flight={dapart_flight}
          fares={departFares}
        />

        {/* return ticket */}
        {return_flight?.package_info && (
          <>
            <span className="line" />
            <TicketDetails
              title={t("flights.arrival")}
              flight={return_flight}
              fares={returnFares}
            />
          </>
        )}

        {/* <span className="line" /> */}

        {/* booking fee */}
        {/* <div className="total_price">
          <h6>{t("checkoutForm.bookingFee")}</h6>
          <h5>
            {getTotalService(departFares, returnFares) !== 0 ? (
              <>
                {getTotalService(departFares, returnFares)}
                <span> USD</span>
              </>
            ) : (
              <span style={{ color: "#44b50c" }}>Free</span>
            )}
          </h5>
        </div> */}
      </div>

      <FlightDetails show={showModal} setShow={setShowModal} page="checkout" />
    </div>
  );
}
