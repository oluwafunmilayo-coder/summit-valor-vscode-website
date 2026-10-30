import { cloneElement, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useLocation } from "react-router-dom";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-[#7651C9]"
      style={{ scaleX }}
    />
  );
}

export function RouteTransitions({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        {cloneElement(children, { location })}
      </motion.div>
    </AnimatePresence>
  );
}

export function ScrollReveals() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("main section > div")
    ).filter((element) => !element.parentElement?.querySelector("h1"));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      sections.forEach((element) => element.classList.add("scroll-is-visible"));
      return () => {
        sections.forEach((element) =>
          element.classList.remove("scroll-is-visible")
        );
      };
    }

    sections.forEach((element, index) => {
      element.classList.add(
        "scroll-reveal",
        index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    sections.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      sections.forEach((element) => {
        element.classList.remove(
          "scroll-reveal",
          "scroll-reveal-left",
          "scroll-reveal-right",
          "scroll-is-visible"
        );
      });
    };
  }, [pathname, reduceMotion]);

  return null;
}
