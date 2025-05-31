"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative hover:bg-accent/80 transition-colors duration-200 hover:scale-105"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 ease-spring dark:-rotate-90 dark:scale-0 text-primary" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 ease-spring dark:rotate-0 dark:scale-100 text-primary" />
      <span className="sr-only">Toggle theme</span>
      
      {/* Animated highlight effect */}
      {theme === "dark" ? (
        <motion.span
          layoutId="theme-toggle-highlight"
          className="absolute inset-0 rounded-full bg-primary/20 dark:bg-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        />
      ) : (
        <motion.span
          layoutId="theme-toggle-highlight"
          className="absolute inset-0 rounded-full bg-primary/20 dark:bg-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        />
      )}
    </Button>
  )
}