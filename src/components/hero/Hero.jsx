import React from "react";
import hero from "../../assets/Video.png";
import soch_1 from "../../assets/Combined Shape.png";

function Hero() {
  return (
    <div ClassName="hero">
      <div className="container flex items-center flex-col relative">
        <div className="soch_1 absolute top-[480px] left-[-50px] z-[-2] max-[1150px]:left-0 max-[960px]:top-[150px] max-[710px]:hidden">
            <img className="" src={soch_1} alt="" />
        </div>
        <div className="hero_desc flex flex-col text-center my-[80px] mx-auto items-center gap-7">
          <h1 className="text-[50px] text-white max-[960px]:text-[30px] font-bold">
            Landing template for startups
          </h1>
          <p className="text-[#949CA6] max-[960px]:text-[15px] text-[18px]">
          Our landing page template works on all devices, so you only have to <br />
          set it up once, and get beautiful results forever.
          </p>
          <div className="buttons flex gap-[20px]">
            <button className="px-4.5 py-2.5 bg-[#6661F5] text-white max-[960px]:px-2.5 max-[960px]:py-[5px]">
              Start free trial
            </button>
            <button className="px-4.5 py-2.5 bg-[#34363A] text-white max-[960px]:px-2.5 max-[960px]:py-[5px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex items-center mb-14">
          <img className="w-[100%]" src={hero} alt="" />
        </div>
        <div className="flex items-center flex-col text-center mt-[80px] max-[890px]:mt-0">
            <h1 className="text-[40px] text-white pb-6 font-bold max-[960px]:text-[30px] max-[580px]:text-[25px]">The majority our customers do not <br /> understand their workflows.</h1>
            <p className="text-[#949CA6] text-[18px] max-[960px]:text-[15px]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
