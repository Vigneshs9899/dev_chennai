import Lottie from "react-lottie-player";
import foxAnimation from "../assets/fox.json";

export default function FoxLottie() {
  return (
    <div className="flex justify-center lg:justify-end">
      <Lottie
        loop
        play
        animationData={foxAnimation}
        className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] h-auto animate-float"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
