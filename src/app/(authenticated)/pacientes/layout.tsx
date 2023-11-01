import { Header, Navbar } from '@/components'
import { ReactNode } from 'react'
import * as W from './page.styles'

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <W.Section>
      <W.Nav>
        <Navbar />
      </W.Nav>
      <W.Header>
        <Header />
      </W.Header>
      <W.Main>{children}</W.Main>
    </W.Section>
  )
}
