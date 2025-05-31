"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:44px_44px] w-screen h-screen fixed"></div>

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-block mb-24">
              <span className="text-xl font-bold tracking-wider">JETA</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight">
              Color grading made{' '}
              <span className="relative inline-block text-gradient">
                effortless
                <motion.span
                  className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
              Transform your images with AI-powered color grading. No technical skills required.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button asChild size="lg" className="min-w-[200px] h-12 text-base rounded-full bg-white text-black hover:bg-white/90">
                <Link href="/workspace">
                  Start Creating
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[200px] h-12 text-base group">
                <Link href="#how-it-works">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-32"
          >
            <div className="relative rounded-xl overflow-hidden border border-border/10">
              <Image
                src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Jeta AI Color Grading"
                width={1200}
                height={675}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-12 py-8 rounded-lg bg-background/80 backdrop-blur-xl border border-border/10 max-w-lg">
                  <div className="h-12 w-full rounded bg-muted/80 border border-border/10 flex items-center px-6">
                    <p className="text-sm text-foreground/70">
                      Apply cinematic teal and orange color grade with moody shadows
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}