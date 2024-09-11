import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function MuhokoStudioText (){
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
        <h2 className="text-2xl md:text-5xl text-black py-1 font-semibold md:py-2">
          About Muhoko Studio
        </h2>

        <p className="text-black w-[80%] text-justify md:text-center text-xs md:text-base">
        The company believes that by taking time to understand each client’s business and operations, it can build a level of trust and understanding that
        will allow it to deliver the highest quality  technology services. We exclusively concentrate on custom software and game development and the
        management and collection data using various techniques that best suite stakeholder’s requirements.

        The company’s main focus is to provide innovative and next generation solutions for the digital needs  of Namibia’s social and commercial 
        landscape. To achieve  this, Muhoko has a team   of experiences IT professionals with more then 10 years of combined IT experience, both in
        fixed and part-time positions. They are committed to creating sustainable results for their clients. 
        </p>
      </div>
      {/*Cards Div  */}
      <div></div>
    </section>
    );
}

export default MuhokoStudioText;