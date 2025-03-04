import { Toaster } from '@/components/ui/sonner'
import Footer from './_components/layout/Footer'
import Header from './_components/layout/Header'

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Toaster />
      <Footer />
    </>
  )
}
