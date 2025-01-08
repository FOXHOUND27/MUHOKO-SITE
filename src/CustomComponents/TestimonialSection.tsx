import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Reviews } from "../assets/index";

export function TestimonialSection() {
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
      <div className="hidden lg:block">
        {/* Carousel Container and Styles */}
        <div className="w-[85%] h-auto p-10 bg-black mx-auto flex flex-col justify-center items-center mt-32 mb-20 rounded-[49px] shadow-2xl">
          {/* Text Div */}
          <div
            data-aos="zoom-out"
            className="flex flex-col relative mb-10 right-72 pt-5"
          >
            <h1 className=" text-5xl font-semibold text-red-600">
              Testimonials
            </h1>
            <p className="text-white text-left text-lg ml-2 font-medium">
              Don't just take our word for it - see what actual clients of our{" "}
              <br />
              services have to say about their experience.
            </p>
          </div>
          {/* Review Icon */}
          <div>
            <a href="https://g.page/r/CY8VV00xOAI3EAE/review" target="_blank">
              {" "}
              <img src={Reviews} className="rounded-lg" alt="reviews image" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
