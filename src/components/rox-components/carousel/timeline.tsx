"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TimelineProps {
  years: number[];
  activeYear: number;
  onYearClick: (year: number) => void;
}

export function Timeline({ years, activeYear, onYearClick }: TimelineProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {years.map((year) => (
          <CarouselItem key={year} className="basis-auto">
            <Button
              variant={activeYear === year ? "default" : "outline"}
              onClick={() => onYearClick(year)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                activeYear === year
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {year}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
