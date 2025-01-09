import "../CSS/Styles.css";
import {
  mekenficent,
  NUST,
  fashion,
  OTESA,
  NTTS,
  intraHealth,
  ngandu,
  Nanso,
} from "../assets/index";

import { motion } from "framer-motion";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Partners() {
  // initializing aos
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1200, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });

    // Refresh AOS to handle new elements dynamically added to the DOM
    AOS.refresh();
  }, []);

  return (
    <section className="container">
      <div className="w-full lg:w-[85%]  h-auto lg:h-[400px] hidden md:block bg-[#e5e5e5] partner-radius md:rounded-sm mx-auto my-20 shadow-2xl lg:py-0 md:py-10 sm:py-0">
        {/* Div containing title and subtitle text */}
        <div
          data-aos="zoom-out"
          className="text-center py-6 px-4 md:px-0 relative z-[2]"
        >
          <h1 className="text-base md:text-2xl font-semibold">
            Our Partners and Collaborations
          </h1>
          <p className="text-xs md:text-lg text-[#716E6F] font-medium w-[90%] md:w-auto mx-auto">
            Companies We Currently Work With and Have Partnered With in the Past
          </p>
        </div>

        {/* Desktop Div containing brands */}
        <div className="flex flex-col space-y-8 items-center px-4 md:px-0">
          {/* Row 1 container */}
          <div className="flex flex-wrap justify-center gap-4">
            <div
              data-aos="zoom-out"
              className="h-20 w-40 md:w-56 bg-white rounded-xl shadow-xl flex justify-center items-center"
            >
              <a href="https://www.nanso.org/" target="_blank">
                <motion.img
                  whileHover={{ scale: 1.5 }}
                  whileTap={{
                    scale: 0.8,
                    borderRadius: "100%",
                  }}
                  className="w-20"
                  src={Nanso}
                  alt="Nanso"
                />
              </a>
            </div>

            <div
              data-aos="zoom-out"
              className="h-20 w-40 md:w-44 bg-white rounded-xl shadow-xl flex justify-center items-center pt-2"
            >
              <a href="https://mekenificent.com/" target="_blank">
                {" "}
                <motion.img
                  whileHover={{ scale: 1.5 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  src={mekenficent}
                  alt="mekenficent"
                />
              </a>
            </div>

            <div
              data-aos="zoom-out"
              className="h-20 w-40 md:w-44 bg-white rounded-xl shadow-xl flex justify-center items-center"
            >
              <a href="https://www.nust.na/" target="_blank">
                {" "}
                <motion.img
                  whileHover={{ scale: 1.5 }}
                  whileTap={{
                    scale: 0.8,
                    borderRadius: "100%",
                  }}
                  src={NUST}
                  alt="NUST"
                />
              </a>
            </div>

            <div
              data-aos="zoom-out"
              className="h-20 w-40 md:w-56 bg-white rounded-xl shadow-xl flex justify-center items-center"
            >
              <a href="https://whkfashionweek.com/" target="_blank">
                {" "}
                <motion.img
                  whileHover={{ scale: 1.5 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  src={fashion}
                  className="w-14"
                  alt="Fashion"
                />
              </a>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-4">
            <div
              data-aos="zoom-out"
              className="h-20 w-40 md:w-56 bg-white rounded-xl shadow-xl flex justify-center items-center"
            >
              <a href="https://www.otesa.com.na/" target="_blank">
                {" "}
                <motion.img
                  whileHover={{ scale: 1.5 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  src={OTESA}
                  className="w-28 h-auto"
                  alt="Otesa"
                />
              </a>
            </div>

            <div
              data-aos="zoom-out"
              className="h-20 w-40 md:w-44 bg-white rounded-xl shadow-xl flex justify-center items-center"
            >
              <a href="https://nttsnamibia.com/" target="_blank">
                <motion.img
                  whileHover={{ scale: 1.5 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  src={NTTS}
                  className="w-16"
                  alt="NTTS"
                />
              </a>
            </div>

            <div
              data-aos="zoom-out"
              className="h-20 w-40 md:w-44 bg-white rounded-xl shadow-xl flex justify-center items-center"
            >
              <a href="https://www.intrahealthnamibia.org/ " target="_blank">
                {" "}
                <motion.img
                  whileHover={{ scale: 1.5 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  src={intraHealth}
                  className="w-32"
                  alt="IntraHealth"
                />
              </a>
            </div>

            <div
              data-aos="zoom-out"
              className="h-20 w-40 md:w-56 bg-white rounded-xl shadow-xl flex justify-center items-center"
            >
              <a href="https://nganduevents.com/" target="_blank">
                {" "}
                <motion.img
                  whileHover={{ scale: 1.5 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  src={ngandu}
                  className="w-20"
                  alt="Ngandu"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile partners section */}
      <div className=" w-full md:w-[85%] py-6 h-auto md:h-[400px] block md:hidden bg-[#e5e5e5] rounded-md  mx-auto my-20 shadow-xl relative top-20 z-[-2]">
        {/* Div containing titlt and subtitle text */}
        <div className="md:text-center text-center py-6 md:px-0">
          <h1 className=" text-xl px-2 text-center font-semibold">
            Our Partners and Collaborations
          </h1>
          <p className="md:text-lg text-xs md:w-auto w-[80%] text-[#716E6F] font-medium md:mx-0 mx-auto">
            Companies We Currently Work With and Have Partnered With in the Past{" "}
          </p>
        </div>
        {/* Div for brands */}

        <div className="flex justify-center">
          {/*Brands Mobile Column */}
          <div className="flex space-y-4 flex-col">
            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <a href="https://www.nanso.org/" target="_blank">
                <img src={Nanso} className="w-16" alt="Nanso" />
              </a>
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center pt-2">
              <a href="https://mekenificent.com/" target="_blank">
                {" "}
                <img src={mekenficent} alt="mekenficent" />
              </a>
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <a href="https://www.nust.na/" target="_blank">
                {" "}
                <img src={NUST} alt="NUST" />
              </a>
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <a href="https://whkfashionweek.com/" target="_blank">
                {" "}
                <img src={fashion} className="w-14" alt="Fashion" />
              </a>
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <a href="https://www.otesa.com.na/" target="_blank">
                <img src={OTESA} className="w-28 h-20" alt="Otesa" />
              </a>
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <a href="https://nttsnamibia.com/" target="_blank">
                {" "}
                <img src={NTTS} className="w-16" alt="NTTS" />
              </a>
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <a href="https://www.intrahealthnamibia.org/" target="_blank">
                {" "}
                <img src={intraHealth} className="w-32" alt="intrahealth" />
              </a>
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <a href="https://nganduevents.com/" target="_blank">
                {" "}
                <img src={ngandu} className="w-20" alt="Ngandu" />
              </a>
            </div>
          </div>
        </div>
        {/* End of mobile brands column */}
      </div>
    </section>
  );
}

export default Partners;
