import { useTranslation } from "react-i18next";

export default function FareBreakdown({ fares }) {
  const { t } = useTranslation();

  const typeLabelMap = {
    ADULT: t("flights.adult"),
    CHILD: t("flights.child"),
    INFANT: t("flights.infant"),
  };
  return (
    <>
      {fares?.fare_detail?.pax_fares?.map((pax) => (
        <div className="price" key={pax.pax_type}>
          <h6>
            {pax.number_of_pax} {typeLabelMap[pax.pax_type] || pax.pax_type}
            , {t("flights.economy")}
            <span>
              {pax.number_of_pax} x{" "}
              {(pax.price_info.base_fare / pax.number_of_pax).toFixed(2)}{" "}
              {pax.currency_code}
            </span>
          </h6>
          <h5>
            {pax.price_info.base_fare.toFixed(2)}{" "}
            <span>{pax.currency_code}</span>
          </h5>
        </div>
      ))}

      <div className="price">
        <h6>{t("checkoutForm.totaltax")}</h6>
        <h5>
          {fares?.fare_detail?.pax_fares
            ?.reduce((acc, pax) => acc + pax.price_info.tax, 0)
            .toFixed(2)}{" "}
          <span>{fares?.fare_detail?.pax_fares?.[0]?.currency_code}</span>
        </h5>
      </div>

      <div className="price">
        <h6>{t("checkoutForm.totalPrice")}</h6>
        <h5>
          {fares?.fare_detail?.price_info?.total_fare} <span>{t("receipt.currency")}</span>
        </h5>
      </div>
    </>
  );
}
