import { Header, Navbar } from '@/components'
import { ReactNode } from 'react'
import * as S from './page.styles'

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <S.Section>
      <S.Nav>
        <Navbar />
      </S.Nav>
      <S.Header>
        <Header />
      </S.Header>
      <S.Main>{children}</S.Main>
    </S.Section>
  )
}
