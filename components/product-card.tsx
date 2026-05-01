"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Check } from "lucide-react"
import { useCart, Product } from "@/lib/cart-context"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(price)
  }

  const handleAdd = () => {
    addItem(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 800)
  }

  return (
    <div 
      className={`group bg-gradient-to-br from-card to-card/80 rounded-3xl overflow-hidden shadow-xl shadow-black/30 transition-all duration-300 border border-border/50 ${
        isHovered ? "scale-[1.03] shadow-2xl shadow-primary/20 -translate-y-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 flex items-center justify-between relative">
        <div>
          <h3 className="font-bold text-foreground text-lg">{product.name}</h3>
          <p className="text-primary font-extrabold text-xl">{formatPrice(product.price)}</p>
        </div>
        <button
          onClick={handleAdd}
          disabled={isAdded}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 active:scale-90 ${
            isAdded 
              ? "bg-accent text-accent-foreground animate-pop" 
              : "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5"
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          {isAdded ? (
            <Check className="w-6 h-6" />
          ) : (
            <Plus className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  )
}
