import { createJSONStorage, persist } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'
import { Product } from '@/types/product'

export type CartState = {
  totalItems: number
  cartItems: Product[]
}

export type CartActions = {
  addToCart: (product: Product, quantity: number) => void
  updateCartItemQuantity: (quantity: number, productId: string) => void
  removeCartItem: (productId: string) => void
}

export type CartStore = CartState & CartActions

export const defaultInitState: CartState = {
  totalItems: 0,
  cartItems: [],
}

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()(
    persist(
      (set) => ({
        ...initState,
        addToCart: (product, quantity) =>
          set((state) => {
            let updatedCartItems

            const existingItem = state.cartItems.find(
              (item) => item.id === product.id,
            )

            if (existingItem) {
              updatedCartItems = state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              )
            } else {
              updatedCartItems = [...state.cartItems, { ...product, quantity }]
            }

            return {
              cartItems: updatedCartItems,
              totalItems: updatedCartItems.reduce(
                (total, item) => total + item.quantity,
                0,
              ),
            }
          }),
        updateCartItemQuantity: (quantity, productId) =>
          set((state) => {
            const updatedCartItems = state.cartItems.map((item) =>
              item.id === productId ? { ...item, quantity: quantity } : item,
            )

            return {
              cartItems: updatedCartItems,
              totalItems: updatedCartItems.reduce(
                (total, item) => total + item.quantity,
                0,
              ),
            }
          }),
        removeCartItem: (productId) =>
          set((state) => {
            const updatedCartItems = state.cartItems.filter(
              (item) => item.id !== productId,
            )

            return {
              cartItems: updatedCartItems,
              totalItems: updatedCartItems.reduce(
                (total, item) => total + item.quantity,
                0,
              ),
            }
          }),
      }),
      {
        name: 'cart-storage',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  )
}
