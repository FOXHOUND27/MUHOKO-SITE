import "../CSS/Styles.css";
import {
  websites,
  gamDev,
  character,
  development,
  mainCharacter,
} from "../assets/index";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SolutionSection() {
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
    <section className="my-52 flex justify-center items-center container flex-col">
      <div className="bg-[#e5e5e5] md:w-[83%] md:h-[920px] hidden md:block  solutions-radius shadow-2xl relative">
        {/* Div for Solutionts text and Image */}
        <div className="">
          {/* Character Image */}
          <img
            src={mainCharacter}
            className="absolute top-[-150px] left-20"
            alt="Main chatacter"
          />

          {/* Text for the solutions section */}
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center mt-20 absolute right-16"
          >
            <h1 className="text-5xl font-semibold">Solutions</h1>
            <p className="w-[430px] text-center font-medium">
              We deliver cutting-edge custom software development, immersive
              game development, dynamic web development, and a full spectrum of
              IT solutions and services tailored to meet the unique needs of our
              clients.{" "}
            </p>
          </div>
        </div>

        <div className=" flex flex-col space-y-10 mt-80 relative left-32">
          {/* Row 1 Cards */}
          <div className="flex space-x-10">
            {/* Card 1 */}
            <div className="w-[400px] h-[200px] bg-muhoko-gradient rounded-lg shadow-2xl flex flex-col justify-center items-center p-5">
              <img src={websites} className="w-[52px]" alt="websites icon" />

              <h1 className="text-white text-lg my-1">Web Development</h1>

              <p className="text-white text-center">
                We specialize in creating custom websites that are visually
                appealing, highly functional, and optimized for performance.
              </p>
            </div>
            {/* Card 2 */}
            <div className="w-[400px] h-[200px] bg-muhoko-gradient  rounded-lg shadow-2xl flex flex-col justify-center items-center p-5">
              <img
                src={development}
                className="w-[52px]"
                alt="development icon"
              />

              <h1 className="text-white text-lg my-1">
                Software & App Development
              </h1>

              <p className="text-white text-center">
                We specialize in creating custom software applications and
                mobile apps that are intuitive, scalable, and secure
              </p>
            </div>
          </div>

          {/* Row 2 Cards */}
          <div className="flex space-x-10">
            <div className="w-[400px] h-[200px] bg-muhoko-gradient  rounded-lg shadow-2xl flex flex-col justify-center items-center p-5">
              {" "}
              <img src={gamDev} className="w-[52px]" alt="game dev icon" />
              <h1 className="text-white text-lg my-1">Game Development</h1>
              <p className="text-white text-center">
                We specialize in creating high-quality video games that
                captivate players of all ages. From concept design and level
                creation to game mechanics and more.
              </p>
            </div>
            <div className="w-[400px] h-[200px] bg-muhoko-gradient  rounded-lg shadow-2xl flex flex-col justify-center items-center p-5">
              {" "}
              <img
                src={character}
                className="w-[52px]"
                alt="character dev icon"
              />
              <h1 className="text-white text-lg my-1">Character Development</h1>
              <p className="text-white text-center">
                We specialize in crafting custom character designs that are
                visually stunning, meticulously detailed, and optimized for
                performance across various platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
