import { Check, Database, Eye, Lock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const privacyFeatures = [
  {
    icon: Eye,
    title: 'No Recording',
    description: 'We never record video or audio. Your workspace stays private and secure.'
  },
  {
    icon: Lock,
    title: 'Local Encryption',
    description: 'All your data is encrypted locally on your device before any sync.'
  },
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'Bank-level encryption standards protect your information at all times.'
  },
  {
    icon: Database,
    title: 'Data Control',
    description: 'You own your data. Export, delete, or manage it anytime you want.'
  }
];

export default function PrivacyTrustSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1575909813087-8529d4a3c434)' }}
      />
      <div className="absolute inset-0 bg-white/95" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Privacy, Our Priority
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We take your privacy seriously. Here's how we protect your data and respect your rights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {privacyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              GDPR Compliant • SOC 2 Certified • Privacy First
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
