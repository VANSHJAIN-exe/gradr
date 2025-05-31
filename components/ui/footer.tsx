"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 mt-auto border-t border-border/5 bg-gradient-to-b from-transparent to-black/5"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-gradient">JETA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform your images with AI-powered color grading. Create stunning visuals with just a few clicks.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold mb-6 text-gradient-subtle">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/changelog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold mb-6 text-gradient-subtle">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold mb-6 text-gradient-subtle">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-muted-foreground text-glow">Made with love by</span>
              <motion.span
                className="relative inline-block px-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">Vansh</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-sm"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              <span className="text-muted-foreground">&</span>
              <motion.span
                className="relative inline-block px-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">Shikhar</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-sm"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Jeta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}