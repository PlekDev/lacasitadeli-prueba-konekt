'use client'

import { Navbar } from '@/components/store/navbar'
import { Footer } from '@/components/store/footer'
import { CheckoutSummary } from '@/components/store/checkout-summary'
import { useCartStore } from '@/store/cart-store'
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShoppingBasket
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()

  return (
    <div className="min-h-screen bg-casita-cream flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
         <div className="flex items-center gap-4 mb-16">
            <Link href="/market" className="p-3 bg-white rounded-full border border-black/5 hover:text-casita-terracotta transition-colors shadow-sm group">
               <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div className="flex flex-col gap-2">
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-casita-terracotta">Tu Selección</span>
               <h1 className="text-5xl font-serif font-bold text-casita-charcoal">Mi Carrito</h1>
            </div>
         </div>

         {items.length === 0 ? (
            <div className="py-32 flex flex-col items-center text-center gap-8">
               <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-black/5 shadow-xl">
                  <ShoppingBasket className="h-10 w-10 text-muted-foreground/30" />
               </div>
               <div className="flex flex-col gap-2">
                  <p className="text-2xl font-serif italic text-casita-charcoal">Tu carrito se siente un poco vacío.</p>
                  <p className="text-muted-foreground text-sm">¿Qué tal si exploras nuestro market y descubres algo delicioso?</p>
               </div>
               <Link href="/market">
                  <Button className="h-14 px-12 rounded-full bg-casita-charcoal hover:bg-casita-olive transition-all font-bold uppercase tracking-[0.2em] text-[10px]">
                     Ir al Market
                  </Button>
               </Link>
            </div>
         ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
               {/* Cart Table Area */}
               <div className="lg:col-span-2 flex flex-col gap-8">
                  <div className="flex items-center justify-between pb-6 border-b border-black/5">
                     <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Productos ({items.length})</span>
                     <button
                       onClick={clearCart}
                       className="text-xs font-bold uppercase tracking-[0.2em] text-casita-terracotta hover:underline underline-offset-4"
                     >
                        Vaciar Carrito
                     </button>
                  </div>

                  <div className="flex flex-col divide-y divide-black/5">
                     {items.map((item) => (
                        <div key={item.id} className="py-10 flex flex-col sm:flex-row items-center sm:items-start gap-10">
                           {/* Product Image */}
                           <div className="relative h-40 w-40 bg-white rounded-2xl overflow-hidden border border-black/5 shadow-md shrink-0">
                              {item.imageUrl ? (
                                <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-serif italic text-2xl">
                                   La Casita
                                </div>
                              )}
                           </div>

                           {/* Info & Quantity */}
                           <div className="flex-1 flex flex-col sm:flex-row justify-between w-full gap-8">
                              <div className="flex flex-col gap-4">
                                 <h3 className="text-2xl font-serif font-bold text-casita-charcoal">{item.name}</h3>
                                 <div className="flex items-center gap-6">
                                    <div className="flex flex-col">
                                       <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Precio Unitario</span>
                                       <span className="font-bold text-casita-charcoal">${item.price.toFixed(2)}</span>
                                    </div>
                                    <div className="h-8 w-px bg-black/5" />
                                    <div className="flex flex-col">
                                       <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Subtotal</span>
                                       <span className="font-bold text-casita-terracotta">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                 </div>
                              </div>

                              <div className="flex flex-col sm:items-end justify-between gap-4">
                                 <div className="flex items-center bg-white border border-black/10 rounded-full p-1 h-12 w-32 shadow-sm">
                                    <button
                                      className="flex-1 flex justify-center hover:text-casita-terracotta disabled:opacity-30"
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      disabled={item.quantity <= 1}
                                    >
                                       <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="flex-1 text-center font-bold">{item.quantity}</span>
                                    <button
                                      className="flex-1 flex justify-center hover:text-casita-terracotta disabled:opacity-30"
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      disabled={item.stock !== undefined && item.quantity >= item.stock}
                                    >
                                       <Plus className="h-4 w-4" />
                                    </button>
                                 </div>
                                 <button
                                   onClick={() => removeItem(item.id)}
                                   className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-casita-terracotta flex items-center gap-2 transition-colors"
                                 >
                                    <Trash2 className="h-4 w-4" /> Eliminar
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="pt-8 border-t border-black/5">
                     <p className="text-xs text-muted-foreground italic leading-relaxed">
                        * Los tiempos de entrega pueden variar dependiendo de la disponibilidad de productos frescos.
                        Al realizar tu compra, aceptas nuestros términos y condiciones de envío.
                     </p>
                  </div>
               </div>

               {/* Summary Column */}
               <CheckoutSummary />
            </div>
         )}
      </main>

      <Footer />
    </div>
  )
}
