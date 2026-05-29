import { motion } from "framer-motion";

import {
  ShieldCheck,
  Car,
  Trees,
  Sun,
  BrushCleaning,
  Building2,
} from "lucide-react";

function AmenitiesSection() {

  const amenities = [
    {
      icon: BrushCleaning,

      title: "House Keeping",

      description:
        "Professional housekeeping services available upon additional request and payment.",
    },

    {
      icon: Car,

      title: "Car Parking",

      description:
        "Secure and spacious parking facilities available for residents and visitors.",
    },

    {
      icon: ShieldCheck,

      title: "24/7 CCTV Monitoring",

      description:
        "Continuous CCTV surveillance and monitoring for enhanced resident safety and security.",
    },

    {
      icon: Sun,

      title: "Solar Powered Electricity",

      description:
        "Solar-assisted electricity system helping reduce monthly electricity expenses.",
    },

    {
      icon: Trees,

      title: "Peaceful Residential Environment",

      description:
        "Calm and family-friendly surroundings designed for comfortable living.",
    },

    {
      icon: Building2,

      title: "Lift Facilities",

      description:
        "Convenient elevator access available for easy movement across all floors.",
    },
  ];

  return (
    <section
      id="amenities"
      className="bg-[#050816] py-28 px-6"
    >

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >

        <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
          Amenities
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Designed For Better Living
        </h2>

      </motion.div>

      {/* Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

        {amenities.map((item, index) => {

          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-yellow-400/40"
            >

              {/* Icon */}
              <div className="mb-6 inline-flex rounded-2xl bg-yellow-400/10 p-4">

                <Icon
                  size={34}
                  className="text-yellow-400"
                />

              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-gray-400">
                {item.description}
              </p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default AmenitiesSection;