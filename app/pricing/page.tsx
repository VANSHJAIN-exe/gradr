"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for trying out Jeta',
    features: [
      'Process up to 10 images/month',
      'Basic color grading presets',
      'Standard quality exports',
      'Community support'
    ],
    cta: 'Get Started',
    href: '/signup',
    popular: false
  },
  {
    name: 'Pro',
    price: '19',
    description: 'Best for professional creators',
    features: [
      'Process up to 100 images/month',
      'Advanced color grading presets',
      'High quality exports',
      'Priority support',
      'Custom presets',
      'Batch processing'
    ],
    cta: 'Start Free Trial',
    href: '/signup?plan=pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '49',
    description: 'For teams and businesses',
    features: [
      'Unlimited image processing',
      'Premium color grading presets',
      'Ultra HD exports',
      'Dedicated support',
      'API access',
      'Custom integration',
      'Team collaboration'
    ],
    cta: 'Contact Sales',
    href: '/contact',
    popular: false
  }
];

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <div className="min-h-screen pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] dark:opacity-[0.2] -z-10" />
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm ${!annualBilling ? 'text-foreground' : 'text-muted-foreground'}`}>
            Monthly billing
          </span>
          <button
            onClick={() => setAnnualBilling(!annualBilling)}
            className="relative w-16 h-8 rounded-full bg-primary/10 transition-colors hover:bg-primary/20"
          >
            <div
              className={`absolute top-1 w-6 h-6 rounded-full bg-primary transition-transform transform ${annualBilling ? 'left-9' : 'left-1'}`}
            />
          </button>
          <span className={`text-sm ${annualBilling ? 'text-foreground' : 'text-muted-foreground'}`}>
            Annual billing
            <span className="ml-1.5 text-xs text-primary">Save 20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl ${tier.popular ? 'ring-2 ring-blue-500 dark:ring-blue-400 scale-105 md:scale-110' : 'ring-1 ring-gray-200 dark:ring-gray-800'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-b-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">${annualBilling ? (Number(tier.price) * 0.8).toFixed(0) : tier.price}</span>
                    <span className="text-muted-foreground mb-1">/month</span>
                  </div>
                  {annualBilling && (
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="line-through">${tier.price}</span>
                      <span className="text-gradient ml-2">Save 20%</span>
                    </p>
                  )}
                </div>
                
                <Button 
                  className="w-full group hover:scale-[1.02] transition-transform duration-300" 
                  variant={tier.popular ? 'default' : 'outline'}
                  asChild
                >
                  <a href={tier.href}>
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
              
              <div className="border-t border-border/50 p-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="body-base text-muted-foreground mb-8">
            Can't find what you're looking for? {' '}
            <a href="/contact" className="text-gradient hover:underline">Contact our support team</a>
          </p>
          
          <div className="grid gap-6 text-left">
            <div className="p-6 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-blue-500 dark:hover:ring-blue-400 transition-all duration-300">
              <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">We accept all major credit cards, PayPal, and wire transfers for enterprise customers.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-blue-500 dark:hover:ring-blue-400 transition-all duration-300">
              <h3 className="font-medium mb-2">Can I change my plan later?</h3>
              <p className="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-blue-500 dark:hover:ring-blue-400 transition-all duration-300">
              <h3 className="font-medium mb-2">What happens after my trial ends?</h3>
              <p className="text-muted-foreground text-sm">After your 14-day trial, you'll be automatically switched to your chosen plan. Don't worry, we'll remind you before it ends.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}