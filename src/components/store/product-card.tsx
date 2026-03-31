'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/cart-store'
import { toast } from 'sonner'

interface ProductCardProps {
  id: string
  name: string
  price: number
  imageUrl?: string | null
  category?: string
  stock?: number
  className?: string
}

export function ProductCard({
  id,
  name,
  price,
  imageUrl,
  category,
  stock = 0,
  className
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const isOutOfStock = stock <= 0
  const isLowStock = stock > 0 && stock <= 5

  const numericPrice = typeof price === 'string' ? parseFloat(price) : Number(price)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addItem({
      id,
      name,
      price: numericPrice,
      imageUrl,
      stock,
      quantity: 1
    })

    toast.success(`${name} añadido al carrito`, {
      description: 'Puedes ver tu carrito en el ícono de la bolsa.',
      duration: 2000,
    })
  }

  return (
    <div className={cn("group flex flex-col gap-3 relative", className)}>
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted rounded-lg border border-black/5 group-hover:shadow-md transition-all duration-300">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-serif text-lg italic">
            La Casita
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 pointer-events-none">
          {isOutOfStock && (
             <span className="bg-casita-charcoal text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                Agotado
             </span>
          )}
          {isLowStock && (
             <span className="bg-casita-terracotta text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                Quedan pocos
             </span>
          )}
        </div>

        {/* Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/20 to-transparent flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="flex-1 bg-white text-casita-charcoal py-2 rounded-md font-medium text-xs uppercase tracking-wider hover:bg-casita-charcoal hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingBag className="h-3 w-3" />
            Añadir
          </button>
          <button className="bg-white p-2 rounded-md hover:text-casita-terracotta transition-colors">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 px-1">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
          {category || 'Deli Market'}
        </p>
        <Link href={`/product/${id}`} className="hover:text-casita-terracotta transition-colors">
          <h3 className="text-sm font-serif font-bold text-casita-charcoal line-clamp-1">{name}</h3>
        </Link>
        <div className="flex items-center justify-between mt-0.5">
          <p className="text-sm font-bold text-casita-terracotta">${numericPrice.toFixed(2)}</p>
          <p className={cn(
            "text-[10px] font-medium",
            isOutOfStock ? "text-muted-foreground" : isLowStock ? "text-casita-terracotta" : "text-casita-olive"
          )}>
            {isOutOfStock ? 'Sin stock' : `${stock} disponibles`}
          </p>
        </div>
      </div>
    </div>
  )
}
