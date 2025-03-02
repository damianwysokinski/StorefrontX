import { create } from 'zustand'

export type SidebarState = {
  handleMenuOpen: () => void
  isMenuOpen: boolean
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isMenuOpen: false,
  handleMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))
