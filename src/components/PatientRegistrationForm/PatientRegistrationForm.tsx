'use client'

import { GENDER_OPTIONS } from '@/utils'
import { useState } from 'react'
import { Input } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import InputMask from "react-input-mask";

export function PatientRegistrationForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
                isInvalid={!!errors.name?.message}
                errorMessage={!!errors && errors.name?.message}
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
                isInvalid={!!errors.lastName?.message}
                errorMessage={!!errors && errors.lastName?.message}
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
              },
              pattern: {
                value: /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/,
                message: 'CPF inválido!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="CPF"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.cpf?.message}
                errorMessage={!!errors && errors.cpf?.message}
                autoComplete="cpf"

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
              }, 
              pattern: {
                value: /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/,
                message: 'Data de nascimento inválida!'
              }
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Data de nascimento"
                variant="bordered"
                className="w-full h-fit"
                isInvalid={!!errors.birthDate?.message}
                errorMessage={!!errors && errors.birthDate?.message}
                autoComplete="birth-date"
                {...field}
              />
            )}
          />
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
              <Select 
              label="Selecione um gênero" 
              className="w-full h-fit"
              variant="bordered"
              isInvalid={!!errors.gender?.message}
              errorMessage={!!errors && errors.gender?.message}
              {...field}
            >
              {GENDER_OPTIONS.map((gender) => (
                <SelectItem key={gender.value} value={gender.value}>
                  {gender.label}
                </SelectItem>
              ))}
            </Select>
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
                isInvalid={!!errors.profession?.message}
                errorMessage={!!errors && errors.profession?.message}
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
                isInvalid={!!errors.education?.message}
                errorMessage={!!errors && errors.education?.message}
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
                isInvalid={!!errors.phone?.message}
                errorMessage={!!errors && errors.phone?.message}
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
                isInvalid={!!errors.photo?.message}
                errorMessage={!!errors && errors.photo?.message}
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
