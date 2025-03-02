export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="px-4 lg:px-6 my-18">
      <div className="mx-auto max-w-screen-xl">{children}</div>
    </section>
  )
}
