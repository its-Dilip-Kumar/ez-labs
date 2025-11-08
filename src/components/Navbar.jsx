import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50"
    >
      <h1 className="text-2xl font-bold text-blue-600">EZ Labs</h1>
      <div className="space-x-6 text-gray-700 font-medium hidden md:flex">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <a href="#about" className="hover:text-blue-600 transition">About</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </div>
    </motion.nav>
  );
}
