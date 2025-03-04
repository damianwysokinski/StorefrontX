import Sidebar from './_components/layout/sidebar/sidebar'
import Header from './_components/layout/header/header'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 bg-stone-100">
          <main className="p-6 h-[calc(100vh-60px)] w-screen md:w-[calc(100vw-250px)] overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
