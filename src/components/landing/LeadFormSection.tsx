"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "../ui/card";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useTranslations } from 'next-intl';

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  company: z.string().min(2, { message: "El nombre de la empresa debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export function LeadFormSection() {
  const { toast } = useToast();
  const t = useTranslations('contact');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

    const { handleSubmit, loading, error } = useFormSubmission('formSubmissions');

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await handleSubmit(values);
      if (result.success) {
        toast({
          title: "¡Formulario Enviado!",
          description: "Gracias por tu interés. Nos pondremos en contacto contigo pronto.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Hubo un error al enviar el formulario. Por favor, intenta de nuevo.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error('Error:', err);
      toast({
        title: "Error",
        description: "Hubo un error al enviar el formulario. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-white">{t('title')}</h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed font-medium">
            {t('description')}
          </p>
        </div>
        <Card className="max-w-2xl mx-auto shadow-lg bg-white border border-gray-200">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">{t('fullName')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('namePlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">{t('company')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('companyPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">{t('email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('emailPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">{t('phone')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('phonePlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">{t('message')}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t('messagePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col items-center space-y-4">
                  <Button type="submit" size="lg" className="w-full sm:w-auto rounded-full" disabled={loading}>
                    {loading ? "Enviando..." : t('submit')}
                  </Button>
                  <p className="text-xs text-gray-600 font-medium">
                    {t('privacy')}
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
