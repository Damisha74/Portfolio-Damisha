import { bannerImg } from "../assets";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[400px] lgl:h-[500px] z-10" 
        src={bannerImg}
        alt="bannerImg"
      />
      
    </FadeIn>
  );
};

export default RightBanner;
