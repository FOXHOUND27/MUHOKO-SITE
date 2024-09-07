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

export function TestimonialSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section>
      <div className="hidden md:block">
        {/* Carousel Container and Styles */}
        <div className="w-[85%] h-auto p-10 bg-muhoko-gradient mx-auto flex flex-col justify-center items-center mt-32 mb-10 rounded-[49px] shadow-2xl">
          {/* Text Div */}
          <div className="flex flex-col relative mb-10 right-72 pt-5">
            <h1 className="text-white text-5xl">Testimonials</h1>
            <p className="text-white text-left text-lg ml-2">
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
                    <Card className=" bg-[#383938] border-none">
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
            <CarouselPrevious className=" text-white p-2 w-10 bg-muhoko-gradient" />
            <CarouselNext className=" text-white w-10 p-2 bg-muhoko-gradient" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
