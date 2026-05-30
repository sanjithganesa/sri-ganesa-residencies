import { useParams } from "react-router-dom";
import shops from "../data/shops";
import contactInfo from "../config/contact";

function ShopDetails() {

  const { slug } = useParams();

  const shop = shops.find(
    (s) => s.slug === slug
  );

  if (!shop) {

    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Shop Not Found
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-black text-white">

      {/* Hero Image */}
      <img
        src={shop.image}
        alt={shop.title}
        className="h-[500px] w-full object-cover"
      />

      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Shop Info */}
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Left Side */}
          <div className="lg:col-span-2">

            <h1 className="text-5xl font-bold">
              {shop.title}
            </h1>

            <p className="mt-4 text-lg text-gray-400">
              📍 {shop.location}
            </p>

            <p className="mt-8 text-lg leading-relaxed text-gray-300">
              {shop.description}
            </p>

          </div>

          {/* Right Side Property Card */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-sm
            "
          >

            <h2 className="mb-8 text-2xl font-bold">
              Property Details
            </h2>

            <div className="space-y-6">

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Monthly Rent
                </span>

                <span className="font-semibold text-yellow-400">
                  {shop.price}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Area
                </span>

                <span>
                  {shop.sqft} Sq.ft
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Type
                </span>

                <span>
                  Commercial Shop
                </span>

              </div>

            </div>

            <div className="mt-10 space-y-4">

              <a
                href={shop.locationLink}
                target="_blank"
                rel="noreferrer"
                className="
                  block
                  w-full
                  rounded-full
                  bg-yellow-400
                  py-4
                  text-center
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                View Location
              </a>

              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20I%20am%20interested%20in%20${shop.title}`}
                target="_blank"
                rel="noreferrer"
                className="
                  block
                  w-full
                  rounded-full
                  border
                  border-white/20
                  py-4
                  text-center
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:border-yellow-400
                  hover:text-yellow-400
                "
              >
                Send Inquiry
              </a>

            </div>

          </div>

        </div>

        {/* Gallery */}
        <div className="mt-20">

          <h2 className="mb-8 text-center text-4xl font-bold">
            Gallery
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {shop.gallery?.map((image, index) => (

              <img
                key={index}
                src={image}
                alt={`${shop.title}-${index}`}
                className="
                  h-72
                  w-full
                  rounded-3xl
                  object-cover
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              />

            ))}

          </div>

        </div>

      </div>

    </div>

  );
}

export default ShopDetails;