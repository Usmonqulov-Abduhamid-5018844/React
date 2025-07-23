import React from "react";
import { CARD, CLIENT } from "../../static/index";
import collaction_1 from "../../assets/Illustration.png";
import collaction_2 from "../../assets/Illustration (1).png";
import collaction_3 from "../../assets/Illustration (2).png";
import Ok from "../../assets/Ok.svg";
import Soch from "../../assets/soch_3.png";

function Main() {
  return (
    <main className="main mt-[80px]">
      <section className="main">
        <div className="container flex gap-[50px] flex-wrap justify-between border-b-2 border-[#34363A] pb-[80px] max-[1106px]:justify-around max-[1106px]:gap-[30px]">
          {CARD?.map((item, index) => (
            <div
              key={index}
              className=" card flex gap-6 p-2.5 flex-col w-[325px] text-center items-center max-[710px]:w-[100%]"
            >
              <div className="imag">
                <img
                  className="max-[710px]:w-[120px] max-[500px]:w-[80px]"
                  src={item.img}
                  alt=""
                />
              </div>
              <span className="text-white text-2xl font-bold max-[710px]:text-[32px] max-[500px]:text-[25px]">
                {item.span}
              </span>
              <p className="text-[#949CA6] max-[710px]:text-[20px] max-[500px]:text-[14px]">
                {item.p}
              </p>
            </div>
          ))}
        </div>

        <div className="container flex justify-center mt-[100px]">
          <div className="desc flex gap-7 flex-col text-center items-center">
            <button className="px-4 py-2 font-bold rounded-3xl bg-[#D3F4D8] text-[#609F6E] border-none  max-[900px]:text-[14px]">
              Reach goals that matter
            </button>
            <span className="text-white text-[40px] font-bold max-[900px]:text-[30px]">
              One product, unlimited solutions
            </span>
            <p className="text-[#949CA6]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia <br />
              deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>
        </div>
      </section>

      <section className="main__collaction mt-[130px]">
        <div className="container flex  justify-between mb-[100px] max-[1100px]:flex-col max-[1100px]:items-center">
          <div className=" w-[500px] flex flex-col gap-[20px] my-auto max-[1100px]:mb-12 max-[1100px]:w-auto">
            <p className="text-[#6560F3]">More speed. Less spend</p>
            <span className="text-white text-3xl">
              Keep projects on schedule
            </span>
            <p className="text-[#949CA6]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[#949CA6]">
              <img className="inline pr-1.5" src={Ok} alt="" />
              Duis aute irure dolor in reprehenderit
            </p>
            <p className="text-[#949CA6]">
              <img className="inline pr-1.5" src={Ok} alt="" /> Excepteur sint
              occaecat{" "}
            </p>
            <p className="text-[#949CA6]">
              <img className="inline pr-1.5" src={Ok} alt="" /> Amet consectetur
              adipiscing elit
            </p>
          </div>
          <div className="">
            <img className="max-[1100px]:w-[900px]" src={collaction_1} alt="" />
          </div>
        </div>
        <div className="container flex flex-row-reverse justify-between mb-[100px] max-[1100px]:flex-col max-[1100px]:items-center">
          <div className=" w-[500px] flex flex-col gap-[20px] my-auto max-[1100px]:mb-12 max-[1100px]:w-auto">
            <p className="text-[#6560F3]">More speed. Less spend</p>
            <span className="text-white text-3xl">
              Keep projects on schedule
            </span>
            <p className="text-[#949CA6]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[#949CA6]">
              <img className="inline pr-1.5" src={Ok} alt="" />
              Duis aute irure dolor in reprehenderit
            </p>
            <p className="text-[#949CA6]">
              <img className="inline pr-1.5" src={Ok} alt="" /> Excepteur sint
              occaecat{" "}
            </p>
            <p className="text-[#949CA6]">
              <img className="inline pr-1.5" src={Ok} alt="" /> Amet consectetur
              adipiscing elit
            </p>
          </div>
          <div className="max-[1100px]:w-">
            <img className="max-[1100px]:w-[900px]" src={collaction_2} alt="" />
          </div>
        </div>
        <div className="container flex justify-between pb-[100px] border-b-2 border-[#34363A] max-[1100px]:flex-col max-[1100px]:items-center">
          <div className=" w-[500px] flex flex-col gap-[20px] my-auto max-[1100px]:mb-12 max-[1100px]:w-auto ">
            <p className="text-[#6560F3]">More speed. Less spend</p>
            <span className="text-white text-3xl">
              Keep projects on schedule
            </span>
            <p className="text-[#949CA6]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[#949CA6]">
              <img className="inline pr-1.5" src={Ok} alt="" />
              Duis aute irure dolor in reprehenderit
            </p>
            <p className="text-[#949CA6]">
              <img className="inline pr-1.5" src={Ok} alt="" /> Excepteur sint
              occaecat{" "}
            </p>
            <p className="text-[#949CA6]">
              <img className="inline pr-1.5" src={Ok} alt="" /> Amet consectetur
              adipiscing elit
            </p>
          </div>
          <div className="">
            <img className="max-[1100px]:w-[900px]" src={collaction_3} alt="" />
          </div>
        </div>
      </section>

      <section className="clients mt-20">
        <div className="container main_title flex text-center flex-col gap-5 mb-14">
          <span className="font-bold text-[40px] text-white max-[570px]:text-[26px]">
            Don't take our word for it
          </span>
          <p className="text-[#949CA6] text-[18px] max-[570px]:text-[16px]">
            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
            semper quis lectus <br /> nulla at volutpat diam ut venenatis
            tellus—in ornare.
          </p>
        </div>
        <div
          className="container flex justify-between gap-5 max-[1130px]:flex-wrap max-[1130px]:justify-center  max-[1130px]:gap-8"
        >
          {CLIENT?.map((item, index) => (
            <div className="cards w-[352px] bg-[#26282C] p-[20px] max-[768px]:w-auto
            ">
              <div key={index} className="img pb-4">
                <img src={item.img} alt="" />
              </div>
              <p className="text-[#949CA6] pb-[35px] border-b-2 border-[#34363A]">
                {item.p_1}
              </p>
              <div className="card_end flex pt-5">
                <p className="text-[#949CA6]">{item.p_2}</p>
                <p className="text-[#6560F3]">{item.p_3}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
          <div className="container relative bg-[#6661F5] p-19 gap-4 flex items-center px-[30px] max-[810px]:flex-col max-[810px]:gap-y-7">
            <div className="dec flex flex-1 flex-col gap-4">
            <span className="text-[32px] text-white font-bold">Stay in the loop</span>
            <p className="text-white">Join our newsletter to get top news before anyone else.</p>
            </div>
            <div className="input h-[35px] flex gap-3 px-2">
                <input className="w-[320px] h-[48px] bg-[#524DC7] text-[#dfe6f0] indent-5 border-[1px] border-[#AEACF9] max-[515px]:w-[250px] max-[515px]:h-[40px] ml-[20px]" type="text" placeholder="Your best email…" name="" id="" />
                <button className="w-[139px] h-[48px] bg-white text-[#6661F5] font-bold max-[515px]:w-[110px] max-[515px]:h-[40px]">Subscribe</button>"
            </div>
            <img className="absolute top-[4px] right-[20px]" src={Soch} alt="" />
          </div>
      </section>
    </main>
  );
}

export default Main;
