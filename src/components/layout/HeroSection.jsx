import { motion } from "framer-motion";

import heroImage from "../../assets/hero.png";

function HeroSection() {

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >

      {/* Background Image */}
      <motion.img
        initial={{
          scale: 1.2,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        src={heroImage}
        alt="Luxury Apartment"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-6 text-sm uppercase tracking-[0.3em] text-yellow-400 md:text-base"
        >
          Premium Living Experience
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl lg:text-8xl"
        >
          Apartments
          <br />
          Designed For Comfort
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl"
        >
          Experience exceptional and secure living spaces with modern amenities and a peaceful environment.
        </motion.p>

        {/* Spacer */}
        <div className="mt-12"></div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2"
      >

        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white">

          <div className="mt-2 h-2 w-2 rounded-full bg-white"></div>

        </div>

      </motion.div>

    </section>
  );
}

export default HeroSection;