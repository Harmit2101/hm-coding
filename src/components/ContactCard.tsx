import React from "react";

interface ContactCardProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const email = "hmcoding.h@gmail.com";
  const phone = "+919106147748";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-80 transform transition-transform duration-300 scale-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white font-bold"
          >
            ✕
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We'd love to hear from you! Reach out via email or phone:
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${email}`}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg text-center hover:bg-purple-700 transition"
          >
            📧 Email: {email}
          </a>
          <a
            href={`tel:${phone}`}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg text-center hover:bg-purple-700 transition"
          >
            📞 Call: {phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
