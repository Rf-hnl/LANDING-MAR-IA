import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from 'next-intl';

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  
  const translatedTestimonials = [
    {
      quoteKey: 'testimonial1.quote',
      nameKey: 'testimonial1.name',
      titleKey: 'testimonial1.title',
      avatar: "AP",
      imgSrc: "https://placehold.co/100x100.png",
      dataAiHint: "woman portrait"
    },
    {
      quoteKey: 'testimonial2.quote',
      nameKey: 'testimonial2.name', 
      titleKey: 'testimonial2.title',
      avatar: "CG",
      imgSrc: "https://placehold.co/100x100.png",
      dataAiHint: "man portrait"
    },
    {
      quoteKey: 'testimonial3.quote',
      nameKey: 'testimonial3.name',
      titleKey: 'testimonial3.title',
      avatar: "SR",
      imgSrc: "https://placehold.co/100x100.png",
      dataAiHint: "woman professional"
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">{t('title')}</h2>
          <p className="mx-auto max-w-[700px] text-secondary-content md:text-xl/relaxed font-medium">
            {t('description')}
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {translatedTestimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full bg-white/30 border">
                    <CardContent className="flex flex-col items-center text-center justify-center p-6 space-y-4">
                      <p className="text-secondary-content italic font-medium">&ldquo;{t(testimonial.quoteKey)}&rdquo;</p>
                      <div className="flex items-center gap-4 mt-4">
                        <Avatar>
                          <AvatarImage src={testimonial.imgSrc} alt={t(testimonial.nameKey)} data-ai-hint={testimonial.dataAiHint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{t(testimonial.nameKey)}</p>
                          <p className="text-sm text-muted-content font-medium">{t(testimonial.titleKey)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
