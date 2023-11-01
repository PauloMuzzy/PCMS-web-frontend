'use client'

import { PatientList, PatientRegistrationForm } from '@/components'
import * as W from './page.styles'

export default function PatientsPage() {
  return (
    <W.Wrapper>
      {false && <PatientRegistrationForm />}
      <PatientList />
    </W.Wrapper>
  )
}
