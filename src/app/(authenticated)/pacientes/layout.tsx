import { Header, Navbar } from '@/components'
import { ReactNode } from 'react'

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <section className="grid w-screen grid-cols-[256px_1fr] grid-rows-[64px_calc(100vh-64px)]">
      <header className="col-start-2">
        <Header />
      </header>
      <nav className="col-start-1 row-start-1 row-span-2">
        <Navbar />
      </nav>
      <main className="flex flex-col items-center justify-center w-full min-h-full bg-zinc-100">
        {children}
      </main>
    </section>
  )
}
