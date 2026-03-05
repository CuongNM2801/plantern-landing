import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import PolicySidebar from "./PolicySidebar";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Plantern</title>
        <meta
          name="description"
          content="Learn how Plantern protects your privacy and handles your data."
        />
      </Helmet>

      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4 flex gap-10">
          {/* Sidebar */}
          <PolicySidebar />

          {/* Content */}
          <main className="flex-1 max-w-4xl pb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground">
                Last updated: March 5, 2026
              </p>

              {/* INTRODUCTION */}
              <section id="introduction" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>

                <p className="text-gray-600">
                  Welcome to Plantern. We are committed to protecting your
                  privacy while you focus on productivity and growing your
                  virtual garden. This policy outlines how we handle your data
                  with transparency and care.
                </p>
              </section>

              {/* INFORMATION */}
              <section id="information" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold mb-4">
                  2. Information We Collect
                </h2>

                <h3 className="font-semibold mt-4 mb-2">
                  A. Personal Information
                </h3>

                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Authentication: Email Address (via Supabase).</li>
                  <li>Identity: Username and Profile Avatar.</li>
                  <li>
                    Game Progress: Level, XP, and resources (Gold, Water
                    droplets).
                  </li>
                </ul>

                <h3 className="font-semibold mt-6 mb-2">
                  B. Usage & Device Data
                </h3>

                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    Garden State: Plant growth status, watering history, and
                    seeds.
                  </li>
                  <li>
                    AR Features: Camera access is required strictly for plant
                    visualization.
                  </li>
                  <li>Sensors: Motion sensors for stable AR tracking.</li>
                  <li>
                    Storage: Local caching for offline performance and AR
                    screenshots.
                  </li>
                  <li className="list-none italic text-gray-500 mt-2">
                    Note: No video/audio is recorded or sent to our servers.
                  </li>
                </ul>
              </section>

              {/* DATA USAGE */}
              <section id="usage" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold mb-4">
                  3. How We Use Your Data
                </h2>
                <p className="text-gray-600 mb-2">
                  We use your information to keep your garden growing and your
                  focus sharp:
                </p>

                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    Core Service: Managing your account and syncing progress.
                  </li>
                  <li>
                    AR Experience: Visualizing plants in your real-world
                    environment.
                  </li>
                  <li>
                    Gamification: Tracking achievements, streaks, and social
                    interactions.
                  </li>
                  <li>
                    Support: Providing customer assistance and app updates.
                  </li>
                </ul>
              </section>

              {/* STORAGE */}
              <section id="storage" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold mb-4">
                  4. Data Storage & Security
                </h2>
                <p className="text-gray-600 mb-2">
                  We prioritize your data security by partnering with industry
                  leaders:
                </p>

                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    Supabase: Secure cloud infrastructure and encrypted
                    authentication.
                  </li>
                  <li>RevenueCat: Secure processing for in-app purchases.</li>
                  <li>
                    Local Encryption: AR photos and cached data remain on your
                    device.
                  </li>
                  <li>
                    Security Note: While we use military-grade encryption
                    through our providers, no system is 100% secure. We
                    encourage users to use strong passwords.
                  </li>
                </ul>
              </section>

              {/* THIRD PARTY */}
              <section id="thirdparty" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold mb-4">
                  5. Third Party Partners
                </h2>
                <p className="text-gray-600 mb-2">
                  We only share data with essential service providers:
                </p>

                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Supabase: Database & Authentication.</li>
                  <li>RevenueCat: Subscription management.</li>
                  <li>Google Services: Sign-in options.</li>
                </ul>
              </section>

              {/* CAMERA */}
              <section id="camera" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold mb-4">
                  6. Camera & AR Privacy
                </h2>
                <p className="text-gray-600 mb-2">
                  The camera feed is processed locally for visualization
                  features. No camera recordings are stored or transmitted to
                  our servers.
                </p>

                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    No Recording: The camera feed is processed in real-time
                    only.
                  </li>
                  <li>
                    Local Only: Screenshots you take in AR are saved to your
                    gallery, not our servers.
                  </li>
                  <li>
                    Control: You can toggle camera permissions in your device
                    settings at any time.
                  </li>
                </ul>
              </section>

              {/* CHILDREN */}
              <section id="children" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold mb-4">
                  7. Children’s Privacy
                </h2>

                <p className="text-gray-600">
                  Plantern is not intended for children under 13. We do not
                  knowingly collect data from this age group. If you suspect a
                  minor has provided data, please contact us for immediate
                  deletion.
                </p>
              </section>

              {/* RIGHTS */}
              <section id="rights" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold mb-4">
                  8. Your Global Rights
                </h2>
                <p className="text-gray-600 mb-2">
                  Whether you are in California (CCPA) or Europe (GDPR), we
                  respect your rights:
                </p>

                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access & Export: Request a copy of your data.</li>
                  <li>
                    Right to Forget: Delete your account and all associated data
                    within 30 days.
                  </li>
                  <li>Correction: Edit your profile info anytime.</li>
                </ul>
              </section>

              {/* CONTACT */}
              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                <p className="text-gray-600 mb-2">
                  If you have questions or want to exercise your data rights,
                  reach out to our team:
                </p>

                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    General Support:{" "}
                    <a
                      href="mailto:truongdinhlong4@gmail.com"
                      className="text-green-600 hover:underline">
                      truongdinhlong4@gmail.com
                    </a>
                  </li>
                  <li>
                    <li>
                      Data Privacy Officer:{" "}
                      <a
                        href="mailto:truongdinhlong4@gmail.com"
                        className="text-green-600 hover:underline">
                        truongdinhlong4@gmail.com
                      </a>
                    </li>
                  </li>
                  <li>In-App: Settings {">"} Help & Support</li>
                </ul>

                <p className="text-gray-600 mt-2">
                  By using Plantern, you agree to the terms outlined in this
                  Privacy Policy.
                </p>
              </section>

              {/* DELETION */}
              <section id="deletion" className="scroll-mt-28">
                <h2 className="text-2xl font-semibold mb-4">
                  10. Data Deletion Request for Plantern.
                </h2>
                <p className="text-gray-600 mb-2">
                  To request the deletion of your account and all associated
                  data, please follow these steps:
                </p>

                <ol className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    Send an email to:{" "}
                    <a
                      href="mailto:truongdinhlong4@gmail.com"
                      className="text-green-600 hover:underline">
                      truongdinhlong4@gmail.com
                    </a>
                  </li>
                  <li>
                    Subject line:{" "}
                    <strong>
                      Account Deletion Request - [Your Registered Email]
                    </strong>
                  </li>
                  <li>
                    Content: Please state clearly that you wish to delete your
                    Plantern account and all associated data (Garden progress,
                    focus history, and profile info).
                  </li>
                </ol>

                <p className="text-gray-600 mt-2">
                  <strong>What data will be deleted:</strong> All personal
                  information including email, username, and all in-app progress
                  will be permanently removed from our Supabase database within
                  7 days of the request. Note: This action is irreversible.
                </p>
              </section>
            </motion.div>
          </main>
        </div>
      </div>
    </>
  );
}
