import { Navbar } from '@/components/store/navbar'
import { Footer } from '@/components/store/footer'
import { ProductCard } from '@/components/store/product-card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Clock, Truck, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-casita-cream flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-casita-olive/5 rounded-full -z-10 blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="w-12 h-[1px] bg-casita-terracotta" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-casita-terracotta">Est. 1994</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-casita-charcoal">
              Sabores Artesanales,<br />
              <span className="italic text-casita-olive">en tu hogar.</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Curamos la mejor selección de productos nacionales e internacionales
              para tu cocina. Calidad, frescura y sabor en cada rincón de nuestra tienda.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
              <Link href="/market" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-14 px-10 bg-casita-charcoal hover:bg-casita-olive transition-all duration-300 text-sm font-bold uppercase tracking-widest rounded-none">
                  Comprar Ahora
                </Button>
              </Link>
              <Link href="/menu" className="w-full sm:w-auto text-sm font-bold uppercase tracking-widest hover:text-casita-terracotta transition-colors flex items-center gap-2">
                Ver Menú del Día <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
             <Image
               src="https://images.unsplash.com/photo-1626078299034-9615c348d68d?q=80&w=2000"
               alt="Gourmet Food Selection"
               fill
               className="object-cover"
             />
             {/* Float badge */}
             <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 border border-black/5 shadow-lg flex items-center gap-4 max-w-xs animate-bounce-slow">
                <div className="w-12 h-12 bg-casita-terracotta/10 rounded-full flex items-center justify-center text-casita-terracotta">
                   <Star className="h-6 w-6" />
                </div>
                <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-casita-terracotta">Selección Premium</p>
                   <p className="text-sm font-serif font-bold text-casita-charcoal">Más de 500 productos exclusivos</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col gap-4">
             <h2 className="text-4xl font-serif font-bold text-casita-charcoal">Las Colecciones</h2>
             <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-medium italic">Descubre nuestros departamentos</p>
             <div className="w-20 h-1 bg-casita-terracotta mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Deli', img: 'https://images.unsplash.com/photo-1544434919-47024509ae27?q=80&w=500', href: '/deli' },
              { name: 'Repostería', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=500', href: '/bakery' },
              { name: 'Market', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500', href: '/market' },
              { name: 'Vinos', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=500', href: '/wine' },
            ].map((col) => (
              <Link key={col.name} href={col.href} className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-black/5 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <Image src={col.img} alt={col.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                   <h3 className="text-2xl font-serif font-bold mb-2">{col.name}</h3>
                   <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explorar <ArrowRight className="inline h-3 w-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 border-y border-black/5 bg-casita-cream/50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
           {[
             { icon: Clock, title: 'Frescura Diaria', desc: 'Productos frescos cada mañana' },
             { icon: Truck, title: 'Envíos Rápidos', desc: 'Entregas el mismo día' },
             { icon: ShieldCheck, title: 'Calidad Premium', desc: 'Selección rigurosa' },
             { icon: Star, title: 'Atención 5 Estrellas', desc: 'Servicio personalizado' },
           ].map((badge) => (
             <div key={badge.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-full bg-casita-olive/10 flex items-center justify-center text-casita-olive">
                   <badge.icon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-casita-charcoal uppercase tracking-wider">{badge.title}</h4>
                <p className="text-xs text-muted-foreground">{badge.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* New Arrivals Preview - Dynamic section will go here */}
      <section className="py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
               <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-casita-terracotta">Lo más nuevo</p>
                  <h2 className="text-4xl font-serif font-bold text-casita-charcoal">Novedades Recientes</h2>
               </div>
               <Link href="/market" className="text-sm font-bold uppercase tracking-widest hover:text-casita-terracotta transition-colors flex items-center gap-2 border-b-2 border-transparent hover:border-casita-terracotta pb-1">
                  Ver todo el catálogo <ArrowRight className="h-4 w-4" />
               </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Placeholder products for now - should fetch from DB */}
               {[
                 { id: '1', name: 'Aceite de Oliva Extra Virgen', price: 24.99, category: 'Deli', stock: 12 },
                 { id: '2', name: 'Café de Especialidad - Chiapas', price: 18.50, category: 'Cafetería', stock: 5 },
                 { id: '3', name: 'Queso Manchego Curado', price: 32.00, category: 'Lácteos', stock: 0 },
                 { id: '4', name: 'Vino Tinto - Valle de Guadalupe', price: 45.00, category: 'Vinos', stock: 24 },
               ].map((prod) => (
                 <ProductCard key={prod.id} {...prod} />
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </div>
  )
}
