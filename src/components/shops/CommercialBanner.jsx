import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CommercialBanner() {

  const navigate = useNavigate();

  return (

    <>
      {/* Intro Section */}
      <section className="bg-black px-6 pt-24">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >

          <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
            Commercial Opportunities
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">

            Looking To Start Or Expand

            <span className="block text-yellow-400">
              Your Business?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">

            Secure a strategically located commercial
            space designed to help your business
            attract customers, grow faster,
            and establish a strong presence in the market.

          </p>

        </motion.div>

      </section>

      {/* Shops CTA Banner */}
      <section className="bg-black px-6 pb-24">

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

            <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              Premium Rental Shops
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-gray-300">
              Discover commercial spaces perfect for
              retail stores, offices, showrooms,
              and growing startups.
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

    </>

  );
}

export default CommercialBanner;