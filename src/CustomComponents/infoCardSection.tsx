import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function InfoCardSection() {
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
    <section className=" py-5">
      {/* Div to hide on small screens */}
      <div className="hidden md:block">
        <div className="w-[80%] h-auto relative flex justify-center items-center flex-row-reverse left-[95px] ">
          {/* Info Text */}
          <div data-aos="zoom-out" className="mx-10">
            <h1 className="text-4xl w-[400px] text-left font-semibold">
              Leading the Future of Technology in Africa
            </h1>
            <p className="w-[400px] text-left text-base font-medium my-2">
              Muhoko Innovation Studio is a pioneering technology company based
              in Namibia, dedicated to delivering cutting-edge AI and futuristic
              technology solutions. With a mission to provide quality technology
              services tailored to the unique needs of each client
            </p>
            <button className=" bg-muhoko-gradient text-white px-10 py-2 rounded-lg mt-1">
              Learn More
            </button>
          </div>
          {/* img/video div */}
          <div className="relative">
            <div className="w-[500px] h-[400px] flex justify-center items-center">
              <div data-aos="zoom-out" className="z-10">
                <iframe
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/sDqz6_0a924?si=95A3xfO1hpfcWfEI&amp;controls=0&amp;start=7&mute=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="z-10 rounded-xl"
                ></iframe>
              </div>
              {/* Square behind video and styling */}
              <div
                data-aos="zoom-out"
                className=" w-[450px] h-[310px] shadow-2xl bg-muhoko-gradient absolute z-[5] top-[70px] right-[50px] rounded-xl"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version of section */}
      <div className="w-[85%] py-6 h-auto md:h-[400px] block md:hidden bg-[#e5e5e5]  mx-auto shadow-xl relative ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl w-[400px] text-center font-semibold">
            Leading the Future of Technology in Africa
          </h1>
          <p className="w-[80%] text-center text-sm font-medium my-2 mx-auto">
            Muhoko Innovation Studio is a pioneering technology company based in
            Namibia, dedicated to delivering cutting-edge AI and futuristic
            technology solutions. With a mission to provide quality technology
            services tailored to the unique needs of each client
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoCardSection;
