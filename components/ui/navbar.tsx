"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./button";
import { ThemeToggle } from "../theme-toggle";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/5 backdrop-blur-sm"
    >
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-lg tracking-wider font-bold">JETA</span>
          </Link>

          <nav className="hidden md:flex items-center justify-center space-x-12 absolute left-1/2 -translate-x-1/2">
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Pricing
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Features
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <ThemeToggle className="hover:bg-accent/80 transition-colors duration-200" />
            <Link href="/login">
              <Button variant="ghost" className="text-sm px-6 hover:bg-accent/80 transition-colors duration-200">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="text-sm px-6 rounded-full bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}