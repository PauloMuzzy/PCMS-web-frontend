'use client'

import { useState } from 'react'
import Cookies from 'universal-cookie'

import { userLogin } from '@/services'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { SocialLogin } from '@/components'
import { useRouter } from 'next/navigation'

import { EyeFilledIcon, EyeSlashFilledIcon } from '@/Icons'
import { Button, Input } from '@nextui-org/react'

export function FormLogin() {
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const cookies = new Cookies()
  const { push } = useRouter()

  const {
    control,
    handleSubmit,
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
      push('/cadastro')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8 w-96 h-fit bg-token-light p-6 rounded-lg my-auto shadow-md">
      <h1 className="w-full text-left text-3xl text-token-primary font-black">
        LOGIN
      </h1>
      <form
        className="flex flex-col justify-center items-center w-full h-fit gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Necessário preencher o email!'
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido'
            }
          }}
          render={({ field }) => (
            <Input
              type="text"
              label="Email"
              variant="bordered"
              className="w-full h-fit"
              isInvalid={!!errors.email?.message}
              errorMessage={!!errors && errors.email?.message}
              autoComplete="user-name"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Necessário preencher a senha!'
            }
          }}
          render={({ field }) => (
            <Input
              label="Senha"
              variant="bordered"
              type={isVisible ? 'text' : 'password'}
              className="w-full h-fit"
              isInvalid={!!errors.password?.message}
              errorMessage={errors.password?.message}
              autoComplete="current-password"
              endContent={
                <button
                  className="w-fit focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              {...field}
            />
          )}
        />
        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full h-14 bg-token-primary text-token-white"
        >
          ENTRAR
        </Button>
      </form>
      <div className="flex flex-col w-full h-fit justify-center items-center gap-4">
        <SocialLogin />
      </div>
    </div>
  )
}
