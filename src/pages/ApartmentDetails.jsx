import { useEffect } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import { motion } from "framer-motion";

import apartments from "../data/apartments";

import GallerySection from "../components/layout/GallerySection";

import { MapPin } from "lucide-react";

function ApartmentDetails() {

  const { slug } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const apartment = apartments.find(
    (item) => item.slug === slug
  );

  if (!apartment) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-4xl text-white">
        Apartment Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">

        <img
          src={apartment.image}
          alt={apartment.title}
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="absolute bottom-10 left-6 md:left-10">

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-4xl md:text-7xl font-bold"
          >
            {apartment.title}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-4 text-lg text-gray-300 md:text-xl"
          >
            {apartment.location}
          </motion.p>

        </div>

      </div>

      {/* Main Section */}
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Left */}
          <div className="md:col-span-2">

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
              className="mb-6 text-4xl font-bold"
            >
              About This Apartment
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className="text-lg leading-relaxed text-gray-400"
            >
              {apartment.description}
            </motion.p>

          </div>

          {/* Right Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >

            {/* Price */}
            <h3 className="mb-10 text-4xl font-bold leading-tight text-yellow-400">
              {apartment.price}
            </h3>

            {/* Configurations */}
            <div className="space-y-6">

              <h4 className="text-2xl font-semibold text-white">
                Available Configurations
              </h4>

              {apartment.availability?.map((unit, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <p className="text-xl font-bold text-yellow-400">
                    {unit.type}
                  </p>

                  <div className="mt-3 space-y-2 text-gray-300">

                    <p>
                      Area: {unit.sqft} sqft
                    </p>

                    <p>
                      Furnishing: {
                        unit.furnished
                          ? "Furnished"
                          : "Unfurnished"
                      }
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* Action Buttons */}
<div className="mt-10 space-y-4">

  <a
    href={apartment.locationLink}
    target="_blank"
    rel="noreferrer"
    className="dark-cursor flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02]"
  >

    <MapPin size={20} />

    View Location

  </a>

  <button
  onClick={() =>
    navigate("/", {
      state: {
        scrollTo: "contact",
      },
    })
  }
  className="w-full rounded-full border border-white/20 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
>
  Send Inquiry
</button>

</div>

{/* Apartment Location */}
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">

  <p className="text-sm text-gray-400">
    Property Location
  </p>

  <p className="mt-2 text-white">
    {apartment.location}
  </p>

</div>

          </motion.div>

        </div>

      </div>

      {/* Gallery */}
      <div className="mx-auto max-w-7xl px-6 pb-24">

        <GallerySection
          images={apartment.gallery}
        />

      </div>

    </div>
  );
}

export default ApartmentDetails;