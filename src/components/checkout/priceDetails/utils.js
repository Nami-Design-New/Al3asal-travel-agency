export const getPassengers = (fare) => {
  return fare?.fare_detail?.pax_fares?.reduce(
    (acc, cur) => acc + cur.number_of_pax,
    0
  );
};

export const getTotalService = (departFare, returnFare) => {
  if (
    departFare?.fare_detail?.price_info?.service_fee &&
    returnFare?.fare_detail?.price_info?.service_fee
  ) {
    return (
      Number(departFare.fare_detail.price_info.service_fee) +
      Number(returnFare.fare_detail.price_info.service_fee)
    ).toFixed(2);
  }
  return departFare?.fare_detail?.price_info?.service_fee;
};

export const getTotalPrice = (departFare, returnFare) => {
  if (
    departFare?.fare_detail?.price_info?.total_fare &&
    returnFare?.fare_detail?.price_info?.total_fare
  ) {
    return (
      Number(departFare.fare_detail.price_info.total_fare) +
      Number(returnFare.fare_detail.price_info.total_fare)
    ).toFixed(2);
  }
  return departFare?.fare_detail?.price_info?.total_fare;
};
