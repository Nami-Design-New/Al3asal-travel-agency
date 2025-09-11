export default function FareBreakdown({ fares }) {
  return (
    <>
      {fares?.fare_detail?.pax_fares?.map((pax) => (
        <div className="price" key={pax.pax_type}>
          <h6>
            {pax.number_of_pax}{" "}
            {pax.pax_type.charAt(0) + pax.pax_type.slice(1).toLowerCase()}
            {pax.number_of_pax > 1 ? "s" : ""}, Economy
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
        <h6>Total Tax</h6>
        <h5>
          {fares?.fare_detail?.pax_fares
            ?.reduce((acc, pax) => acc + pax.price_info.tax, 0)
            .toFixed(2)}{" "}
          <span>{fares?.fare_detail?.pax_fares?.[0]?.currency_code}</span>
        </h5>
      </div>

      <div className="price">
        <h6>Total Price</h6>
        <h5>
          {fares?.fare_detail?.price_info?.total_fare} <span>USD</span>
        </h5>
      </div>
    </>
  );
}
