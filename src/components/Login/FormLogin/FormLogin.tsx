'use client'

import { userLogin } from '@/services'
import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Cookies from 'universal-cookie'

import { useRouter } from 'next/navigation'
import { DoLoginUseCase } from '@/@core/application/use-cases/login'
import { LoginHttpGateway } from '@/@core/infra/gatways/login-http.gateway'
import { makeLogin } from '@/@core/domain/facories/login'

export function FormLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const cookies = new Cookies()
  const { push } = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Data>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  type Data = {
    email: string
    password: string
  }

  const onSubmit: SubmitHandler<Data> = async (data: Data): Promise<void> => {
    setIsLoading(true)
    const accessToken = await makeLogin(data.email, data.password)
  }

  return (
    <div className="flex flex-col gap-3">
      <h1>LOGIN</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-3"
      >
        <Input
          {...register('email', {
            required: 'É necessário preencher o e-mail!',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'E-mail inválido'
            }
          })}
          name="email"
          type="email"
          label="Email"
          variant={!!errors.email ? 'bordered' : 'flat'}
          isInvalid={!!errors.email}
          errorMessage={!!errors && errors.email?.message}
          fullWidth
        />
        <Input
          {...register('password', {
            required: 'É necessário preencher a senha!'
          })}
          name="password"
          type="password"
          label="Senha"
          fullWidth
          variant={!!errors.password ? 'bordered' : 'flat'}
          isInvalid={!!errors.password}
          errorMessage={!!errors && errors.password?.message}
        />
        <Button type="submit" color="primary" fullWidth isLoading={isLoading}>
          Loading
        </Button>
      </form>
    </div>
  )
}
