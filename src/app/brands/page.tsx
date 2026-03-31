import { Navbar } from '@/components/store/navbar'
import { Footer } from '@/components/store/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-casita-cream flex flex-col">
      <Navbar />
      <main className="flex-1 pt-48 pb-24 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-serif font-bold text-casita-charcoal mb-6">Nuestras Marcas</h1>
        <p className="text-xl text-muted-foreground mb-12 italic">
          Trabajamos con productores locales y marcas internacionales de prestigio. Conoce sus historias muy pronto.
        </p>
        <Link href="/market">
          <Button className="rounded-full bg-casita-terracotta hover:bg-casita-olive px-8 py-6 text-sm font-bold uppercase tracking-widest">Explorar el Market</Button>
        </Link>
      </main>
      <Footer />
    </div>
  )
}
