// src/components/ClientStory.jsx
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";
import clientStoryData from "../data/clientStoryData";
import ClientStoryVideoModal from "./ClientStoryVideoModal";

const SWIPE_THRESHOLD = 50;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

function Field({ label, value }) {
  return (
    <div className="border-t border-neutral-200 pt-4">
      <p className="text-xs font-medium uppercase tracking-wider text-purple-600">
        {label}
      </p>
      <p className="mt-1 text-lg text-neutral-800">{value}</p>
    </div>
  );
}

function OverviewSlide({ slide }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
        {slide.label}
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {slide.fields.map((field) => (
          <Field key={field.label} label={field.label} value={field.value} />
        ))}
      </div>
    </div>
  );
}

function ChallengeSlide({ slide }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
        {slide.label}
      </p>
      <h3 className="mt-4 font-serif text-2xl leading-snug text-neutral-900 md:text-3xl">
        {slide.heading}
      </h3>
      <p className="mt-4 text-neutral-600 leading-relaxed">{slide.description}</p>
      <ul className="mt-6 space-y-3">
        {slide.painPoints.map((point) => (
          <li key={point} className="flex items-start gap-3 text-neutral-700">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionSlide({ slide }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
        {slide.label}
      </p>
      <h3 className="mt-4 font-serif text-2xl leading-snug text-neutral-900 md:text-3xl">
        {slide.heading}
      </h3>
      <p className="mt-3 text-sm font-medium text-neutral-500">{slide.timeline}</p>
      <ul className="mt-6 space-y-3">
        {slide.systems.map((item) => (
          <li key={item} className="flex items-start gap-3 text-neutral-700">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImplementationSlide({ slide }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
        {slide.label}
      </p>
      <h3 className="mt-4 font-serif text-2xl leading-snug text-neutral-900 md:text-3xl">
        {slide.heading}
      </h3>
      <p className="mt-3 text-sm font-medium text-neutral-500">{slide.timeline}</p>
      <div className="mt-6 space-y-5">
        {slide.workflows.map((flow, i) => (
          <div key={flow.title} className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-700">
              {i + 1}
            </div>
            <div>
              <p className="font-medium text-neutral-900">{flow.title}</p>
              <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                {flow.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsSlide({ slide }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
        {slide.label}
      </p>
      <h3 className="mt-4 font-serif text-2xl leading-snug text-neutral-900 md:text-3xl">
        {slide.heading}
      </h3>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-neutral-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Before
          </p>
          <ul className="mt-3 space-y-2">
            {slide.before.map((item) => (
              <li key={item} className="text-sm text-neutral-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-purple-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-500">
            After
          </p>
          <ul className="mt-3 space-y-2">
            {slide.after.map((item) => (
              <li key={item} className="text-sm text-neutral-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6">
        {slide.metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="font-serif text-3xl text-purple-700">{metric.value}</p>
            <p className="mt-1 text-xs text-neutral-500 leading-snug">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function VideoSlide({ slide, onPlay }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
        {slide.label}
      </p>
      <h3 className="mt-4 font-serif text-2xl leading-snug text-neutral-900 md:text-3xl">
        {slide.heading}
      </h3>

      <button
        type="button"
        onClick={onPlay}
        aria-label="Play client testimonial video"
        className="group relative mt-6 block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
      >
        <img
          src={slide.thumbnail}
          alt={`Video testimonial thumbnail — ${slide.caption}`}
          loading="lazy"
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-neutral-900/25 transition group-hover:bg-neutral-900/35" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition group-hover:scale-110">
            <FiPlay className="ml-1 h-6 w-6 text-purple-700" />
          </span>
        </span>
      </button>
      <p className="mt-3 text-sm italic text-neutral-500">{slide.caption}</p>
    </div>
  );
}

function renderSlide(slide, onPlay) {
  switch (slide.type) {
    case "overview":
      return <OverviewSlide slide={slide} />;
    case "challenge":
      return <ChallengeSlide slide={slide} />;
    case "solution":
      return <SolutionSlide slide={slide} />;
    case "implementation":
      return <ImplementationSlide slide={slide} />;
    case "results":
      return <ResultsSlide slide={slide} />;
    case "video":
      return <VideoSlide slide={slide} onPlay={onPlay} />;
    default:
      return null;
  }
}

export default function ClientStory() {
  const { eyebrow, heading, intro, slides } = clientStoryData;
  const [[index, direction], setIndexDirection] = useState([0, 0]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const touchStartX = useRef(null);

  const goTo = useCallback(
    (nextIndex) => {
      const dir = nextIndex > index ? 1 : -1;
      const wrapped = (nextIndex + slides.length) % slides.length;
      setIndexDirection([wrapped, dir]);
    },
    [index, slides.length]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) goPrev();
    else if (delta < -SWIPE_THRESHOLD) goNext();
    touchStartX.current = null;
  };

  const activeSlide = slides[index];

  return (
    <section
      aria-label="Client Story"
      className="mx-auto max-w-4xl px-6 py-20 md:py-28"
    >
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-neutral-900 md:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-500 leading-relaxed">
          {intro}
        </p>
      </div>

      <div className="relative mt-14">
        <motion.div
          layout
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label={`Slide ${index + 1} of ${slides.length}: ${activeSlide.label}`}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 md:p-12"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              {renderSlide(activeSlide, () => setIsVideoOpen(true))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-md transition hover:text-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 md:-translate-x-5"
        >
          <FiChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-md transition hover:text-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 md:translate-x-5"
        >
          <FiChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${slide.label}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
              i === index ? "w-6 bg-purple-600" : "w-2 bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>

      <ClientStoryVideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        video={slides.find((s) => s.type === "video")}
      />
    </section>
  );
}
