"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Home/2025/JanART/GW/Leadup/Hero/V1/PC_Leadup_Hero_Lifestyle._CB537782771_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Deals/revealed/PC_Static_C_1X._CB552826943_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/JanArt25/PC_Leadup_Hero_Lifestyle-2-2x_Deals._CB537660659_.jpg",
];

const ImageCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div
                className="h-[50vh] bg-cover bg-top"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ImageCarousel;
