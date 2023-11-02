'use client'

import { Accordion, Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import { getPatients } from '../../services/patient/getPatients/getPatients'
import * as S from './PatientList.styles'

export function PatientList() {
  const getPatientList = async () => {
    try {
      const response = await getPatients()
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  useEffect(() => {
    getPatientList()
  })

  return (
    <S.Wrapper>
      <S.CardListHeader>
        PACIENTES
        <Button variant={'solid'} size={'md'} colorScheme="blue">
          CADASTRAR +
        </Button>
      </S.CardListHeader>
      <Accordion allowToggle></Accordion>
    </S.Wrapper>
  )
}
