import { CartProvider } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { MenuGrid } from "@/components/menu-grid"
import { Cart } from "@/components/cart"
import { PlantDecorations } from "@/components/plant-decorations"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background relative">
        {/* Plant decorations for desktop */}
        <PlantDecorations />
        
        {/* Decorative background gradient */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-chart-3/10 rounded-full blur-3xl" />
        </div>
        
        {/* Main content */}
        <main className="max-w-lg mx-auto relative z-10">
          <Header />
          <MenuGrid />
          <Cart />
        </main>
      </div>
    </CartProvider>
  )
}
