import { Header, Navbar } from '@/components'
import { ReactNode } from 'react'

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </section>
  )
}
