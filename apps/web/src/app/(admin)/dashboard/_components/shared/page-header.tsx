export default function PageHeader({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mb-4 flex items-center justify-between gap-2">
      {children}
    </div>
  )
}
