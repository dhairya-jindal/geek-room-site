"use client";

import { useEffect, useState } from "react";
import "@/app/hero.css";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { motion } from "framer-motion";
import Link from "next/link";

const particlesOptions: ISourceOptions = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.6,
        },
      },
    },
  },
  particles: {
    color: {
      value: ["#a78bfa", "#818cf8", "#c4b5fd"],
    },
    links: {
      color: "#818cf8",
      distance: 150,
      enable: true,
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" },
    },
    number: {
      density: {
        enable: true,
        width: 1200,
        height: 800,
      },
      value: 35,
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2.5 },
    },
  },
  detectRetina: true,
  fullScreen: false,
};

export function Hero() {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <section className="hero relative min-h-screen w-full overflow-hidden">
      {/* 1. Animated mesh gradient background */}
      <div
        className="hero__gradient absolute inset-0"
        aria-hidden
      />

      {/* 2. Particles canvas - transparent background so gradient shows through */}
      <div className="hero__particles absolute inset-0 z-[1]">
        {init && (
          <Particles
            id="hero-particles"
            options={{
              ...particlesOptions,
              particles: {
                ...particlesOptions.particles,
                number: {
                  value: isMobile ? 20 : 35,
                  density: { enable: true, width: 1200, height: 800 },
                },
              },
              background: { color: { value: "transparent" } },
            }}
            className="h-full w-full"
          />
        )}
      </div>

      {/* 3. Content layer - above particles */}
      <div className="hero__content relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <motion.h1
          className="text-center text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Geek Room
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl text-center text-base text-white/85 sm:text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          A community of builders, hackers, and innovators.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/join"
              className="mt-8 sm:mt-10 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-8 py-3.5 font-semibold text-[#0f0c29] shadow-lg transition active:scale-[0.98] hover:bg-white/95"
            >
              Join the Community
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
