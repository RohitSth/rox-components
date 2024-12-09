"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Card } from "../../ui/card";

export default function WeatherCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed top-4 right-4 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className={`
          relative overflow-hidden transition-all duration-300 ease-in-out
          backdrop-blur-md bg-black/30 text-white border-0
          ${isHovered ? "w-80 h-48" : "w-12 h-12 cursor-pointer"}
        `}
      >
        {/* Weather animation background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-30"
          >
            <source
              src="https://assets.codepen.io/3364143/rain.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 p-4 h-full">
          {isHovered ? (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold">Malpais Mesa</h2>
                  <p className="text-sm text-gray-300">12:41 PM</p>
                </div>
                <span className="text-4xl font-bold">55°</span>
              </div>

              <div className="flex items-center gap-2 text-amber-300">
                <AlertTriangle className="h-4 w-4" />
                <p className="text-sm">Heavy rain is expected for 32 min</p>
              </div>

              <button className="w-full mt-2 py-2 text-sm text-center hover:bg-white/10 rounded-md transition-colors">
                See another routes
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <AlertTriangle className="h-6 w-6 text-amber-300" />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
