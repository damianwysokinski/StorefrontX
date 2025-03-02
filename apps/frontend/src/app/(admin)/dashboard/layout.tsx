import Sidebar from './_components/layout/sidebar/Sidebar'
import Header from './_components/layout/header/Header'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar collapsed={false} />
        <div className="flex-1 bg-stone-100">
          <main className="p-4 h-[calc(100vh-60px)] w-screen md:w-[calc(100vw-250px)] overflow-y-auto">
            {children}
          </main>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 text-gray-400 text-sm">v0.1.0</div>
    </div>
  )
}
