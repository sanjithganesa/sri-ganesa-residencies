import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CommercialBanner() {

  const navigate = useNavigate();

  return (
    <section className="bg-black px-6 py-24">

      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        onClick={() => navigate("/shops")}
        className="
          group
          relative
          cursor-pointer
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-gradient-to-r
          from-yellow-500/10
          to-white/5
          p-12
        "
      >

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">

          <p className="uppercase tracking-[0.3em] text-yellow-400">
            Commercial Spaces
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
            Premium Rental Shops
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Discover commercial spaces perfect for
            retail stores, offices, showrooms and startups.
          </p>

          <motion.div
            whileHover={{
              x: 10,
            }}
            className="
              mt-10
              flex
              items-center
              gap-3
              text-xl
              font-semibold
              text-yellow-400
            "
          >

            Explore Shops

            <ArrowRight />

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}

export default CommercialBanner;