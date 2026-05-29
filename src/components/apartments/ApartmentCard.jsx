import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import { useNavigate } from "react-router-dom";

function ApartmentCard({ apartment, index }) {

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
    >

      <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        glareEnable={false}
        scale={1.01}
        transitionSpeed={1500}
      >

        <motion.div
          whileHover={{
            y: -8,
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl"
        >

          {/* Coming Soon Badge */}
          {apartment.comingSoon && (

            <div className="absolute right-4 top-4 z-20 rounded-full border border-yellow-400/30 bg-black/70 px-4 py-2 text-sm font-semibold text-yellow-400 backdrop-blur-xl">
              Coming Soon
            </div>

          )}

          {/* Image */}
          <div className="overflow-hidden">

            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.5,
              }}
              src={apartment.image}
              alt={apartment.title}
              className="h-[320px] w-full object-cover"
            />

          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-6">

            {/* Title */}
            <motion.h2
              whileHover={{
                x: 3,
              }}
              className="text-2xl font-bold text-white md:text-3xl"
            >
              {apartment.title}
            </motion.h2>

            {/* Location */}
            <p className="mt-2 text-gray-300">
              {apartment.location}
            </p>

            {/* Bottom Section */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              {/* Price */}
              <p className="text-2xl font-semibold leading-tight text-yellow-400">
                {apartment.price}
              </p>

              {/* Button Logic */}
              {apartment.comingSoon ? (

                <div className="w-full rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-3 text-center text-base font-semibold text-yellow-400 sm:w-auto">
                  Launching Soon
                </div>

              ) : (

                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  onClick={() =>
                    navigate(
                      `/apartments/${apartment.slug}`
                    )
                  }
                  className="dark-cursor w-full rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-black transition-all duration-300 sm:w-auto"
                >
                  View Details
                </motion.button>

              )}

            </div>

          </div>

        </motion.div>

      </Tilt>

    </motion.div>
  );
}

export default ApartmentCard;