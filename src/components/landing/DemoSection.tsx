import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const demoImages = [
  { src: "https://placehold.co/800x450.png", alt: "Dashboard View", dataAiHint: "dashboard analytics" },
  { src: "https://placehold.co/800x450.png", alt: "Lead Management View", dataAiHint: "crm interface" },
  { src: "https://res.cloudinary.com/dfbwpgiev/image/upload/v1752608748/Screenshot_2025-07-15_at_2.44.30_PM_ko0uk5.png", alt: "Automation Builder View", dataAiHint: "workflow builder" },
];

export function DemoSection() {
  return (
    <section id="demo" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ve MAR-IA en acción</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground light:gray-500 md:text-xl/relaxed">
            Descubre cómo nuestra plataforma puede transformar tu manera de vender.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {demoImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-transparent border-0">
                    <CardContent className="p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={450}
                        data-ai-hint={image.dataAiHint}
                        className="rounded-lg object-cover w-full aspect-video"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14" />
            <CarouselNext className="mr-14" />
          </Carousel>
        </div>
        <div className="text-center mt-8">
          <Button size="lg" className="rounded-full" asChild>
            <a href="#contact">Ver Demo Completa</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
