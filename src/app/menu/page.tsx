import { Navbar } from '@/components/store/navbar'
import { Footer } from '@/components/store/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const menuSections = [
  {
    title: 'Sandwiches',
    items: [
      { name: 'Sándwich de Prosciutto y Mozzarella', price: 185, description: 'Prosciutto di Parma, mozzarella fresca, arúgula y pesto de la casa.' },
      { name: 'Ciabatta de Roast Beef', price: 195, description: 'Roast beef premium, cebolla caramelizada, queso provolone y alioli de ajo.' },
      { name: 'Veggie Delice', price: 155, description: 'Vegetales a la parrilla, queso de cabra y reducción de balsámico en pan artesanal.' }
    ]
  },
  {
    title: 'Ensaladas y Bowls',
    items: [
      { name: 'Ensalada de Quinoa y Feta', price: 165, description: 'Quinoa orgánica, queso feta, tomates cherry, pepino y vinagreta de limón.' },
      { name: 'Bowl Mediterráneo', price: 175, description: 'Garbanzos, hummus, aceitunas kalamata, mix de verdes y aderezo tahini.' },
      { name: 'Ensalada César La Casita', price: 145, description: 'Lechuga romana fresca, crutones artesanales, parmesano y aderezo especial.' }
    ]
  },
  {
    title: 'Bebidas & Cafés',
    items: [
      { name: 'Cold Brew', price: 65, description: 'Café de especialidad extraído en frío por 12 horas.' },
      { name: 'Flat White', price: 55, description: 'Doble shot de espresso con leche cremosa.' },
      { name: 'Té Matcha Orgánico', price: 75, description: 'Matcha de grado ceremonial con leche de tu elección.' }
    ]
  }
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-casita-cream flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-6 mb-20">
           <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-casita-terracotta">Nuestra Cocina</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-serif font-bold text-casita-charcoal italic">Menú del Día</h1>
           <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed italic">
              Preparados diariamente con los ingredientes más frescos de nuestro market.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
           {menuSections.map((section) => (
             <div key={section.title} className="flex flex-col gap-10">
                <h2 className="text-3xl font-serif font-bold text-casita-olive border-b border-casita-olive/10 pb-4 italic">
                   {section.title}
                </h2>
                <div className="flex flex-col gap-8">
                   {section.items.map((item) => (
                      <div key={item.name} className="flex flex-col gap-2">
                         <div className="flex justify-between items-baseline gap-4">
                            <h3 className="text-xl font-serif font-bold text-casita-charcoal">{item.name}</h3>
                            <div className="flex-1 border-b border-dotted border-black/20" />
                            <span className="font-bold text-casita-terracotta">${item.price}</span>
                         </div>
                         <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                         </p>
                      </div>
                   ))}
                </div>
             </div>
           ))}
        </div>

        <div className="mt-32 p-12 bg-white rounded-none border border-black/5 shadow-sm flex flex-col items-center text-center gap-8">
           <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-serif font-bold text-casita-charcoal">¿Te gustaría algo especial?</h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                 También preparamos tablas de quesos y carnes frías personalizadas para tus eventos.
              </p>
           </div>
           <Link href="/market">
              <Button className="rounded-full h-14 px-12 bg-casita-charcoal hover:bg-casita-olive transition-all font-bold uppercase tracking-widest text-[10px]">
                 Ir al Market
              </Button>
           </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
