"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Timeline } from "./timeline";
import type { TimelineYear } from "@/types/timeline";

interface TimelineCarouselProps {
  data: TimelineYear[];
}

export function TimelineCarousel({ data }: TimelineCarouselProps) {
  const [activeYear, setActiveYear] = React.useState(2020);
  const activeEvents =
    data.find((item) => item.year === activeYear)?.events || [];

  return (
    <div
      className="w-full max-w-7xl mx-auto px-4 flex flex-col
     items-center"
    >
      <div className="relative ">
        <Carousel>
          <CarouselContent>
            {activeEvents.map((event) => (
              <CarouselItem
                key={event.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden shadow-lg h-[400px] w-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-[300px] w-full overflow-hidden">
                      <Image
                        src={event.image}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-grow bg-gradient-to-b from-white dark:from-black to-black/35 dark:to-white/35">
                      <div className="text-sm font-semibold text-primary mb-2">
                        {event.date}
                      </div>
                      <p className="text-sm/relaxed line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
      <div className="mt-10 w-[60%]">
        <Timeline
          years={data.map((item) => item.year)}
          activeYear={activeYear}
          onYearClick={setActiveYear}
        />
      </div>
    </div>
  );
}
