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
  const depart = Number(departFare?.fare_detail?.price_info?.total_fare) || 0;
  const ret = Number(returnFare?.fare_detail?.price_info?.total_fare) || 0;
  return depart + ret;
};
