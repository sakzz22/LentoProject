import React from "react";
import banner from "../../public/banner.jpeg"

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white">
              Solar Power Inverter Manufacturer
            </h1>
            <h1 className="text-4xl font-bold text-white">
              How do we help you?
            </h1>
            <h1 className="text-4xl font-bold  text-white ">
              What We Manufacture
              <span className="text-blue-400">- About Us</span>
            </h1>
            <p className="text-white text-xl p-2">
              Lento is driven by research and development but with a difference.
              Here at Lento the focus is on harnessing power of R&D to develop
              innovative, future-proof products that are aligned with markets
              and requirements of end users. A group of young technocrats with
              this common ideology got together and thus was born Lento, a
              company specializing in Power Electronics & Energy Efficiency.
              Today Lento has come a long way from its modest beginnings and our
              R&D powers manufacturing of advance technologies base product that
              includes Inverters, Online UPS & static UPS, Automatic Lift Backup
              System, (ALBS), Solar Power Equipments, LED lights and BLDC motor
              application-based products.
            </p>
            <label className="input input-bordered mt-5 flex items-center gap-5 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary p-4 m-3 mt-8">Send Button</button>
        </div>
        <div className="w-full order-1 md:w-1/2 flex justify-center items-center"> 
        <img src={banner} className="h-120 w-80 top-100 object-cover" alt="" />
        <p></p>
        </div>
      </div>
    </>
  );
}

export default Banner;
