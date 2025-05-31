"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Jeta's AI color grading work?",
    answer: "Jeta uses advanced machine learning models trained on thousands of professionally color graded images. When you input a natural language prompt, our AI analyzes your image and applies the appropriate color adjustments to achieve the look you described. The AI takes into account lighting, tones, contrast, and other factors to create a professional result."
  },
  {
    question: "Do I need technical knowledge to use Jeta?",
    answer: "Not at all! Jeta is designed to be user-friendly and accessible to everyone. Simply upload your image and describe the look you want in plain English. Our AI handles all the technical aspects of color grading for you, so you can focus on your creative vision."
  },
  {
    question: "What image formats does Jeta support?",
    answer: "Jeta supports all major image formats including JPEG, PNG, TIFF, and RAW files from most camera manufacturers. For optimal results, we recommend using high-quality source images with good exposure."
  },
  {
    question: "Can I save and reuse my favorite color grading styles?",
    answer: "Yes! Jeta allows you to save your favorite prompts and styles to your personal library. This makes it easy to maintain a consistent look across multiple images or projects. You can also share your saved styles with team members if you have a Team or Enterprise plan."
  },
  {
    question: "What are the pricing plans for Jeta?",
    answer: "Jeta offers flexible pricing options including a free tier with basic features, a Pro plan for individual creators, and Team/Enterprise plans for organizations. Visit our pricing page for detailed information on features and limitations for each plan."
  },
  {
    question: "Can I use Jeta for commercial projects?",
    answer: "Absolutely! Images processed with Jeta are yours to use however you like, including for commercial purposes. There are no watermarks or usage restrictions on your exported images."
  }
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Jeta and how it can transform your images.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="max-w-3xl mx-auto divide-y divide-border"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
              >
                <AccordionItem value={`item-${index}`} className="border-2 border-border/10 bg-background hover:bg-accent/5 rounded-lg px-4 transition-all duration-300">
                  <AccordionTrigger className="text-left py-4 hover:no-underline group">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground/80 pb-4 animate-accordion-down">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}