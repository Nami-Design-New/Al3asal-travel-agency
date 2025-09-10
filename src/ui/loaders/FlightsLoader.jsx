import { useLottie } from "lottie-react";
import loading from "../../assets/lotties/travel.json";

export default function FlightsLoader() {
  const defaultOptions = {
    animationData: loading,
    loop: true,
    width: 300,
    height: 300,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <div className="w-100 d-flex flex-column align-items-center justify-content-center">
      {View}
      <h6>Loading flights...</h6>
    </div>
  );
}
