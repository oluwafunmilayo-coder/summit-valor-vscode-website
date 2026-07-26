import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const imageScale = useTransform(
    scrollY,
    [0, 500],
    [1, 1.15]
  );

  const textMove = useTransform(
    scrollY,
    [0, 500],
    [0, 80]
  );

  return (
    <motion.section
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-image.jpg')",
        scale: imageScale,
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>


      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 text-center">

        <motion.div
          style={{ y: textMove }}
          className="max-w-4xl text-white"
        >

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-purple-600/90 px-4 py-2 text-sm font-medium"
          >
            Remote Operations Support Agency
          </motion.span>


          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-5xl font-bold leading-tight md:text-7xl"
          >
            Operations,
            <br />
            run right.
          </motion.h1>


          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200"
          >
            Summit Valor helps founders and growing businesses streamline
            operations, build systems, and scale sustainably through strategic
            remote operations support.
          </motion.p>


          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex justify-center gap-4"
          >

            <button className="rounded-lg bg-purple-700 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-800">
              Book a Discovery Call
            </button>


            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-black">
              Explore Services
            </button>

          </motion.div>

        </motion.div>

      </div>

    </motion.section>
  );
}