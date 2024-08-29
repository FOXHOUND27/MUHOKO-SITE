import "../CSS/Styles.css";
import {
  fudlink,
  mekenficent,
  NUST,
  fashion,
  OTESA,
  NTTS,
  intraHealth,
  gerApp,
} from "../assets/index";

function Partners() {
  return (
    <section className="container">
      <div className=" w-full md:w-[85%] h-[300px] md:h-[400px] hidden md:block bg-[#e5e5e5] partner-radius mx-auto my-20 shadow-xl">
        {/* Div containing titlt and subtitle text */}
        <div className="md:text-center text-center py-6 md:px-0">
          <h1 className="md:text-2xl text-xs font-semibold">
            Our Partners and Collaborations
          </h1>
          <p className="md:text-lg text-xs md:w-auto w-[80%] text-[#716E6F] font-medium md:mx-0 mx-auto">
            Companies We Currently Work With and Have Partnered With in the Past{" "}
          </p>
        </div>

        {/* Div containing brands */}
        <div className="flex items-center flex-col space-y-8">
          {/* row 1 container */}

          <div className="flex space-x-4">
            <div className="h-20 w-56 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <img src={fudlink} alt="fudlink" />
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center pt-2">
              <img src={mekenficent} alt="mekenficent" />
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <img src={NUST} alt="NUST" />
            </div>

            <div className="h-20 w-56 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <img src={fashion} className="w-14" alt="Fashion" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex space-x-4">
            <div className="h-20 w-56 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <img src={OTESA} className="w-28 h-20" alt="Otesa" />
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <img src={NTTS} className="w-16" alt="NTTS" />
            </div>

            <div className="h-20 w-44 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <img src={intraHealth} className="w-32" alt="NUST" />
            </div>

            <div className="h-20 w-56 bg-white rounded-xl shadow-xl flex justify-center items-center">
              <img src={gerApp} className="w-44" alt="gerApp" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile partners section */}
      <div className=" w-full md:w-[85%] h-[300px] md:h-[400px] block md:hidden bg-[#e5e5e5]  mx-auto my-20 shadow-xl relative top-20">
        {/* Div containing titlt and subtitle text */}
        <div className="md:text-center text-center py-6 md:px-0">
          <h1 className="md:text-2xl text-xs font-semibold">
            Our Partners and Collaborations
          </h1>
          <p className="md:text-lg text-xs md:w-auto w-[80%] text-[#716E6F] font-medium md:mx-0 mx-auto">
            Companies We Currently Work With and Have Partnered With in the Past{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Partners;
