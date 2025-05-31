"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const showcaseItems = [
  {
    id: 1,
    title: "Cinematic Orange & Teal",
    prompt: "Apply cinematic orange and teal color grade with deep shadows",
    beforeImage: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    afterImage: "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Vintage Film",
    prompt: "Create vintage film look with faded colors and subtle grain",
    beforeImage: "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    afterImage: "https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Vibrant Summer",
    prompt: "Enhance with vibrant summer tones and natural light boost",
    beforeImage: "https://images.pexels.com/photos/753770/pexels-photo-753770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    afterImage: "https://images.pexels.com/photos/2097628/pexels-photo-2097628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(50);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const container = document.getElementById('compare-container');
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    
    setPosition(Math.min(Math.max(pos, 0), 100));
  };

  const currentItem = showcaseItems[activeIndex];

  return (
    <section className="py-24 relative" id="showcase">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none w-full h-full"></div>
      <div className="container px-4 mx-auto relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-medium mb-4">
            See it in action
          </h2>
          <p className="text-muted-foreground">
            Compare the before and after results using our AI-powered color grading
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-lg overflow-hidden bg-black"
          >
            <div 
              id="compare-container"
              className="relative aspect-video select-none"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleMouseMove}
            >
              {/* After image */}
              <div className="absolute inset-0">
                <Image 
                  src={currentItem.afterImage}
                  alt="After"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Before image */}
              <div 
                className="absolute inset-0 overflow-hidden" 
                style={{ width: `${position}%` }}
              >
                <Image 
                  src={currentItem.beforeImage}
                  alt="Before"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Divider line */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
                style={{ left: `${position}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/90 shadow-lg" />
              </div>
              
              {/* Labels */}
              <div className="absolute bottom-4 left-4 px-2 py-1 rounded-md bg-black/70 text-white text-sm">
                Before
              </div>
              <div className="absolute bottom-4 right-4 px-2 py-1 rounded-md bg-black/70 text-white text-sm">
                After
              </div>
            </div>

            <div className="absolute top-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full pointer-events-auto bg-white/90 hover:bg-white"
                onClick={() => setActiveIndex((prev) => (prev === 0 ? showcaseItems.length - 1 : prev - 1))}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full pointer-events-auto bg-white/90 hover:bg-white"
                onClick={() => setActiveIndex((prev) => (prev === showcaseItems.length - 1 ? 0 : prev + 1))}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <div className="mt-8">
            <div className="flex justify-center gap-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    activeIndex === index ? "bg-foreground" : "bg-foreground/20"
                  )}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">{currentItem.prompt}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}