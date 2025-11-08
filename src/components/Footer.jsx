import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white text-center py-6 mt-auto"
    >
      <p className="text-sm">&copy; {new Date().getFullYear()} EZ Labs. All rights reserved.</p>
    </motion.footer>
  );
}
