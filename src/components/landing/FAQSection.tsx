import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from 'next-intl';

export function FAQSection() {
  const t = useTranslations('faq');
  
  const translatedFaqs = [
    {
      questionKey: 'question1.question',
      answerKey: 'question1.answer',
    },
    {
      questionKey: 'question2.question',
      answerKey: 'question2.answer',
    },
    {
      questionKey: 'question3.question',
      answerKey: 'question3.answer',
    },
    {
      questionKey: 'question4.question',
      answerKey: 'question4.answer',
    },
    {
      questionKey: 'question5.question',
      answerKey: 'question5.answer',
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">{t('title')}</h2>
          <p className="mx-auto max-w-[700px] text-secondary-content md:text-xl/relaxed font-medium">
            {t('description')}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {translatedFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{t(faq.questionKey)}</AccordionTrigger>
                <AccordionContent>
                  {t(faq.answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
