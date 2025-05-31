"use client"

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Button,
  Input,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Label
} from '@/components/ui';
import { 
  Palette,
  Eye,
  EyeOff,
  Check
} from 'lucide-react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/workspace';
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Palette className="h-8 w-8 text-primary" />
              <span className="font-space-grotesk text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                  Jeta
                </span>
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Create your account</h1>
            <p className="text-muted-foreground">
              Start your journey with Jeta today
            </p>
          </div>
          
          <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Fill in your details to create a new account
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 1 ? (
                <form onSubmit={handleContinue} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Password must be at least 8 characters long
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Continue
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-2">
                    <p className="text-sm font-medium">Choose your plan</p>
                    <p className="text-xs text-muted-foreground">You can change or cancel anytime</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border border-primary/30 bg-primary/5 rounded-lg p-4 relative">
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <h3 className="font-medium">Free</h3>
                      <p className="text-sm text-muted-foreground mb-2">Basic access with limited features</p>
                      <p className="font-bold">$0 <span className="text-sm font-normal text-muted-foreground">/month</span></p>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer">
                      <h3 className="font-medium">Pro</h3>
                      <p className="text-sm text-muted-foreground mb-2">Advanced features for individuals</p>
                      <p className="font-bold">$12 <span className="text-sm font-normal text-muted-foreground">/month</span></p>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer">
                      <h3 className="font-medium">Team</h3>
                      <p className="text-sm text-muted-foreground mb-2">Collaboration features for teams</p>
                      <p className="font-bold">$49 <span className="text-sm font-normal text-muted-foreground">/month</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-4">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-xs">
                      I agree to the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                  
                  <div className="text-center">
                    <Button type="button" variant="ghost" size="sm" onClick={() => setStep(1)}>
                      Back
                    </Button>
                  </div>
                </form>
              )}
              
              <div className="mt-6 text-center text-sm">
                <p className="text-muted-foreground">
                  Already have an account?{' '}
                  <Link href="/login" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}