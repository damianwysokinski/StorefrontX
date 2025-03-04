import { Toaster } from '@/components/ui/sonner'
import Footer from './_components/layout/footer/footer'
import Header from './_components/layout/header/header'

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
