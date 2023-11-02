import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button
} from '@chakra-ui/react'

import * as S from './PatientCard.styles'
import PatientData from './PatientData/PatientData'

type PatientCardProps = {
  patient: Patient
}

type Patient = {
  name: string
  lastname: string
  email: string
  gender: string
  birthdate: string
  cpf: string
  phone: string
  profession: string
  education: string
  photo?: string
}

export function PatientCard({ patient }: PatientCardProps) {
  function hadleChangePatientStatus(email: string) {
    console.log(email)
  }

  return (
    <AccordionItem>
      <S.CardHeader>
        <S.PatientImageWrapper>
          <S.PatientImage>PM</S.PatientImage>
        </S.PatientImageWrapper>
        <S.PatientName>{patient.name}</S.PatientName>
        <S.PatientLastname>{patient.lastname}</S.PatientLastname>
        <S.PatientEmail>{patient.email}</S.PatientEmail>
        <span>
          <Button
            colorScheme="green"
            variant="outline"
            onClick={() => {
              hadleChangePatientStatus(patient.email)
            }}
          >
            Ativo
          </Button>
        </span>
        <S.ShowMoreButtonWrapper>
          <AccordionButton>
            <AccordionIcon />
          </AccordionButton>
        </S.ShowMoreButtonWrapper>
      </S.CardHeader>
      <AccordionPanel pb={4}>
        <PatientData />
      </AccordionPanel>
    </AccordionItem>
  )
}
