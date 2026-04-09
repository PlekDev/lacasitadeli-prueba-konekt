import { Navbar } from '@/components/store/navbar'
import { Footer } from '@/components/store/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const brands = [
  {
    name: 'La Boqueria',
    origin: 'España',
    description: 'Especialistas en embutidos ibéricos de la más alta calidad, siguiendo procesos tradicionales de curación.',
    tag: 'Charcutería Premium'
  },
  {
    name: 'Serrano',
    origin: 'México / España',
    description: 'Tradición quesera que combina técnicas europeas con la riqueza de los ingredientes locales.',
    tag: 'Quesos Artesanales'
  },
  {
    name: 'Iberica',
    origin: 'España',
    description: 'Selección de los mejores productos de la península: aceites, conservas y delicatessen.',
    tag: 'Gourmet Essentials'
  },
  {
    name: 'Grand Mère',
    origin: 'Francia',
    description: 'La esencia de la repostería francesa en tu mesa. Mantequillas y harinas de grado superior.',
    tag: 'Boulangerie'
  },
  {
    name: 'Casa de Alba',
    origin: 'España',
    description: 'Productos de las fincas de una de las casas más aristocráticas de Europa: aceite de oliva virgen extra único.',
    tag: 'Aceites & Reservas'
  },
  {
    name: 'O-Med',
    origin: 'España',
    description: 'Innovación y tradición en vinagres y aceites premiados internacionalmente por su pureza.',
    tag: 'Condimentos'
  }
]

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-casita-cream flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-6 mb-20">
           <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-casita-terracotta">Nuestros Aliados</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-serif font-bold text-casita-charcoal">Marcas que Inspiran</h1>
           <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed italic mt-4">
              Colaboramos exclusivamente con productores que comparten nuestra pasión por la excelencia y la honestidad en el producto.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {brands.map((brand) => (
              <div key={brand.name} className="p-10 bg-white border border-black/5 flex flex-col gap-6 hover:border-casita-terracotta/20 transition-all group">
                 <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{brand.origin}</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest bg-casita-olive/10 text-casita-olive px-2 py-0.5 rounded-full">{brand.tag}</span>
                 </div>
                 <h2 className="text-4xl font-serif font-bold text-casita-charcoal group-hover:text-casita-terracotta transition-colors">{brand.name}</h2>
                 <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {brand.description}
                 </p>
                 <div className="mt-auto pt-6 border-t border-black/5">
                    <Link href={`/market?search=${brand.name}`} className="text-[10px] font-bold uppercase tracking-widest text-casita-charcoal hover:text-casita-terracotta transition-colors">
                       Explorar Productos
                    </Link>
                 </div>
              </div>
           ))}
        </div>

        <div className="mt-32 p-16 bg-casita-charcoal text-white text-center flex flex-col items-center gap-8">
           <h2 className="text-4xl font-serif font-bold italic">¿Eres productor?</h2>
           <p className="text-white/60 max-w-lg leading-relaxed italic">
              Siempre estamos en busca de nuevos sabores y productos excepcionales para nuestra comunidad.
           </p>
           <Button className="rounded-full bg-white text-casita-charcoal hover:bg-casita-cream px-12 h-14 font-bold uppercase tracking-widest text-[10px]">
              Contáctanos
           </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
