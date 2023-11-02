'use client'

import { useState } from 'react'
import Cookies from 'universal-cookie'

import { userLogin } from '@/services'
import { SubmitHandler, useForm } from 'react-hook-form'

import { SocialLogin } from '@/components'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import * as S from './FormLogin.stylest'

export function FormLogin() {
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
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
    <S.Wrapper>
      <S.Title>LOGIN</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>E-mail</FormLabel>
          <Input
            {...register('email', {
              required: 'É necessário preencher o e-mail!',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'E-mail inválido'
              }
            })}
            type="text"
            size="lg"
          />
          <FormErrorMessage>
            {!!errors && errors.email?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Senha</FormLabel>
          <Input
            {...register('password', {
              required: 'É necessário preencher a senha!'
            })}
            type="text"
            size="lg"
          />
          <FormErrorMessage>
            {!!errors && errors.password?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          isLoading={isLoading}
          colorScheme="blue"
          variant="solid"
          type="submit"
          size="lg"
          width="full"
        >
          ENTRAR
        </Button>
      </S.Form>
      <S.ButtonWrapper>
        <SocialLogin />
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}
