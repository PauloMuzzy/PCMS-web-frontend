import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button
} from '@chakra-ui/react'

import { PatientRegistrationForm } from '@/components'
import * as W from './PatientCard.styles'

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
      <W.CardHeader>
        <W.PatientImageWrapper>
          <W.PatientImage>PM</W.PatientImage>
        </W.PatientImageWrapper>
        <W.PatientName>{patient.name}</W.PatientName>
        <W.PatientLastname>{patient.lastname}</W.PatientLastname>
        <W.PatientEmail>{patient.email}</W.PatientEmail>
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
        <W.ShowMoreButtonWrapper>
          <AccordionButton>
            <AccordionIcon />
          </AccordionButton>
        </W.ShowMoreButtonWrapper>
      </W.CardHeader>
      <AccordionPanel pb={4} className="bg-token-gray-200 p-4 overflow-y-auto">
        <PatientRegistrationForm patient={patient} />
      </AccordionPanel>
    </AccordionItem>
  )
}
