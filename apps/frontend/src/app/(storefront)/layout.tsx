import { CartStoreProvider } from '@/providers/cart-store-provider'
import Footer from './_components/layout/Footer'
import Header from './_components/layout/Header'

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <CartStoreProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </CartStoreProvider>
    </>
  )
}
