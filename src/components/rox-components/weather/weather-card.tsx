"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "600"],
});

export default function WeatherCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`fixed top-16 right-4 z-50 ${orbitronFont.className}
          initial={false}`}
    >
      <AnimatePresence>
        <motion.div
          layout
          animate={{
            width: isExpanded ? 320 : 48,
            height: isExpanded ? 192 : 48,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onHoverStart={() => setIsExpanded(true)}
          onHoverEnd={() => setIsExpanded(false)}
        >
          <Card className="relative overflow-hidden backdrop-blur-md bg-black/30 text-white border-0 w-full h-full">
            {/* Weather animation background */}
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-30"
              >
                <source src="/weather/rain.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Content */}
            <div className="relative z-10 p-4 h-full">
              <AnimatePresence>
                {isExpanded ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-semibold">Malpais Mesa</h2>
                        <p className="text-sm text-gray-300">12:41 PM</p>
                      </div>
                      <span className="text-4xl font-bold">55°</span>
                    </div>

                    <div className="flex items-center gap-2 font-semibold text-amber-300">
                      <AlertTriangle className="h-4 w-4" />
                      <p className="text-sm">
                        Heavy rain is expected for 32 min
                      </p>
                    </div>

                    <button className="w-full mt-2 py-2 text-sm text-center bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                      See another routes
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <div className=" rounded-full p-2">
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
