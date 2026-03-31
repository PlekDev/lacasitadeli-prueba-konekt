'use client'

import { Navbar } from '@/components/store/navbar'
import { Footer } from '@/components/store/footer'
import { ProductCard } from '@/components/store/product-card'
import { useState, useEffect, use } from 'react'
import {
  ShoppingBag,
  Heart,
  Truck,
  ShieldCheck,
  RefreshCcw,
  Star,
  ChevronRight,
  Minus,
  Plus
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/cart-store'
import { toast } from 'sonner'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [product, setProduct] = useState<any>(null)
  const [recommendations, setRecommendations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [locationId, setLocationId] = useState<string | null>(null)

  const addItem = useCartStore((state) => state.addItem)

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
        const res = await fetch(`/api/products/${id}?locationId=${locationId}`)
        const data = await res.json()
        if (data.success) {
           setProduct(data.data)

           const recRes = await fetch(`/api/products?categoryId=${data.data.categoryId}&limit=4&excludeId=${id}&locationId=${locationId}`)
           const recData = await recRes.json()
           if (recData.success) setRecommendations(recData.data)
        }
      } catch (err) {
        console.error('Error fetching product:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id, locationId])

  const handleAddToCart = () => {
    if (!product) return

    addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice,
      imageUrl: product.imageUrl,
      stock: product.inventory?.[0]?.quantity || 0,
      quantity: quantity
    })

    toast.success(`${product.name} añadido al carrito`)
  }

  if (loading) return (
     <div className="min-h-screen bg-casita-cream flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-casita-terracotta"></div>
     </div>
  )

  if (!product) return (
     <div className="min-h-screen bg-casita-cream flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Producto no encontrado</h1>
        <Link href="/market">
           <Button variant="outline" className="rounded-full">Volver al Market</Button>
        </Link>
     </div>
  )

  const stock = product.inventory?.[0]?.quantity || 0
  const isOutOfStock = stock <= 0

  return (
    <div className="min-h-screen bg-casita-cream flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
         <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-12">
            <Link href="/" className="hover:text-casita-terracotta transition-colors">Inicio</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/market" className="hover:text-casita-terracotta transition-colors">Market</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-casita-charcoal">{product.name}</span>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            <div className="flex flex-col gap-6">
               <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                  {product.imageUrl ? (
                    <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-serif text-4xl italic">
                       La Casita
                    </div>
                  )}
                  {isOutOfStock && (
                     <span className="absolute top-6 left-6 bg-casita-charcoal text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Agotado</span>
                  )}
               </div>
            </div>

            <div className="flex flex-col gap-8">
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                     <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-casita-terracotta">{product.category?.name || 'Gourmet'}</span>
                  </div>
                  <h1 className="text-5xl font-serif font-bold text-casita-charcoal leading-tight">{product.name}</h1>
                  <div className="flex items-center gap-4 mt-2">
                     <p className="text-3xl font-bold text-casita-terracotta">${product.salePrice.toFixed(2)}</p>
                  </div>
               </div>

               <p className="text-muted-foreground leading-relaxed">
                  {product.description || 'Nuestra selección exclusiva de productos gourmet garantiza la mayor calidad y sabor para tus preparaciones.'}
               </p>

               <div className="flex flex-col gap-4 pt-4 border-t border-black/5">
                  <div className="flex items-center justify-between">
                     <span className="text-xs font-bold uppercase tracking-widest text-casita-charcoal">Cantidad</span>
                     <span className={cn(
                       "text-xs font-bold",
                       isOutOfStock ? "text-muted-foreground" : "text-casita-olive"
                     )}>
                        {isOutOfStock ? 'Sin stock disponible' : `${stock} disponibles en tienda`}
                     </span>
                  </div>
                  <div className="flex gap-4">
                     <div className="flex items-center bg-white border border-black/10 rounded-full p-1 h-12 w-32 shadow-sm">
                        <button
                          className="flex-1 flex justify-center hover:text-casita-terracotta disabled:opacity-30"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          disabled={isOutOfStock}
                        >
                           <Minus className="h-4 w-4" />
                        </button>
                        <span className="flex-1 text-center font-bold">{quantity}</span>
                        <button
                          className="flex-1 flex justify-center hover:text-casita-terracotta disabled:opacity-30"
                          onClick={() => setQuantity(Math.min(stock, quantity + 1))}
                          disabled={isOutOfStock || quantity >= stock}
                        >
                           <Plus className="h-4 w-4" />
                        </button>
                     </div>
                     <Button
                       disabled={isOutOfStock}
                       onClick={handleAddToCart}
                       className="flex-1 h-12 bg-casita-charcoal hover:bg-casita-olive transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-[10px]"
                     >
                        Añadir al Carrito
                     </Button>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-casita-terracotta">También te puede gustar</p>
               <h2 className="text-4xl font-serif font-bold text-casita-charcoal">Recomendaciones del Deli</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {recommendations.length > 0 ? (
                  recommendations.map(prod => <ProductCard key={prod.id} {...prod} price={prod.salePrice} category={prod.category?.name} stock={prod.inventory?.[0]?.quantity || 0} />)
               ) : (
                  [1,2,3,4].map(i => <div key={i} className="aspect-[3/4] bg-white rounded-xl animate-pulse" />)
               )}
            </div>
         </div>
      </main>

      <Footer />
    </div>
  )
}
