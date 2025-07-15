'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getImprovedCopy } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Loader2, Sparkles } from "lucide-react";
import { type ImproveLandingPageCopyOutput } from "@/ai/flows/improve-landing-page-copy";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  heroTitle: z.string().min(1, 'El título del hero es requerido.'),
  heroSubtitle: z.string().min(1, 'El subtítulo del hero es requerido.'),
  featureDescriptions: z.string().min(1, 'Las descripciones de características son requeridas.'),
  callToAction: z.string().min(1, 'La llamada a la acción es requerida.'),
});

export function CopyImprover() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ImproveLandingPageCopyOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      heroTitle: "Impulsa tus ventas con Inteligencia Artificial",
      heroSubtitle: "El AGENTE DE IA de ventas inteligente diseñado para pymes de habla hispana",
      featureDescriptions: "Gestión de leads inteligente\nAutomatización de tareas\nIntegración multicanal",
      callToAction: "Solicita una Demo",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    const featureDescriptionsArray = values.featureDescriptions.split('\n').filter(line => line.trim() !== '');

    const response = await getImprovedCopy({
        ...values,
        featureDescriptions: featureDescriptionsArray
    });

    setIsLoading(false);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error || "No se pudo mejorar el copy.",
      });
    }
  }

  const handleReset = () => {
    form.reset();
    setResult(null);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-4 right-4 h-16 w-16 rounded-full shadow-lg" size="icon">
          <Wand2 className="h-7 w-7" />
          <span className="sr-only">Mejorar Copy con IA</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] grid-rows-[auto,1fr,auto]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="text-primary"/>
            Optimizador de Copy con IA
          </DialogTitle>
          <DialogDescription>
            Introduce el texto de tu landing page y deja que nuestra IA te dé sugerencias para aumentar la conversión.
          </DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 overflow-y-auto p-1 pr-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                 <FormField control={form.control} name="heroTitle" render={({ field }) => (
                    <FormItem><FormLabel>Título Principal</FormLabel><FormControl><Textarea rows={2} {...field} /></FormControl><FormMessage /></FormItem>
                 )} />
                 <FormField control={form.control} name="heroSubtitle" render={({ field }) => (
                    <FormItem><FormLabel>Subtítulo</FormLabel><FormControl><Textarea rows={3} {...field} /></FormControl><FormMessage /></FormItem>
                 )} />
                 <FormField control={form.control} name="featureDescriptions" render={({ field }) => (
                    <FormItem><FormLabel>Características (una por línea)</FormLabel><FormControl><Textarea rows={4} {...field} /></FormControl><FormMessage /></FormItem>
                 )} />
                 <FormField control={form.control} name="callToAction" render={({ field }) => (
                    <FormItem><FormLabel>Llamada a la Acción (CTA)</FormLabel><FormControl><Textarea rows={1} {...field} /></FormControl><FormMessage /></FormItem>
                 )} />
                 <div className="flex gap-2 pt-2">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizando...</> : <>Optimizar Copy</>}
                    </Button>
                    <Button type="button" variant="outline" onClick={handleReset} disabled={isLoading}>
                        Reiniciar
                    </Button>
                 </div>
              </form>
            </Form>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                    <Sparkles className="h-5 w-5"/>
                    Sugerencias de la IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="flex items-center justify-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                )}
                {result && (
                  <div className="space-y-4 text-sm">
                    <div>
                        <h4 className="font-semibold">Título Principal</h4>
                        <p className="text-muted-foreground light:gray-500">{result.improvedHeroTitle}</p>
                    </div>
                    <Separator/>
                    <div>
                        <h4 className="font-semibold">Subtítulo</h4>
                        <p className="text-muted-foreground light:gray-500">{result.improvedHeroSubtitle}</p>
                    </div>
                    <Separator/>
                    <div>
                        <h4 className="font-semibold">Características</h4>
                        <ul className="list-disc list-inside text-muted-foreground light:gray-500">
                            {result.improvedFeatureDescriptions.map((desc, i) => <li key={i}>{desc}</li>)}
                        </ul>
                    </div>
                    <Separator/>
                    <div>
                        <h4 className="font-semibold">Llamada a la Acción (CTA)</h4>
                        <p className="text-muted-foreground light:gray-500">{result.improvedCallToAction}</p>
                    </div>
                  </div>
                )}
                {!isLoading && !result && (
                    <div className="text-center text-muted-foreground light:gray-500 h-64 flex flex-col items-center justify-center">
                        <p>Los resultados aparecerán aquí.</p>
                    </div>
                )}
              </CardContent>
            </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
