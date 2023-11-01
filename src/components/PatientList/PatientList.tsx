import { PatientCard } from '@/components'
import { Accordion, Button } from '@chakra-ui/react'

import * as W from './PatientList.styles'

export function PatientList() {
  const Patients = [
    {
      name: 'Paulo',
      lastname: 'Muzzy',
      email: 'paulo@muzzy.com.br',
      gender: 'M',
      birthdate: '24-05-1991',
      cpf: '22834196893',
      phone: '19984242412',
      profession: 'Acrilista',
      education: 'GR'
    },
    {
      name: 'Paulo',
      lastname: 'Muzzy',
      email: 'paulete@muzzy.com.br',
      gender: 'M',
      birthdate: '1991-05-24',
      cpf: '22834196893',
      phone: '19984242412',
      profession: 'Acrilista',
      education: 'GR'
    },
    ,
    {
      name: 'Paulo',
      lastname: 'Muzzy',
      email: 'paulete@muzzy.com.br',
      gender: 'M',
      birthdate: '1991-05-24',
      cpf: '22834196893',
      phone: '19984242412',
      profession: 'Acrilista',
      education: 'GR'
    },
    {
      name: 'Paulo',
      lastname: 'Muzzy',
      email: 'paulete@muzzy.com.br',
      gender: 'M',
      birthdate: '1991-05-24',
      cpf: '22834196893',
      phone: '19984242412',
      profession: 'Acrilista',
      education: 'GR'
    },
    {
      name: 'Paulo',
      lastname: 'Muzzy',
      email: 'paulete@muzzy.com.br',
      gender: 'M',
      birthdate: '1991-05-24',
      cpf: '22834196893',
      phone: '19984242412',
      profession: 'Acrilista',
      education: 'GR'
    },
    {
      name: 'Paulo',
      lastname: 'Muzzy',
      email: 'paulete@muzzy.com.br',
      gender: 'M',
      birthdate: '1991-05-24',
      cpf: '22834196893',
      phone: '19984242412',
      profession: 'Acrilista',
      education: 'GR'
    },
    {
      name: 'Paulo',
      lastname: 'Muzzy',
      email: 'paulete@muzzy.com.br',
      gender: 'M',
      birthdate: '1991-05-24',
      cpf: '22834196893',
      phone: '19984242412',
      profession: 'Acrilista',
      education: 'GR'
    },
    {
      name: 'Paulo',
      lastname: 'Muzzy',
      email: 'paulete@muzzy.com.br',
      gender: 'M',
      birthdate: '1991-05-24',
      cpf: '22834196893',
      phone: '19984242412',
      profession: 'Acrilista',
      education: 'GR'
    },
    {
      name: 'Paulo',
      lastname: 'Muzzy',
      email: 'paulete@muzzy.com.br',
      gender: 'M',
      birthdate: '1991-05-24',
      cpf: '22834196893',
      phone: '19984242412',
      profession: 'Acrilista',
      education: 'GR'
    },
    {
      name: 'Paulo',
      lastname: 'Muzzy',
      email: 'paulete@muzzy.com.br',
      gender: 'M',
      birthdate: '1991-05-24',
      cpf: '22834196893',
      phone: '19984242412',
      profession: 'Acrilista',
      education: 'GR'
    }
  ]

  return (
    <W.Wrapper>
      <W.CardListHeader>
        PACIENTES
        <Button variant={'solid'} size={'md'} colorScheme="blue">
          CADASTRAR +
        </Button>
      </W.CardListHeader>
      <Accordion allowToggle>
        {Patients.map((patient, index) => {
          return <PatientCard key={index} patient={patient!} />
        })}
      </Accordion>
    </W.Wrapper>
  )
}
