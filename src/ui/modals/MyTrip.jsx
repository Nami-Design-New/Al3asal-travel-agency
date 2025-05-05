import { useTranslation } from "react-i18next";

const TripModal = ({ trip, closeModal }) => {
  const { t } = useTranslation();

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h4>{t("profile.Details")}</h4>
          <button className="close-btn" onClick={closeModal}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-info">
            <p>
              <strong>من:</strong> {trip.from}
            </p>
            <p>
              <strong>إلى:</strong> {trip.to}
            </p>
            <p>
              <strong>وقت المغادرة:</strong> {trip.departureTime}
            </p>
            <p>
              <strong>وقت الوصول:</strong> {trip.arrivalTime}
            </p>
            <p>
              <strong>المدة:</strong> {trip.duration}
            </p>
            <p>
              <strong>التوقفات:</strong> {trip.stops}
            </p>
            <p>
              <strong>التاريخ:</strong> {trip.date}
            </p>
            <p>
              <strong>عدد الركاب:</strong> {trip.passengers}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripModal;
