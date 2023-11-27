'use client'

import FormLogin from '@/components/Login/FormLogin/FormLogin'
import { Card, CardBody } from '@nextui-org/react'

export default function Login() {
  return (
    <div className="flex justify-center item-center w-screen h-screen">
      <Card className="w-[300px] h-fit my-auto p-4">
        <CardBody>
          <FormLogin />
        </CardBody>
      </Card>
    </div>
  )
}
