import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { Menu, X } from "lucide-react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },

    {
      name: "Apartments",
      link: "#apartments",
    },

    {
      name: "Amenities",
      link: "#amenities",
    },

    {
      name: "Contact",
      link: "#contact",
    },
  ];

  // Smooth Scroll
  const handleScrollToSection = (link) => {

    const section =
      document.querySelector(link);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

    setMobileMenu(false);
  };

  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
      
      ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }
      `}
    >

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="cursor-pointer"
          onClick={() =>
            handleScrollToSection("#home")
          }
        >

          <motion.h1
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="relative text-3xl font-extrabold tracking-wide text-white"
          >

            {/* Gradient Text */}
            <span className="animate-pulse bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              Sri Ganesa
            </span>

            <span className="ml-2 text-white">
              Residencies
            </span>

            {/* Underline */}
            <motion.span
              initial={{
                width: 0,
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 1.2,
                delay: 0.3,
              }}
              className="absolute left-0 -bottom-2 h-[3px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
            />

          </motion.h1>

        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (

            <motion.button
              key={item.name}
              whileHover={{
                y: -2,
              }}
              onClick={() =>
                handleScrollToSection(
                  item.link
                )
              }
              className="group relative text-white"
            >

              {item.name}

              <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>

            </motion.button>

          ))}

          {/* Book Now */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              handleScrollToSection(
                "#contact"
              )
            }
            className="dark-cursor rounded-full bg-yellow-400 px-5 py-3 font-semibold text-black shadow-lg transition-all duration-300"
          >

            Book Now

          </motion.button>

        </div>

        {/* Mobile Menu Button */}
        <div className="text-white md:hidden">

          <button
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }
          >

            {
              mobileMenu
                ? <X size={30} />
                : <Menu size={30} />
            }

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (

        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          className="bg-black/90 backdrop-blur-xl md:hidden"
        >

          <div className="flex flex-col gap-6 p-6 text-white">

            {navItems.map((item) => (

              <button
                key={item.name}
                onClick={() =>
                  handleScrollToSection(
                    item.link
                  )
                }
                className="text-left text-lg"
              >

                {item.name}

              </button>

            ))}

            {/* Mobile Book Now */}
            <button
              onClick={() =>
                handleScrollToSection(
                  "#contact"
                )
              }
              className="dark-cursor rounded-full bg-yellow-400 py-3 font-semibold text-black"
            >

              Book Now

            </button>

          </div>

        </motion.div>

      )}

    </motion.nav>
  );
}

export default Navbar;