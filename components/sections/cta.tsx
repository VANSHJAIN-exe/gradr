"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent opacity-50"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-2xl border-2 border-border/10 bg-muted/50 dark:bg-muted/30 backdrop-blur-sm hover:bg-accent/5 hover:border-border/30 transition-all duration-300 shadow-lg hover:shadow-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 leading-tight">
            Ready to transform your images with{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">AI-powered</span>
              <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 rounded-full opacity-70"></span>
            </span>
            {' '}color grading?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join thousands of creators who are elevating their visual content with Jeta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/workspace">
                Try for Free
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:bg-accent/80 transition-colors duration-200">
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. Start with our free plan today.
          </p>
        </div>
      </motion.div>
    </section>
  );
}