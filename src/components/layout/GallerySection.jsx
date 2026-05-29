import { useState } from "react";

import { motion } from "framer-motion";

import {
  PhotoProvider,
  PhotoView,
} from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

function GallerySection({ images = [] }) {

  const [activeImage, setActiveImage] = useState(
    images?.[0]
  );

  if (!images?.length) {
    return null;
  }

  return (
    <section className="bg-black py-24">

      {/* Heading */}
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
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >

        <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
          Gallery
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Explore The Experience
        </h2>

      </motion.div>

      {/* Gallery */}
      <PhotoProvider>

        <div className="grid gap-6 lg:grid-cols-4">

          {/* Main Preview */}
          <motion.div
            layout
            className="lg:col-span-3 overflow-hidden rounded-3xl"
          >

            <PhotoView src={activeImage}>

              <motion.img
                key={activeImage}
                initial={{
                  opacity: 0,
                  scale: 1.02,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                src={activeImage}
                alt="Apartment"
                className="h-[500px] w-full cursor-pointer rounded-3xl object-cover"
              />

            </PhotoView>

          </motion.div>

          {/* Thumbnails */}
          <div className="flex gap-4 overflow-x-auto lg:flex-col lg:overflow-visible">

            {images.map((image, index) => (

              <motion.button
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setActiveImage(image)}
                className={`min-w-[120px] overflow-hidden rounded-2xl border-2 transition-all duration-300
                  
                  ${
                    activeImage === image
                      ? "border-yellow-400"
                      : "border-transparent"
                  }
                `}
              >

                <img
                  src={image}
                  alt="Thumbnail"
                  className="h-28 w-40 object-cover lg:w-full"
                />

              </motion.button>

            ))}

          </div>

        </div>

      </PhotoProvider>

    </section>
  );
}

export default GallerySection;