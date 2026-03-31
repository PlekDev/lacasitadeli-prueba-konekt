'use client'

import { Navbar } from '@/components/store/navbar'
import { Footer } from '@/components/store/footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Search, Mail, Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    category: 'Pedidos y Envíos',
    questions: [
      {
        q: '¿A qué zonas realizan envíos?',
        a: 'Realizamos envíos a toda la Ciudad de México y Área Metropolitana. Para envíos nacionales, por favor contáctanos directamente para cotizar la mejor opción de transporte refrigerado si es necesario.'
      },
      {
        q: '¿Cuánto tiempo tarda en llegar mi pedido?',
        a: 'Los pedidos realizados antes de las 12:00 PM se entregan el mismo día. Los pedidos posteriores se programan para la mañana del día siguiente.'
      },
      {
        q: '¿Cuál es el costo de envío?',
        a: 'El envío es gratuito en compras mayores a $500 MXN. Para montos menores, el costo estándar es de $85 MXN dentro de nuestra zona de cobertura principal.'
      }
    ]
  },
  {
    category: 'Productos y Calidad',
    questions: [
      {
        q: '¿Sus productos son frescos?',
        a: 'Absolutamente. Recibimos suministros diariamente y nuestra repostería se hornea cada mañana. Todos los productos deli se mantienen bajo estrictos controles de temperatura.'
      },
      {
        q: '¿Ofrecen opciones para dietas especiales?',
        a: 'Sí, contamos con una selección de productos gluten-free, keto-friendly y opciones veganas tanto en nuestro market como en nuestra repostería.'
      },
      {
        q: '¿Cómo garantizan la calidad de los productos importados?',
        a: 'Trabajamos directamente con importadores certificados y mantenemos la cadena de frío desde el origen hasta tu mesa.'
      }
    ]
  },
  {
    category: 'Pagos y Facturación',
    questions: [
      {
        q: '¿Qué métodos de pago aceptan?',
        a: 'Aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias y pagos a través de PayPal.'
      },
      {
        q: '¿Puedo solicitar factura de mi compra?',
        a: 'Sí, puedes solicitar tu factura al momento de finalizar tu compra o enviando un correo a facturacion@lacasitadeli.com con tu número de pedido.'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-casita-cream flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
           <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-casita-terracotta">Centro de Ayuda</span>
           </div>
           <h1 className="text-5xl md:text-6xl font-serif font-bold text-casita-charcoal">¿Preguntas Frecuentes?</h1>
           <p className="text-muted-foreground text-sm max-w-lg">
              Todo lo que necesitas saber sobre La Casita Deli. Si no encuentras la respuesta que buscas, nuestro equipo está listo para ayudarte.
           </p>

           <div className="relative w-full max-w-md group mt-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-casita-terracotta transition-colors" />
              <input
                type="text"
                placeholder="Busca un tema o pregunta..."
                className="w-full pl-12 pr-6 py-4 bg-white border border-black/5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-casita-terracotta/20 focus:border-casita-terracotta transition-all shadow-sm"
              />
           </div>
        </div>

        {/* FAQ Content */}
        <div className="flex flex-col gap-16">
           {faqs.map((section) => (
              <div key={section.category} className="flex flex-col gap-6">
                 <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-casita-terracotta border-b border-casita-terracotta/20 pb-4">
                    {section.category}
                 </h2>
                 <Accordion type="single" collapsible className="w-full">
                    {section.questions.map((faq, index) => (
                       <AccordionItem key={index} value={`item-${index}`} className="border-black/5">
                          <AccordionTrigger className="text-left font-serif font-bold text-lg hover:text-casita-terracotta transition-colors py-6">
                             {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                             {faq.a}
                          </AccordionContent>
                       </AccordionItem>
                    ))}
                 </Accordion>
              </div>
           ))}
        </div>

        {/* Contact Section */}
        <div className="mt-32 p-12 bg-white rounded-3xl border border-black/5 shadow-xl flex flex-col items-center text-center gap-8 relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute -top-12 -right-12 w-48 h-48 bg-casita-olive/5 rounded-full" />
           <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-casita-terracotta/5 rounded-full" />

           <div className="w-16 h-16 bg-casita-olive/10 rounded-2xl flex items-center justify-center text-casita-olive">
              <MessageSquare className="h-8 w-8" />
           </div>

           <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-serif font-bold text-casita-charcoal">¿Aún tienes dudas?</h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                 Nuestro equipo de atención al cliente está disponible de Lunes a Sábado de 9:00 AM a 7:00 PM.
              </p>
           </div>

           <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button className="rounded-full h-12 px-8 bg-casita-charcoal hover:bg-casita-olive transition-all font-bold uppercase tracking-widest text-[10px] gap-2">
                 <Mail className="h-4 w-4" /> Envíanos un correo
              </Button>
              <Button variant="outline" className="rounded-full h-12 px-8 border-black/10 font-bold uppercase tracking-widest text-[10px] gap-2">
                 <Phone className="h-4 w-4" /> Llámanos ahora
              </Button>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
