import { create } from 'zustand'

interface UIState {
    isCartOpen: boolean
    isMobileNavOpen: boolean
    activeCategory: string | null
    searchQuery: string
    setCartOpen: (isOpen: boolean) => void
    setMobileNavOpen: (isOpen: boolean) => void
    setActiveCategory: (category: string | null) => void
    setSearchQuery: (query: string) => void
    toggleCart: () => void
    toggleMobileNav: () => void
}

export const useUIStore = create<UIState>((set) => ({
    isCartOpen: false,
    isMobileNavOpen: false,
    activeCategory: null,
    searchQuery: '',
    setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
    setMobileNavOpen: (isOpen) => set({ isMobileNavOpen: isOpen }),
    setActiveCategory: (category) => set({ activeCategory: category }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    toggleMobileNav: () => set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
}))
// ═══ END OF FILE ═══
