'use client'

import { PatientRegistrationForm } from '@/components'

export default function PatientsRegisterPage() {
  return (
    <div className="flex flex-col justify-start items-center gap-4 w-full h-full file:overflow-auto p-4">
      <PatientRegistrationForm />
    </div>
  )
}
