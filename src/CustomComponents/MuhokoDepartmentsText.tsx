import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MuhokoDepartmentsText() {
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
    <>
      <section>
        <div className="flex flex-col items-center my-10 font-semibold space-y-1 md:space-y-2">
          <h2 data-aos="zoom-out" className="text-2xl md:text-5xl text-black">
            Muhoko Departments
          </h2>
          <p data-aos="zoom-out" className="text-sm md:text-base">
            GET TO KNOW OUR COMPANY DEPARTMENTS !
          </p>
          <p
            data-aos="zoom-out"
            className="text-black w-[80%] text-center text-sm md:text-base"
          >
            Each department within Muhoko functions as a separate entity, with
            its own specific goals, responsibilities, and areas of expertise.
            Each department also works independently to achieve its goals but
            also collaborates to support the overall vision and mission of the
            company.
          </p>
        </div>
      </section>
    </>
  );
}

export default MuhokoDepartmentsText;
