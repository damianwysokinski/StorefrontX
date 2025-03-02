export default function Card({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="p-4 bg-white rounded-md space-y-4 border border-gray-200">
      {children}
    </div>
  )
}
