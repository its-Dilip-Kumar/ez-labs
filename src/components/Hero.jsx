import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left md:w-1/2"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          Empowering Ideas with <span className="text-blue-600">Innovation</span>
        </h2>
        <p className="text-gray-600 mt-4 md:pr-10">
          At EZ Labs, we turn your vision into reality using modern tech and design thinking.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </motion.a>
      </motion.div>

      <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        src="https://cdn.pixabay.com/photo/2017/08/06/09/53/laboratory-2593774_960_720.jpg"
        alt="Hero"
        className="md:w-1/2 w-80 rounded-2xl shadow-lg mb-10 md:mb-0"
      />
    </section>
  );
}
