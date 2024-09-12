import "../CSS/Styles.css";
import IconCloud from "@/components/magicui/icon-cloud";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function TechnologySection() {
  // Icon cloud Icons array
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

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
      {/* Main Content Container Div with styles */}
      <div className="hidden md:block">
        <div className="w-[95%] h-[476px] bg-muhoko-gradient technology-radius mt-20 mb-10 mx-auto flex justify-center items-center space-x-10 shadow-2xl">
          {/* Div for text */}
          <div data-aos="zoom-out" className="space-y-2 mt-10">
            <h1 className="w-[500px] text-white text-3xl text-left font-semibold">
              We make use of the most innovative technologies to provide our
              clients the highest of quality services{" "}
            </h1>
            <p className="w-[500px] text-white text-lg">
              Delivering exceptional quality services with cutting-edge
              technologies, ensuring unparalleled client satisfaction through
              innovative solutions and expertise
            </p>

            <Link to="/contact">
              {" "}
              <button className="bg-black mt-2 md:mt-5 text-white py-2 px-5 rounded-lg hover:bg-white hover:text-black  transition-all duration-500">
                Enquire about our Services
              </button>
            </Link>
          </div>

          {/* Iconcloud Div  */}
          <div
            data-aos="zoom-out"
            className="relative flex h-full w-full max-w-[32rem] items-center justify-center pb-16 pt-5 pl-20 overflow-hidden  "
          >
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>

      {/* Mobile version of Technology Section */}

      <div className="w-[85%] py-5 h-auto md:h-[400px] block md:hidden bg-[#e5e5e5]  mx-auto shadow-2xl relative  mt-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl w-[90%] text-center font-semibold">
            We make use of the most innovative technologies to provide our
            clients the highest of quality services
          </h1>
          <p className="w-[80%] text-center text-sm font-medium my-2 mx-auto">
            Delivering exceptional quality services with cutting-edge
            technologies, ensuring unparalleled client satisfaction through
            innovative solutions and expertise
          </p>
          <button className="bg-black text-white py-2 px-5 rounded-lg hover:bg-white hover:text-black  transition-all duration-500">
            Enquire about our Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
