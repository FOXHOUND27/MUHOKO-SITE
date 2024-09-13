import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function TestimonialSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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
      <div className="hidden md:block">
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

          {/* ShadCn carousel UI component */}
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-sm mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            {/* Carousel Content */}
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                // Carousel Item
                <CarouselItem key={index}>
                  <div className="p-1">
                    {/* Carousel Card */}
                    <Card className=" bg-[#383938] border-none shad">
                      {/* Carousel Content */}
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold text-white">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Carousel Arrows */}
            <CarouselPrevious className=" text-white p-2 w-10 bg-muhoko-gradient hover:text-[#ED2330]" />
            <CarouselNext className=" text-white w-10 p-2 bg-muhoko-gradient hover:text-[#ED2330]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
