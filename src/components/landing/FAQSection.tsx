import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Es segura mi información en MAR-IA?",
    answer: "Totalmente. Utilizamos encriptación de extremo a extremo y cumplimos con los más altos estándares de seguridad de datos para proteger tu información y la de tus clientes.",
  },
  {
    question: "¿Qué tan difícil es integrar mis canales existentes?",
    answer: "Es muy sencillo. Nuestro proceso de onboarding te guía paso a paso para conectar tus cuentas de email, WhatsApp Business y otros canales en cuestión de minutos, sin necesidad de conocimientos técnicos.",
  },
  {
    question: "¿El asistente de IA realmente me ayudará a vender más?",
    answer: "Sí. El asistente de MAR-IA analiza tus interacciones y datos para darte sugerencias en tiempo real sobre qué leads priorizar, cuándo hacer seguimiento y qué argumentos de venta usar, aumentando tu efectividad.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer: "Ofrecemos soporte por email en todos nuestros planes. Los planes Profesional y Empresa cuentan con soporte prioritario por chat y un manager de cuenta dedicado para asegurar tu éxito.",
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer: "Por supuesto. Puedes actualizar o cambiar tu plan en cualquier momento desde el panel de tu cuenta para adaptarte a las necesidades cambiantes de tu negocio.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Preguntas Frecuentes</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground light:gray-500 md:text-xl/relaxed">
            Aquí encontrarás respuestas a las dudas más comunes sobre MAR-IA.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
