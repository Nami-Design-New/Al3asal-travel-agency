import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useSearchStore from "../../stores/searchStore";

export default function Travelers() {
  const { t } = useTranslation();
  const { flightsFilter, updateFilter } = useSearchStore();
  const paxList = flightsFilter.pax_list;
  const travelersCount = paxList.reduce((acc, curr) => acc + curr.count, 0);

  const updateCount = (paxType, val) => {
    const updatedPaxList = paxList.map((pax) => {
      if (pax.type === paxType) {
        return {
          ...pax,
          count: Math.max(0, pax.count + val),
        };
      }
      return pax;
    });

    updateFilter({
      pax_list: updatedPaxList,
    });
  };

  const getCount = (type) => paxList.find((t) => t.type === type)?.count ?? 0;

  return (
    <Dropdown>
      <Dropdown.Toggle className="filter_btn">
        <i className="fa-light fa-user"></i>
        <p className="d-flex flex-column m-0 align-items-start">
          <span className="sm_title">{t("flights.travelers")}</span>
          <span>
            {travelersCount} {t("flights.traveler")}
          </span>
        </p>
      </Dropdown.Toggle>

      <Dropdown.Menu className="travelers_menu">
        <div className="travelers_menu_content">
          {/* Adults */}
          <div className="section">
            <h6>{t("flights.adults")}</h6>
            <div className="btns">
              <button
                type="button"
                className="btn"
                onClick={() => updateCount("ADULT", -1)}
              >
                <i className="fa-regular fa-minus"></i>
              </button>
              <div className="num">{getCount("ADULT")}</div>
              <button
                type="button"
                className="btn"
                onClick={() => updateCount("ADULT", 1)}
              >
                <i className="fa-regular fa-plus"></i>
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="section">
            <h6>
              {t("flights.children")} <strong>(2-11 years)</strong>
            </h6>
            <div className="btns">
              <button
                type="button"
                className="btn"
                onClick={() => updateCount("CHILD", -1)}
              >
                <i className="fa-regular fa-minus"></i>
              </button>
              <div className="num">{getCount("CHILD")}</div>
              <button
                type="button"
                className="btn"
                onClick={() => updateCount("CHILD", 1)}
              >
                <i className="fa-regular fa-plus"></i>
              </button>
            </div>
          </div>

          {/* Infants */}
          <div className="section">
            <h6>
              {t("flights.infants")} <strong>(under 2 years)</strong>
            </h6>
            <div className="btns">
              <button
                type="button"
                className="btn"
                onClick={() => updateCount("INFANT", -1)}
              >
                <i className="fa-regular fa-minus"></i>
              </button>
              <div className="num">{getCount("INFANT")}</div>
              <button
                type="button"
                className="btn"
                onClick={() => updateCount("INFANT", 1)}
              >
                <i className="fa-regular fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
