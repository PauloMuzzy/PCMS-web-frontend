'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const { push } = useRouter()
  return (
    <>
      <button
        className="w-[100px] h-[54px] bg-token-primary text-token-white"
        onClick={() => {
          push('/login')
        }}
      >
        TO LOGIN
      </button>{' '}
      <button
        className="w-[100px] h-[54px] bg-token-secondary text-token-black"
        onClick={() => {
          push('/pacientes')
        }}
      >
        TO PATIENTS
      </button>
    </>
  )
}
