'use client'

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react'
import { Fragment, useState } from 'react'
import { Ellipsis } from '../../../public/Icons'
import { Patient } from '../../services/patient/getPatients/getPatients'
import * as S from './PatientList.styles'
import { PatientModalData } from './PatientModalData'

export function PatientList() {
  const [patientSelected, setPatientSelected] = useState<Patient>()
  const { isOpen, onOpen, onClose } = useDisclosure()

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
    }
  ]

  const hadleChangePatientStatus = (patient: Patient): void => {
    onOpen()
    setPatientSelected(patient)
  }

  return (
    <S.Wrapper>
      <TableContainer fontFamily={'inherit'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Foto</Th>
              <Th>Nome</Th>
              <Th>Sobrenome</Th>
              <Th w="full">Email</Th>
              <Th>Status</Th>
              <Th>Ver mais</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Patients.map((item: Patient, index) => {
              return (
                <Fragment key={index}>
                  <Tr>
                    <Td>PM</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.lastname}</Td>
                    <Td>{item.email}</Td>
                    <Td>
                      <Button size="md" variant="link" colorScheme="green">
                        Ativo
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        size="md"
                        variant="link"
                        w="full"
                        onClick={() => {
                          onOpen()
                          hadleChangePatientStatus(item)
                        }}
                      >
                        <Ellipsis />
                      </Button>
                    </Td>
                  </Tr>
                </Fragment>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={20} fontWeight={700}>
            Dados do Paciente
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PatientModalData patient={patientSelected!} setClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </S.Wrapper>
  )
}
