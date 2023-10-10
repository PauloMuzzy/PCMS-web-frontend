'use client'

import { PatientRegistrationForm } from '@/components'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from '@nextui-org/react'

export default function PatientsPage() {
  return (
    <div className="flex flex-col justify-start items-center gap-4 w-full h-full file:overflow-auto p-4">
      <Navbar className="shadow-md rounded-md">
        <NavbarContent justify="start">
          <NavbarItem>
            <Button
              color="primary"
              onClick={() => console.log('click')}
              variant="light"
            >
              Cadastrar
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <PatientRegistrationForm />
    </div>
  )
}
