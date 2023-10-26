import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button
} from '@chakra-ui/react'

import { PatientRegistrationForm } from '@/components'

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
    console.log('trocar email do cliente ->', email)
  }

  return (
    <AccordionItem>
      <h2 className="flex flex-row w-full">
        <div className="flex flex-row w-full h-fit p-2">
          <span className="w-52">{patient.name}</span>
          <span className="w-52">{patient.lastname}</span>
          <span className="w-full">{patient.email}</span>
          <span className="w-28">
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
        </div>
        <div className="w-28 h-full">
          <AccordionButton>
            <AccordionIcon />
          </AccordionButton>
        </div>
      </h2>
      <AccordionPanel pb={4}>
        <PatientRegistrationForm patient={patient} />
      </AccordionPanel>
    </AccordionItem>
  )
}
