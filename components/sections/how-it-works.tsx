"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Upload, Type, Image as ImageIcon } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Upload Your Image",
    description: "Start by uploading the photo you want to enhance. Jeta supports all major image formats.",
    icon: <Upload className="h-5 w-5" />
  },
  {
    number: "02",
    title: "Describe Your Vision",
    description: "Tell Jeta what look you want using natural language. Be as creative or specific as you like.",
    icon: <Type className="h-5 w-5" />
  },
  {
    number: "03",
    title: "Get Amazing Results",
    description: "Within seconds, Jeta delivers your professionally color graded image ready to download and share.",
    icon: <ImageIcon className="h-5 w-5" />
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="how-it-works">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            How Jeta Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your images in three simple steps with our intuitive AI-powered workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-1 rounded-xl ${activeStep === index ? 'bg-gradient-to-r from-pink-500/30 to-violet-500/30' : ''}`}
              >
                <div 
                  className={`flex gap-6 p-6 rounded-lg border transition-all duration-300 ${
                    activeStep === index 
                      ? 'border-pink-500/50 bg-card shadow-lg' 
                      : 'border-border/50 bg-card/50 hover:border-pink-500/30'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeStep === index 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-muted-foreground">{step.number}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="mt-4 group">
                <a href="/workspace">
                  Try it yourself
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-violet-500/20 mix-blend-overlay" />
              <Image
                src="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Jeta in action"
                width={600}
                height={450}
                className="w-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent p-6">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-primary mb-2">Example Prompt</div>
                  <div className="p-3 rounded-md bg-card border border-border/60 backdrop-blur-sm mb-3">
                    <p className="text-sm">"Apply cinematic teal and orange look with rich shadows and vibrant highlights"</p>
                  </div>
                  <div className="h-1.5 bg-primary/60 rounded-full w-3/4 mb-2"></div>
                  <div className="h-1.5 bg-primary/30 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6">
              <div className="w-24 h-24 rounded-full border border-border/40 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-border/60"></div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-6 -left-6">
              <div className="w-20 h-20 rounded-full border border-border/40"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}