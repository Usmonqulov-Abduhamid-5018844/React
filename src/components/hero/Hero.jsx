import React from "react";
import hero from "../../assets/Video.png";
import soch_1 from "../../assets/Combined Shape.png";

function Hero() {
  return (
    <div ClassName="hero">
      <div className="container flex items-center flex-col relative">
        <div className="soch_1 absolute top-[480px] left-[-50px] z-[-2]">
            <img src={soch_1} alt="" />
        </div>
        <div className="hero_desc flex flex-col text-center my-[80px] mx-auto w-[768px] items-center gap-7">
          <h1 className="text-[50px] text-white">
            Landing template for startups
          </h1>
          <p className="text-[#949CA6]">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.lorem tiful
            results forever.lorem tiful results forever.lorem
          </p>
          <div className="buttons flex gap-[20px] pr-[60px]">
            <button className="px-4.5 py-2.5 bg-[#6661F5] text-white">
              Start free trial
            </button>
            <button className="px-4.5 py-2.5 bg-[#34363A] text-white">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex items-center mb-14">
          <img className="w-[100%]" src={hero} alt="" />
        </div>
        <div className="flex items-center flex-col w-[768px] text-center mt-[80px]">
            <h1 className="text-[40px] text-white pb-6">The majority our customers do not understand their workflows.</h1>
            <p className="text-[#949CA6]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
