'use client'

import { PatientList, PatientRegistrationForm } from '@/components'

export default function PatientsPage() {
  return (
    <div className="flex flex-col justify-start items-center gap-4 w-full h-full file:overflow-auto p-4">
      {false && <PatientRegistrationForm />}
      <PatientList />
    </div>
  )
}
