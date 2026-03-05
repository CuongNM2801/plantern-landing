import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Sprout } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FeaturesSection from "./FeaturesSection";
import PrivacyTrustSection from "./PrivacyTrustSection";

export default function HomePage() {
  const navigate = useNavigate();

  const handleStartGrowing = () => {
    navigate("/download");
  };

  return (
    <>
      <Helmet>
        <title>Plantern - Grow Plants, Boost Productivity</title>

        <meta
          name="description"
          content="Transform your productivity with Plantern. Grow a virtual garden while tracking your focus and achieving your goals. Gamified productivity with AR plant visualization."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1690772058900-291915e48287)",
            }}
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto">
              {/* Logo */}
              <div className="flex justify-center">
                <img
                  src={"src/assets/LOGO.png"}
                  alt="Plantern Logo"
                  className="w-75 h-75 object-contain"
                />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Grow Plants, Boost Productivity
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Cultivate your virtual garden while tracking your focus and
                productivity. Watch your plants grow as you achieve your goals.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartGrowing}
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg rounded-full shadow-lg transition">
                <Sprout className="inline w-5 h-5 mr-2" />
                Start Growning
              </motion.button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}>
              ↓
            </motion.div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <FeaturesSection />

        {/* PRIVACY */}
        <PrivacyTrustSection />

        {/* DOWNLOAD CTA */}
        <section id="download" className="py-20 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start growing?
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Download Plantern today and transform your productivity journey
              into a beautiful virtual garden.
            </p>

            <button
              onClick={handleStartGrowing}
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full">
              Download Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
