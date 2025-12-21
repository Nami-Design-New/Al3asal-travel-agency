// src/utils/getFinalPrice.js

export const getFinalPrice = (flight, profitPercentage = 0) => {
  const fare = flight?.fares?.[0]?.fare_info?.fare_detail;
  const totalPrice = fare?.price_info?.total_fare || 0;

  return (
    Number(totalPrice) +
    (Number(totalPrice) * Number(profitPercentage)) / 100
  );
};
