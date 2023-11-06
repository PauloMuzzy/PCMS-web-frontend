'use client'

import { Accordion } from '@chakra-ui/react'
import * as S from './PatientModalData.styles'

import { PatientModalDataProps } from './PatientModalData.types'
import { PersonalData } from './PernsonalData'

export function PatientModalData({ patient, setClose }: PatientModalDataProps) {
  return (
    <S.Wrapper>
      <Accordion allowMultiple>
        <PersonalData patient={patient} />
      </Accordion>

      {/* <Button size={'md'} onClick={() => setClose(true)}>
        close
      </Button> */}
    </S.Wrapper>
  )
}
