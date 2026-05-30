import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import shops from "../data/shops";

function Shops() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="flex h-screen items-center justify-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.3em] text-yellow-400">
            Commercial Spaces
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold">
            Rental Shops
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Premium commercial locations for growing businesses.
          </p>

        </motion.div>

      </section>

      {/* Shop Cards */}
      <section className="px-6 pb-24">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Available Shops
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {shops.map((shop) => (

            <motion.div
              key={shop.id}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              onClick={() =>
                navigate(`/shops/${shop.slug}`)
              }
              className="
                cursor-pointer
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                transition-all
              "
            >

              <img
                src={shop.image}
                alt={shop.title}
                className="h-60 w-full rounded-2xl object-cover"
              />

              <h3 className="mt-4 text-2xl font-bold">
                {shop.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {shop.location}
              </p>

              <p className="mt-4 text-yellow-400 font-semibold">
                {shop.price}
              </p>

              <button
                className="
                  mt-6
                  rounded-full
                  bg-yellow-400
                  px-6
                  py-3
                  font-semibold
                  text-black
                "
              >
                View Details
              </button>

            </motion.div>

          ))}

        </div>

      </section>

    </div>

  );
}

export default Shops;