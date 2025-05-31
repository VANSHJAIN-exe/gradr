"use client"

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Photographer",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Jeta has completely transformed my workflow. What used to take me hours in Lightroom now takes seconds. The AI understands exactly what I'm trying to achieve.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Content Creator",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "As someone who isn't tech-savvy, Jeta has been a game-changer. I can create professional-looking content for my social media without complicated software.",
    rating: 5
  },
  {
    id: 3,
    name: "Alex Rivera",
    role: "Filmmaker",
    avatar: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The cinematic presets in Jeta are fantastic. We use it for quick mockups that previously would have required sending to our colorist. Highly recommended!",
    rating: 4
  },
  {
    id: 4,
    name: "Jessica Lee",
    role: "Marketing Manager",
    avatar: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Our marketing team has been using Jeta to maintain consistent brand aesthetics across all our visuals. The ability to save and reuse prompts is invaluable.",
    rating: 5
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:44px_44px] opacity-50"></div>
      
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            What our users say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creative professionals who have transformed their workflow with Jeta.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
              }}
            >
              <Card className="h-full border-2 border-border/10 bg-background hover:bg-accent/5 hover:border-border/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex space-x-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 transition-colors duration-200 ${
                            i < testimonial.rating 
                              ? "text-yellow-500 fill-yellow-500 dark:text-yellow-400 dark:fill-yellow-400" 
                              : "text-muted/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <div className="py-6 px-8 rounded-xl border-2 border-border/10 bg-background hover:bg-accent/5 inline-block mx-auto transition-all duration-300">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500 dark:text-yellow-400 dark:fill-yellow-400" />
              <span className="text-foreground">4.9/5</span>
            </div>
            <p className="text-sm text-muted-foreground/80 mt-1">Average rating from 10,000+ users</p>
          </div>
        </div>
      </div>
    </section>
  );
}