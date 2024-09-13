import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutDescriptionSection() {
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
    <section>
      {/* Main Title Text Div */}
      <div className="text-center my-5 ">
        <h1 data-aos="zoom-out" className="text-5xl my-2 font-semibold">
          About Us{" "}
        </h1>
      </div>
      {/* Main Paragraph */}
      <div className="text-center flex w-full justify-center items-center">
        {/* Desktop Description */}
        <p
          data-aos="zoom-out"
          className="w-[90%] text-lg leading-normal text-justify hidden md:block"
        >
          Muhoko Innovation Studio is a multidisciplinary internet company that
          caters to becoming one of the best and leading technology companies in
          Africa, providing Artificial Intelligence (AI) and futuristic
          technology. Muhoko is a leading technology company in Namibia that
          uses advanced scientific strategies, innovation, and simplified
          efficiency to build environmental needs and solutions to everyday
          challenges. Using industry accepted tools ,methodologies, and best
          practices across various industries and disciplines We are a company
          that values the passion and commitment of its clients and employees.
          the company encourages fresh ideas, constructive criticism , and input
          from all members to achieve better outcomes. The companies goal is to
          unlock the potential of every industry in Namibia’s market by
          investing and developing a central, interconnected community of
          innovators, idealists, and entrepreneurs. This is accomplished through
          its four main departments :Education ,Studio, Society, and Technology.
          This departments work together to offer innovative solutions and
          services to our clients respectfully , and to create a platform for
          for the growth and development of local entrepreneurs and innovator's
        </p>
        {/* Mobile version of about text */}
        <p className="block md:hidden w-[85%] leading-relaxed text-justify">
          Muhoko Innovation Studio is a multidisciplinary internet company that
          caters to becoming one of the best and leading technology companies in
          Africa, providing Artificial Intelligence (AI) and futuristic
          technology. Muhoko is a leading technology company in Namibia that
          uses advanced scientific strategies, innovation, and simplified
          efficiency to build environmental needs and solutions to everyday
          challenges.
        </p>
      </div>
    </section>
  );
}

export default AboutDescriptionSection;
