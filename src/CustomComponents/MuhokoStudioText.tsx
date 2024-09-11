import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MuhokoStudioText() {
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
      {" "}
      {/* Text Div */}
      <div className="flex flex-col items-center my-10 font-semibold">
        <h2
          data-aos="zoom-out"
          className="text-2xl md:text-5xl text-black py-1 font-semibold md:py-2"
        >
          About Muhoko Studio
        </h2>

        <p
          data-aos="zoom-out"
          className="text-black w-[80%] text-justify md:text-center text-xs md:text-base"
        >
          Muhoko Studio is a division of Muhoko that is dedicated to bringing
          quality game-making, creative graphical representations such as
          animations, sounds, and phenomenal entertainment to consumers
          throughout Namibia. The studio is a Namibian diversified multinational
          mass gaming and entertainment conglomerate, headquartered in Windhoek,
          Namibia.
        </p>
      </div>
      {/*Cards Div  */}
      <div></div>
    </section>
  );
}

export default MuhokoStudioText;
