import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface DownloadCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  delay?: number;
  disabled?: boolean;
  disabledMessage?: string;
}

export default function DownloadCard({
  icon: Icon,
  title,
  description,
  buttonText,
  link,
  delay = 0,
  disabled,
  disabledMessage,
}: DownloadCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-200">
      {/* icon */}
      <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-green-600" />
      </div>

      {/* title */}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      {/* description */}
      <p className="text-gray-600 mb-8">{description}</p>

      {/* button */}
      <div className="w-full relative group">
        {disabled ? (
          <button
            disabled
            className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl font-semibold cursor-not-allowed">
            {buttonText}
          </button>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
            {buttonText}
          </a>
        )}

        {disabled && (
          <div className="absolute left-1/2 -translate-x-1/2 -top-9 opacity-0 group-hover:opacity-100 transition pointer-events-none">
            <div className="bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap">
              {disabledMessage}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
