import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '@/types'

interface CartState {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (itemId: string) => void
    updateQuantity: (itemId: string, quantity: number) => void
    clearCart: () => void
    getCartTotal: () => number
    getSubtotal: () => number
    getPlatformFee: () => number
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (newItem) => set((state) => {
                const existingItem = state.items.find(
                    (item) => item.listingId === newItem.listingId &&
                        JSON.stringify(item.options) === JSON.stringify(newItem.options)
                )

                if (existingItem) {
                    return {
                        items: state.items.map((item) =>
                            item.id === existingItem.id
                                ? { ...item, quantity: item.quantity + newItem.quantity }
                                : item
                        ),
                    }
                }

                return { items: [...state.items, newItem] }
            }),
            removeItem: (itemId) => set((state) => ({
                items: state.items.filter((item) => item.id !== itemId)
            })),
            updateQuantity: (itemId, quantity) => set((state) => ({
                items: state.items.map((item) =>
                    item.id === itemId
                        ? { ...item, quantity: Math.max(1, quantity) }
                        : item
                )
            })),
            clearCart: () => set({ items: [] }),
            getSubtotal: () => {
                const { items } = get()
                return items.reduce((total, item) => total + (item.price * item.quantity), 0)
            },
            getPlatformFee: () => {
                const subtotal = get().getSubtotal()
                return subtotal * 0.05 // 5% fee
            },
            getCartTotal: () => {
                const subtotal = get().getSubtotal()
                const fee = get().getPlatformFee()
                return subtotal + fee
            }
        }),
        {
            name: 'b4boosting-cart',
        }
    )
)

