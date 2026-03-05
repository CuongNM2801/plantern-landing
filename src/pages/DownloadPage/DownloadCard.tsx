import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface DownloadCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  delay?: number;
}

export default function DownloadCard({
  icon: Icon,
  title,
  description,
  buttonText,
  link,
  delay = 0,
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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
        {buttonText}
      </a>
    </motion.div>
  );
}
