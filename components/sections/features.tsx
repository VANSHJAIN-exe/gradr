"use client"

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Sparkles, 
  Clock, 
  Zap, 
  Share2, 
  Palette, 
  FileText 
} from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Transformation",
    description: "Leverage advanced AI to transform your images with natural language prompts."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Instant Results",
    description: "Get professional-quality color grades in seconds, not hours."
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Endless Styles",
    description: "Create any look from cinematic to vintage, moody to vibrant."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "No Experience Required",
    description: "Achieve professional results without any color grading expertise."
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Easy Sharing",
    description: "Export and share your stunning photos with one click."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Save Your Prompts",
    description: "Store your favorite prompts and styles for future use."
  }
];

export function Features() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-background" id="features">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Powerful features for amazing results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jeta combines cutting-edge AI with intuitive design to make professional color grading accessible to everyone.
          </p>
        </motion.div>

        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-2 border-border/10 bg-background hover:bg-accent/5 hover:border-border/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}