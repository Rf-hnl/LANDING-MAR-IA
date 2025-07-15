"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Autoplay from "embla-carousel-autoplay";

const demoImages = [
  { src: "https://res.cloudinary.com/dfbwpgiev/image/upload/v1752609224/ChatGPT_Image_Jul_15_2025_02_53_21_PM_g1cgxi.png", alt: "Dashboard View", dataAiHint: "dashboard analytics" },
  { src: "https://res.cloudinary.com/dfbwpgiev/image/upload/v1752608748/Screenshot_2025-07-15_at_2.44.30_PM_ko0uk5.png", alt: "Automation Builder View", dataAiHint: "workflow builder" },
];

export function DemoSection() {
  const t = useTranslations('demo');
  const [autoplayPlugin] = useState(() => Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section id="demo" className="py-12 sm:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-white">{t('title')}</h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed font-medium">
            {t('description')}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Carousel 
            className="w-full"
            plugins={[autoplayPlugin]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {demoImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-transparent border-0">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={450}
                          data-ai-hint={image.dataAiHint}
                          className="rounded-lg object-cover w-full aspect-video shadow-2xl"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500/20 via-transparent to-orange-600/10 pointer-events-none"></div>
                        <div className="absolute inset-0 rounded-lg shadow-[0_0_50px_rgba(251,146,60,0.3)]"></div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
            <CarouselNext className="mr-14 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
          </Carousel>
        </div>
        <div className="text-center mt-8">
          <Button size="lg" className="rounded-full bg-gray-900 text-white hover:bg-gray-800 border border-gray-700" asChild>
            <a href="#contact">{t('viewFullDemo')}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
