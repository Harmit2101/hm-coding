import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactCardProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ isOpen, onClose }) => {
  const email = "hmcoding.h@gmail.com";
  const phone = "+919106147748";

  // Close on ESC key (premium UX)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // click outside to close
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} // prevent close on card click
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <button
                onClick={onClose}
                aria-label="Close contact dialog"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold transition"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-5 text-sm leading-relaxed">
              We'd love to hear from you. Reach out to us directly using the
              options below.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col gap-3">
              {/* Email */}
              <motion.a
                href={`mailto:${email}`}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📧</span>
                <span className="truncate">{email}</span>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${phone}`}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📞</span>
                <span>{phone}</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactCard;
