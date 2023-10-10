import { Header, Navbar } from '@/components'

export default function RegisterLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-screen h-screen grid grid-rows-[112px_auto] grid-cols-[min-content_auto]">
      <nav className="w-64 h-full row-span-2">
        <Navbar />
      </nav>
      <header className="w-full h-28">
        <Header />
      </header>
      <main className="w-full h-full col-start-2">{children}</main>
    </section>
  )
}
