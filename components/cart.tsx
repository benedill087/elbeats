"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus, X, ChevronUp, ChevronDown, PartyPopper, Rocket } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function Cart() {
  const { items, addItem, removeItem, totalPrice, totalItems, clearCart } = useCart()
  const [isExpanded, setIsExpanded] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [orderPlaced, setOrderPlaced] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(price)
  }

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && address && items.length > 0) {
      setOrderPlaced(true)
      setTimeout(() => {
        clearCart()
        setName("")
        setAddress("")
        setShowCheckout(false)
        setIsExpanded(false)
        setOrderPlaced(false)
      }, 3000)
    }
  }

  if (totalItems === 0 && !orderPlaced) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-card to-card/95 border-t border-border/50 p-4 safe-area-pb backdrop-blur-lg">
        <div className="max-w-lg mx-auto flex items-center justify-center gap-3 text-muted-foreground py-2">
          <ShoppingCart className="w-6 h-6 animate-float" />
          <span className="font-medium">Your cart is empty - start adding items!</span>
        </div>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary via-accent to-primary p-6 safe-area-pb animate-shimmer">
        <div className="max-w-lg mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <PartyPopper className="w-8 h-8 text-primary-foreground animate-bounce" />
            <Rocket className="w-8 h-8 text-primary-foreground animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          <p className="text-primary-foreground font-bold text-xl">
            Order placed! Thanks, {name}!
          </p>
          <p className="text-primary-foreground/80 text-sm mt-1">Your food is on its way</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card to-card/95 border-t border-primary/30 transition-all duration-300 safe-area-pb backdrop-blur-lg shadow-2xl shadow-primary/20 ${
        isExpanded ? "max-h-[80vh]" : "max-h-auto"
      }`}
    >
      <div className="max-w-lg mx-auto">
        {/* Cart Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="relative p-2 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:animate-wiggle">
              <ShoppingCart className="w-6 h-6 text-primary-foreground" />
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground text-xs font-black rounded-full flex items-center justify-center border-2 border-card animate-bounce-in">
                {totalItems}
              </span>
            </div>
            <span className="font-bold text-foreground text-lg">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {formatPrice(totalPrice)}
            </span>
            {isExpanded ? (
              <ChevronDown className="w-6 h-6 text-primary" />
            ) : (
              <ChevronUp className="w-6 h-6 text-primary animate-bounce" />
            )}
          </div>
        </button>

        {/* Expanded Cart */}
        {isExpanded && (
          <div className="px-4 pb-4 overflow-y-auto max-h-[60vh]">
            {/* Cart Items */}
            <div className="space-y-3 mb-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gradient-to-r from-secondary/50 to-secondary/30 rounded-2xl p-4 border border-border/50 animate-bounce-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-1">
                    <p className="font-bold text-foreground text-lg">{item.name}</p>
                    <p className="text-sm text-primary font-semibold">
                      {formatPrice(item.price)} each
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-foreground hover:bg-destructive hover:text-destructive-foreground transition-all active:scale-90"
                      aria-label={`Remove one ${item.name}`}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-8 text-center font-black text-xl text-foreground">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addItem(item)}
                      className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all active:scale-90"
                      aria-label={`Add another ${item.name}`}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Form */}
            {!showCheckout ? (
              <button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground py-4 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Proceed to Checkout
              </button>
            ) : (
              <form onSubmit={handleOrder} className="space-y-3 animate-bounce-in">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-black text-xl text-foreground">Checkout</h3>
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
                    aria-label="Close checkout"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-input border-2 border-border rounded-2xl px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-medium"
                />
                <input
                  type="text"
                  placeholder="Delivery Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="w-full bg-input border-2 border-border rounded-2xl px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-medium"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground py-4 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Place Order - {formatPrice(totalPrice)}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
