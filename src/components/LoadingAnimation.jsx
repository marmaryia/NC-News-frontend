import Lottie from "lottie-react";
import Loading from "../visuals/LoadingAnimation.json";

export default function LoadingAnimation() {
  return (
    <Lottie
      animationData={Loading}
      loop={true}
      style={{ justifySelf: "center" }}
    />
  );
}
