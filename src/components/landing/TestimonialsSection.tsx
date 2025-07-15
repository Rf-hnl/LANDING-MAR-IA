import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "MAR-IA transformó nuestro proceso de ventas. Ahora cerramos un 30% más de tratos gracias a la automatización y el seguimiento inteligente.",
    name: "Ana Pérez",
    title: "Directora de Ventas, Tech Solutions",
    avatar: "AP",
    imgSrc: "https://placehold.co/100x100.png",
    dataAiHint: "woman portrait"
  },
  {
    quote: "La integración con WhatsApp es fantástica. Podemos atender a nuestros clientes de forma mucho más rápida y personalizada.",
    name: "Carlos Gómez",
    title: "CEO, Inova Marketing",
    avatar: "CG",
    imgSrc: "https://placehold.co/100x100.png",
    dataAiHint: "man portrait"
  },
  {
    quote: "Por fin tenemos todos nuestros leads en un solo lugar. El asistente de IA nos ayuda a identificar las mejores oportunidades al instante.",
    name: "Sofía Rodríguez",
    title: "Gerente Comercial, Creative Co.",
    avatar: "SR",
    imgSrc: "https://placehold.co/100x100.png",
    dataAiHint: "woman professional"
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Lo que dicen nuestros clientes</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground light:gray-500 md:text-xl/relaxed">
            Empresas como la tuya ya están viendo resultados increíbles con MAR-IA.
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
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full bg-card/80 border">
                    <CardContent className="flex flex-col items-center text-center justify-center p-6 space-y-4">
                      <p className="text-muted-foreground light:gray-500 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div className="flex items-center gap-4 mt-4">
                        <Avatar>
                          <AvatarImage src={testimonial.imgSrc} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground light:gray-500">{testimonial.title}</p>
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
