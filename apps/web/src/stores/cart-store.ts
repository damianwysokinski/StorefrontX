import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Product } from '../types/product'

export type CartStore = {
  totalItems: number
  cartItems: Product[]
  addToCart: (product: Product, quantity: number) => void
  updateCartItemQuantity: (quantity: number, productId: string) => void
  removeCartItem: (productId: string) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => {
      const calculateTotalItems = (items: Product[]) =>
        items.reduce((total, item) => total + item.quantity, 0)

      return {
        totalItems: 0,
        cartItems: [],

        addToCart: (product, quantity) =>
          set((state) => {
            const existingItemIndex = state.cartItems.findIndex(
              (item) => item.id === product.id,
            )

            const updatedCartItems = [...state.cartItems]

            if (existingItemIndex >= 0) {
              updatedCartItems[existingItemIndex] = {
                ...updatedCartItems[existingItemIndex],
                quantity:
                  updatedCartItems[existingItemIndex].quantity + quantity,
              }
            } else {
              updatedCartItems.push({ ...product, quantity })
            }

            return {
              cartItems: updatedCartItems,
              totalItems: calculateTotalItems(updatedCartItems),
            }
          }),

        updateCartItemQuantity: (quantity, productId) =>
          set((state) => {
            const updatedCartItems = state.cartItems.map((item) =>
              item.id === productId ? { ...item, quantity } : item,
            )

            return {
              cartItems: updatedCartItems,
              totalItems: calculateTotalItems(updatedCartItems),
            }
          }),

        removeCartItem: (productId) =>
          set((state) => {
            const updatedCartItems = state.cartItems.filter(
              (item) => item.id !== productId,
            )

            return {
              cartItems: updatedCartItems,
              totalItems: calculateTotalItems(updatedCartItems),
            }
          }),
      }
    },
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
