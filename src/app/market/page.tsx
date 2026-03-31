'use client'

import { Navbar } from '@/components/store/navbar'
import { Footer } from '@/components/store/footer'
import { ProductCard } from '@/components/store/product-card'
import { useState, useEffect } from 'react'
import { Search, SlidersHorizontal, ChevronDown, LayoutGrid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function MarketPage() {
  const [products, setProducts] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [locationId, setLocationId] = useState<string | null>(null)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch('/api/locations')
        const data = await res.json()
        if (data.success && data.data.length > 0) {
          const marketLoc = data.data.find((l: any) => l.name === 'Casita Market')
          setLocationId(marketLoc ? marketLoc.id : data.data[0].id)
        }
      } catch (err) {
        console.error('Error fetching locations:', err)
      }
    }
    fetchLocation()
  }, [])

  useEffect(() => {
    if (!locationId) return

    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          fetch(`/api/products?locationId=${locationId}`),
          fetch('/api/categories')
        ])

        const prodData = await prodRes.json()
        const catData = await catRes.json()

        if (prodData.success) setProducts(prodData.data)
        if (catData.success) setCategories(catData.data)
      } catch (err) {
        console.error('Error fetching market data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [locationId])

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !selectedCategory || p.categoryId === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-casita-cream flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-4 mb-12">
           <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-casita-terracotta">La Casita Market</span>
           </div>
           <h1 className="text-5xl font-serif font-bold text-casita-charcoal">Curated Selection</h1>
           <p className="text-muted-foreground text-sm max-w-2xl">
              Nuestra tienda ofrece una selección premium de ingredientes artesanales,
              importaciones exclusivas y lo mejor del campo local.
           </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-black/5 pb-8">
           <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-casita-terracotta transition-colors" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full pl-12 pr-6 py-3 bg-white border border-black/5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-casita-terracotta/20 focus:border-casita-terracotta transition-all shadow-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
           </div>

           <div className="flex items-center gap-4 w-full md:w-auto">
              <Button
                variant="outline"
                className="flex-1 md:flex-none gap-2 rounded-full border-black/10 hover:border-casita-terracotta hover:text-casita-terracotta transition-all"
                onClick={() => setShowFilters(!showFilters)}
              >
                 <SlidersHorizontal className="h-4 w-4" />
                 Filtros
              </Button>
              <div className="flex items-center bg-white border border-black/10 rounded-full p-1 shadow-sm">
                 <button className="p-2 bg-casita-charcoal text-white rounded-full">
                    <LayoutGrid className="h-4 w-4" />
                 </button>
                 <button className="p-2 hover:text-casita-terracotta rounded-full">
                    <List className="h-4 w-4" />
                 </button>
              </div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
           {showFilters && (
              <aside className="lg:w-64 flex flex-col gap-10">
                 <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-casita-charcoal">Categorías</h3>
                    <div className="flex flex-col gap-3">
                       <button
                         className={cn(
                           "text-sm font-medium text-left transition-colors",
                           selectedCategory === null ? "text-casita-terracotta" : "text-muted-foreground hover:text-casita-charcoal"
                         )}
                         onClick={() => setSelectedCategory(null)}
                       >
                          Todas las categorías
                       </button>
                       {categories.map(cat => (
                          <button
                            key={cat.id}
                            className={cn(
                              "text-sm font-medium text-left transition-colors",
                              selectedCategory === cat.id ? "text-casita-terracotta" : "text-muted-foreground hover:text-casita-charcoal"
                            )}
                            onClick={() => setSelectedCategory(cat.id)}
                          >
                             {cat.name}
                          </button>
                       ))}
                    </div>
                 </div>
              </aside>
           )}

           <div className="flex-1">
              {loading ? (
                 <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {[1,2,3,4,5,6,7,8].map(i => (
                       <div key={i} className="flex flex-col gap-4 animate-pulse">
                          <div className="aspect-square bg-white rounded-lg border border-black/5" />
                          <div className="h-4 bg-white w-2/3 rounded" />
                          <div className="h-4 bg-white w-1/3 rounded" />
                       </div>
                    ))}
                 </div>
              ) : filteredProducts.length > 0 ? (
                 <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                       <ProductCard
                         key={product.id}
                         id={product.id}
                         name={product.name}
                         price={product.salePrice}
                         category={product.category?.name}
                         stock={product.inventory?.[0]?.quantity || 0}
                         imageUrl={product.imageUrl}
                       />
                    ))}
                 </div>
              ) : (
                 <div className="py-20 text-center flex flex-col items-center gap-4">
                    <p className="text-lg font-serif italic text-muted-foreground">No encontramos productos en esta categoría.</p>
                    <Button
                      variant="link"
                      className="text-casita-terracotta font-bold uppercase tracking-widest"
                      onClick={() => {setSelectedCategory(null); setSearch('')}}
                    >
                       Limpiar filtros
                    </Button>
                 </div>
              )}
           </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
