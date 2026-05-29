import { useState } from "react";

import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

import contactInfo from "../../config/contact";

function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  // Handle Input Changes
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Handle Submit
  const handleSubmit = async (e) => {

  e.preventDefault();

  setError("");
  setSuccess(false);

  // Name Validation
  if (formData.name.trim().length < 3) {

    setError(
      "Name must contain at least 3 characters."
    );

    return;
  }

  // Email Validation
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !emailRegex.test(
      formData.email
    )
  ) {

    setError(
      "Please enter a valid email address."
    );

    return;
  }

  // Message Validation
  if (
    formData.message.trim().length < 10
  ) {

    setError(
      "Message should contain at least 10 characters."
    );

    return;
  }

  try {

    setLoading(true);

    const response = await fetch(
      "https://525thr8jyl.execute-api.ap-south-1.amazonaws.com/contact",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          formData
        ),
      }
    );

    const result =
      await response.json();

    if (!response.ok) {

      throw new Error(
        result.message ||
        "Failed to send inquiry."
      );

    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (err) {

    setError(
      err.message ||
      "Unable to send inquiry."
    );

  } finally {

    setLoading(false);

    setTimeout(() => {

      setSuccess(false);
      setError("");

    }, 4000);

  }

};

  return (
    <section
      id="contact"
      className="bg-[#050816] px-6 py-28"
    >

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
        className="mb-20 text-center"
      >

        <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
          Contact
        </p>

        <h2 className="text-5xl font-bold text-white md:text-6xl">
          Get In Touch
        </h2>

      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          {/* Phone */}
          <div className="flex items-start gap-5">

            <div className="rounded-2xl bg-yellow-400/10 p-4">

              <Phone className="text-yellow-400" />

            </div>

            <div>

              <h3 className="text-2xl font-bold text-white">
                Phone
              </h3>

              <a
                href="tel:+919487253134"
                className="mt-2 block text-gray-400 transition-colors duration-300 hover:text-yellow-400"
              >
                {contactInfo.phone}
              </a>

            </div>

          </div>

          {/* Email */}
          <div className="flex items-start gap-5">

            <div className="rounded-2xl bg-yellow-400/10 p-4">

              <Mail className="text-yellow-400" />

            </div>

            <div>

              <h3 className="text-2xl font-bold text-white">
                Email
              </h3>

              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-2 block text-gray-400 transition-colors duration-300 hover:text-yellow-400"
              >
                {contactInfo.email}
              </a>

            </div>

          </div>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20I%20am%20interested%20in%20your%20apartments`}
            target="_blank"
            rel="noreferrer"
            className="dark-cursor inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.03]"
          >

            <MessageCircle />

            Chat on WhatsApp

          </a>

        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Name */}
            <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400"
            />

            {/* Email */}
                    <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400"
        />

            {/* Message */}
            <div>

  <textarea
    rows="6"
    name="message"
    required
    maxLength={500}
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400"
  />

  <div className="mt-2 text-right text-sm text-gray-500">
    {formData.message.length}/500
  </div>

</div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="dark-cursor w-full rounded-full bg-yellow-400 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
            >

              {
                loading
  ? "Sending Inquiry..."
  : "Send Inquiry"
              }

            </button>

            {/* Success Message */}
            {success && (

              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="text-center font-semibold text-green-400"
              >

                Thank you! We will contact you shortly.

              </motion.p>

            )}

            {/* Error Message */}
            {error && (

              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="text-center font-semibold text-red-400"
              >

                {error}

              </motion.p>

            )}

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactSection;