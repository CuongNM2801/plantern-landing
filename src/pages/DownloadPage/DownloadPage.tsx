import { Apple, CheckCircle2, Droplets, LineChart, Smartphone, Sprout, Users } from "lucide-react";
import DownloadCard from "./DownloadCard";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sprout,
    title: "Plant Tracking",
    description: "Monitor your virtual garden's growth as you complete real-world tasks."
  },
  {
    icon: Droplets,
    title: "Watering Reminders",
    description: "Stay hydrated and keep your plants healthy with smart notifications."
  },
  {
    icon: LineChart,
    title: "Growth Insights",
    description: "Visualize your productivity trends with detailed analytics and charts."
  },
  {
    icon: Users,
    title: "Community Tips",
    description: "Share achievements and learn productivity hacks from other users."
  }
];

export default function DownloadPage() {
  return (
    <>
      <Helmet>
        <title>Download Plantern - Available on iOS & Android</title>
        <meta name="description" content="Get Plantern today and start growing your virtual garden while boosting your productivity. Available for iOS and Android devices." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?cs=srgb&dl=pexels-sohi-807598.jpg&fm=jpg)' }}
          />
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Get Plantern Now
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
                Available on iOS and Android
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Transform your daily tasks into a thriving virtual ecosystem. Download the app today and join thousands of users who are growing their productivity naturally.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Download Options */}
        <section className="py-20 bg-background -mt-10 relative z-20 rounded-t-[3rem]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <DownloadCard 
                icon={Apple}
                title="iOS"
                description="Requires iOS 13.0 or later. Compatible with iPhone, iPad, and iPod touch."
                buttonText="Download on App Store"
                link="https://apps.apple.com/app/plantern"
                delay={0.1}
              />
              <DownloadCard 
                icon={Smartphone}
                title="Android"
                description="Requires Android 8.0 and up. Optimized for all modern Android devices."
                buttonText="Download on Google Play"
                link="https://play.google.com/store/apps/details?id=com.plantern.app"
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need to Grow</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Plantern comes packed with features designed to keep you focused and motivated.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-sm border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-16 bg-background border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-8">System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Apple Devices</h4>
                  <p className="text-muted-foreground">iOS 13.0 or later. AR features require iPhone 8 or newer.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Android Devices</h4>
                  <p className="text-muted-foreground">Android 8.0 or later. AR features require AR supported devices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
