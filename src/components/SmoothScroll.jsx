import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
