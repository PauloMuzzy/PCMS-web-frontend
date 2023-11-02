'use client'

import { PatientList } from '@/components'
import * as S from './page.styles'

export default function PatientsPage() {
  return (
    <S.Wrapper>
      <PatientList />
    </S.Wrapper>
  )
}
