"use client"

import { ProductCard } from "./product-card"
import { Product } from "@/lib/cart-context"
import { UtensilsCrossed } from "lucide-react"

const products: Product[] = [
  {
    id: "1",
    name: "Heisse Schokolade",
    price: 2000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-29%20180138-KArq0SNYcCHaWO2FDgeX62aTIrqj9j.png",
  },
  {
    id: "2",
    name: "Apfel",
    price: 1000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-29%20180149-KRvOMns22DBbpmjF3zgcoq4zXtY1KC.png",
  },
  {
    id: "3",
    name: "Energy Drink",
    price: 250,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-29%20180217-6FEEwUnriyDvPCWhjfplnpBhWroks2.png",
  },
  {
    id: "4",
    name: "Kekse",
    price: 500,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-29%20180226-p6Xik5doTNNL9tVlZpCzolLMecOunR.png",
  },
  {
    id: "5",
    name: "Erdbeersaft",
    price: 1000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-29%20180205-8QIgOJY9ktP5XSeiT5Gb2bgyfeeIp9.png",
  },
]

export function MenuGrid() {
  return (
    <section className="px-4 py-6 pb-48">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl">
          <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-foreground">Heutige Auswahl</h2>
          <p className="text-muted-foreground text-sm">Tippen zum Hinzufuegen</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="animate-bounce-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}
