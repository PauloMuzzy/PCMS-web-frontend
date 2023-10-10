'use client'

import classNames from 'classnames'
import { PeopleIcon } from '@/Icons'
import { GENDER_OPTIONS } from '@/utils'
import { useState } from 'react'
import { Input } from '@nextui-org/react'
import { Button } from '@nextui-org/react'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'

export function PatientRegistrationForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [professionListIsOpen, serProfessionListIsOpen] =
    useState<boolean>(false)

  type Data = {
    name: string
    lastName: string
    email: string
    gender: string
    birthDate: string
    cpf: string
    phone: string
    profession: string
    education: string
    photo: string
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Data>({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      gender: '',
      birthDate: '',
      cpf: '',
      phone: '',
      profession: '',
      education: '',
      photo: ''
    }
  })

  const onSubmit: SubmitHandler<Data> = async (data: Data): Promise<void> => {
    setIsLoading(true)
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-start items-center gap-4 max-w-[1024px] w-full h-fit bg-token-white rounded-lg shadow-xl p-6">
      <form
        className="flex flex-col gap-6 w-full h-fit"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row">
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Necessário preencher o Nome!'
              },
              pattern: {
                value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/i,
                message: 'É permitido somente letras!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Nome"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.email?.message}
                errorMessage={!!errors && errors.email?.message}
                autoComplete="name"
                {...field}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Necessário preencher o Sobrenome!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Sobrenome"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.email?.message}
                errorMessage={!!errors && errors.email?.message}
                autoComplete="last-name"
                {...field}
              />
            )}
          />
        </div>

        <div className="row">
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Necessário preencher o E-mail!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="E-mail"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.email?.message}
                errorMessage={!!errors && errors.email?.message}
                autoComplete="email"
                {...field}
              />
            )}
          />
          <Controller
            name="cpf"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Necessário preencher o CPF!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="CPF"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.email?.message}
                errorMessage={!!errors && errors.email?.message}
                autoComplete="cpf"
                {...field}
              />
            )}
          />
        </div>

        <div className="row">
          <Controller
            name="birthDate"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Necessário preencher a data de nascimento!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Data de nascimento"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.email?.message}
                errorMessage={!!errors && errors.email?.message}
                autoComplete="birth-date"
                {...field}
              />
            )}
          />{' '}
          <Controller
            name="gender"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Necessário preencher o Gênero!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Gênero"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.email?.message}
                errorMessage={!!errors && errors.email?.message}
                autoComplete="gender"
                {...field}
              />
            )}
          />
        </div>

        <div className="row">
          <Controller
            name="profession"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Necessário preencher a profissão!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Profissão"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.email?.message}
                errorMessage={!!errors && errors.email?.message}
                autoComplete="profession"
                {...field}
              />
            )}
          />
          <Controller
            name="education"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Necessário preencher a escolaridade!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Escolaridade"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.email?.message}
                errorMessage={!!errors && errors.email?.message}
                autoComplete="education"
                {...field}
              />
            )}
          />
        </div>

        <div className="row">
          <Controller
            name="phone"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Necessário preencher o celular!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Celular"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.email?.message}
                errorMessage={!!errors && errors.email?.message}
                autoComplete="phone"
                {...field}
              />
            )}
          />
          <Controller
            name="photo"
            control={control}
            rules={{}}
            render={({ field }) => (
              <Input
                type="text"
                label="Foto"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.email?.message}
                errorMessage={!!errors && errors.email?.message}
                autoComplete="photo"
                {...field}
              />
            )}
          />
        </div>

        <div className="flex flex-row gap-6 w-[50%] h-fit ml-auto">
          <Button
            type="button"
            isLoading={isLoading}
            className="w-full h-12 bg-token-danger text-token-white text-medium"
          >
            CANCELAR
          </Button>

          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full h-12 bg-token-success text-token-white  text-base"
          >
            CADASTRAR
          </Button>
        </div>
      </form>
    </div>
  )
}
