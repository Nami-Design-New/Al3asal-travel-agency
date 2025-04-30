import { useTranslation } from "react-i18next";

export default function TicketDuration({ flight }) {
    const { t } = useTranslation();
  return (
    <div className="duration">
      <div className="content">
        <h6>
          <i className="fa-light fa-clock"></i> {flight?.duration}
        </h6>
        {flight?.stops?.length === 0 && <span>{t("flights.direct")}</span>}
        {flight?.stops?.length === 1 && (
          <span className="warning">
            {flight?.stops[0]?.duration} {t("flights.in")}{" "}
            {flight?.stops[0]?.code}
          </span>
        )}
        {flight?.stops?.length > 1 && (
          <span className="warning">
            {flight?.stops?.length} {t("flights.stops")} {t("flights.in")}{" "}
            {flight?.stops?.map((s) => s.code).join(", ")}
          </span>
        )}
      </div>
    </div>
  );
}
