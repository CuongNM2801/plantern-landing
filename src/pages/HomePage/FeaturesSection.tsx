import { Sparkles, Target, Trophy, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'AR Plant Visualization',
    description: 'Real-time plant growth in your environment with stunning augmented reality effects'
  },
  {
    icon: Trophy,
    title: 'Gamification',
    description: 'Level up, earn XP, track streaks and unlock achievements as you grow'
  },
  {
    icon: Target,
    title: 'Focus Tracking',
    description: 'Productivity metrics tied to garden growth - watch your plants thrive as you focus'
  },
  {
    icon: WifiOff,
    title: 'Offline Support',
    description: 'Local caching for seamless experience even without internet connection'
  }
];

export default function FeaturesSection() {
 return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to boost your productivity and grow your virtual garden
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
