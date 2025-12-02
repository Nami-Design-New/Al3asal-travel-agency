import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import FlightDetailsCard from "../cards/FlightDetailsCard";
import useFlightsStore from "../../stores/flightsStore";
import axiosInstance from "../../utils/axiosInstance";
import useSearchStore from "../../stores/searchStore";
import SubmitButton from "../forms/SubmitButton";
import useGetSettings from "../../hooks/useGetSettings";

export default function FlightDetails({ show, setShow, page }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: settings } = useGetSettings();
  const profitPercentage = settings?.profit_percentage;

  const { dapart_flight, return_flight, setFareDetails } = useFlightsStore();
  const { flightsFilter } = useSearchStore();

  const departFareKey = dapart_flight?.fares?.[0]?.fare_key;
  const returnFareKey = return_flight?.fares?.[0]?.fare_key;

  const payload = {
    pax_list: flightsFilter.pax_list,
    departure_fare_key: departFareKey,
    return_fare_key: returnFareKey,
  };

  const getTotalPrice = () => {
    const calculatePriceWithProfit = (price) => {
      if (!price || isNaN(price)) return 0;
      const profit = (Number(price) * (Number(profitPercentage) || 0)) / 100;
      return Number(price) + profit;
    };

    const departPrice =
      dapart_flight?.fares?.[0]?.fare_info?.fare_detail?.price_info
        ?.total_fare || 0;
    const departPriceWithProfit = calculatePriceWithProfit(departPrice);

    const returnPrice =
      return_flight?.fares?.[0]?.fare_info?.fare_detail?.price_info
        ?.total_fare || 0;
    const returnPriceWithProfit = return_flight
      ? calculatePriceWithProfit(returnPrice)
      : 0;

    return departPriceWithProfit + returnPriceWithProfit;
  };

  const { mutate: getFareKey, isPending } = useMutation({
    mutationFn: async () => await axiosInstance.post("/home/fare", payload),
    onSuccess: (res) => {
      if (res.data?.code === 200) {
        setFareDetails(res.data?.data);
        navigate("/checkout");
      } else {
        toast.error(res.data?.message);
      }
    },
    onError: (res) => {
      console.error(res);
      toast.error(t("getFarekeyError"));
    },
  });

  return (
    <Modal
      centered
      size="lg"
      show={show}
      className="flight_details_modal"
      onHide={() => !isPending && setShow(false)}
    >
      <Modal.Header closeButton className="header">
        <h6>{t("flights.flightDetails")}</h6>
      </Modal.Header>
      <Modal.Body>
        <div className="itinerary">
          <h6 className="title">{t("flights.itinerary")}</h6>

          <div className={`details ${page === "checkout" ? "" : "mb-5"}`}>
            <FlightDetailsCard
              type={t("flights.departure")}
              flight={dapart_flight}
            />

            {return_flight?.package_info?.package_key && (
              <FlightDetailsCard
                type={t("flights.arrival")}
                flight={return_flight}
              />
            )}
          </div>

          {page !== "checkout" && (
            <div className="price">
              <h5>
                {t("flights.totalPrice")}:
                <div>
                  {getTotalPrice().toFixed(2)} <span>USD</span>
                </div>
              </h5>

              <SubmitButton
                className="bookNow"
                event={getFareKey}
                loading={isPending}
                text={t("flights.bookNow")}
              />
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
