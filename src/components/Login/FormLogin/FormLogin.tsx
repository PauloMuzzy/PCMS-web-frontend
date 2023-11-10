'use client'

import { userLogin } from '@/services'
import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Cookies from 'universal-cookie'

import { useRouter } from 'next/navigation'

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
    try {
      const response = await userLogin({
        email: data.email,
        password: data.password
      })
      cookies.set('auth_token', response.data.accessToken)
      push('/pacientes')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
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
          isRequired
          type="email"
          label="Email"
          className="max-w-xs"
          fullWidth
        />
        <Input
          {...register('password', {
            required: 'É necessário preencher a senha!'
          })}
          name="password"
          isRequired
          type="password"
          label="Senha"
          className="max-w-xs"
          fullWidth
        />
        <Button type="submit" color="primary" fullWidth isLoading={isLoading}>
          Loading
        </Button>
      </form>
    </div>
  )
}
