import { PatientCard } from '@/components'
import { Accordion, Button } from '@chakra-ui/react'

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
    <div className="container bg-blue-400 ">
      <div className="flex flex-row justify-between items-center  h-fit p-2 w-[calc(100%-112px)] overflow-y-auto">
        PACIENTES
        <Button variant={'solid'} size={'md'} colorScheme="blue">
          CADASTRAR +
        </Button>
      </div>
      <Accordion allowToggle>
        {Patients.map((patient, index) => {
          return <PatientCard key={index} patient={patient!} />
        })}
      </Accordion>
    </div>
  )
}
