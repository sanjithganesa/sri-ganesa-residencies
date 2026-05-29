import apartments from "../../data/apartments";
import ApartmentCard from "./ApartmentCard";
import { motion } from "framer-motion";

function ApartmentSection() {
  return (
    <section
  id="apartments"
  className="min-h-screen bg-black py-28 px-6"
>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >

        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
          Our Apartments
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Crafted For Comfortable Living
        </h2>

      </motion.div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {apartments.map((apartment, index) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            index={index}
          />
        ))}

      </div>

    </section>
  );
}

export default ApartmentSection;