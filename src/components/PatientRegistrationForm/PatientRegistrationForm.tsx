'use client'

import { createPatient } from '@/services'
import {
  EDUCATION_OPTIONS,
  GENDER_OPTIONS,
  PROFESSION_OPTIONS,
  initialLettersIntoCapitalLetters
} from '@/utils'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

export function PatientRegistrationForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const MAX_FILE_SIZE = 500000
  const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp'
  ]

  const createPatientFormSchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, 'É necessário preencher o nome!')
      .transform((name) => {
        return initialLettersIntoCapitalLetters(name)
      }),
    lastname: z
      .string()
      .trim()
      .min(1, 'É necessário preencher o sobrenome!')
      .transform((lastname) => {
        return initialLettersIntoCapitalLetters(lastname)
      }),
    email: z
      .string()
      .trim()
      .min(1, 'É necessário preencher o e-mail!')
      .email('E-mail inválido, tente outro!'),
    gender: z.string().trim().min(1, 'É necessário selecionar o gênero!'),
    birthdate: z
      .string()
      .trim()
      .min(1, 'É necessário preencher a data de nascimento!'),
    cpf: z.string().trim().min(1, 'É necessário preencher o CPF!'),
    phone: z.string().trim().min(1, 'É necessário preencher o Telefone!'),
    profession: z
      .string()
      .trim()
      .min(1, 'É necessário selecionar a profissão!'),
    education: z
      .string()
      .trim()
      .min(1, 'É necessário selecionar a escolaridade!'),
    photo: z.any().optional()
  })

  type CreatePatientFormData = z.infer<typeof createPatientFormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreatePatientFormData>({
    resolver: zodResolver(createPatientFormSchema)
  })

  const onSubmit: SubmitHandler<CreatePatientFormData> = async (
    data: CreatePatientFormData
  ): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await createPatient(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const row = 'flex w-full h-fit gap-6'

  return (
    <div className="flex flex-col justify-start items-center gap-4 max-w-[1024px] w-full h-fit bg-token-white rounded-lg shadow-xl p-6">
      <form
        className="flex flex-col gap-4 w-full h-fit p-8 bg-token-gray-100"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl text-token-primary font-bold">
          Cadastro de Paciente
        </h1>
        <div className={row}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Nome</FormLabel>
            <Input {...register('name')} type="text" size="lg" />
            <FormErrorMessage>
              {!!errors && errors.name?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.lastname}>
            <FormLabel>Sobrenome</FormLabel>
            <Input {...register('lastname')} type="text" size="lg" />
            <FormErrorMessage>
              {!!errors && errors.lastname?.message}
            </FormErrorMessage>
          </FormControl>
        </div>
        <div className={row}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>E-mail</FormLabel>
            <Input {...register('email')} type="text" size="lg" />
            <FormErrorMessage>
              {!!errors && errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.cpf}>
            <FormLabel>CPF</FormLabel>
            <Input {...register('cpf')} type="text" size="lg" />
            <FormErrorMessage>
              {!!errors && errors.cpf?.message}
            </FormErrorMessage>
          </FormControl>
        </div>
        <div className={row}>
          <FormControl isInvalid={!!errors.birthdate}>
            <FormLabel>CPF</FormLabel>
            <Input {...register('birthdate')} type="date" size="lg" />
            <FormErrorMessage>{errors.birthdate?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.gender}>
            <FormLabel>Gênero</FormLabel>
            <Select
              {...register('gender')}
              size="lg"
              placeholder="Selecione uma gênero"
            >
              {GENDER_OPTIONS.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                )
              })}
            </Select>
            <FormErrorMessage>
              {!!errors && errors.gender?.message}
            </FormErrorMessage>
          </FormControl>
        </div>
        <div className={row}>
          <FormControl isInvalid={!!errors.gender}>
            <FormLabel>Profissão</FormLabel>
            <Select
              {...register('profession')}
              size="lg"
              placeholder="Selecione uma profissão"
            >
              {PROFESSION_OPTIONS.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                )
              })}
            </Select>
            <FormErrorMessage>{errors.profession?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.education}>
            <FormLabel>Escolaridade</FormLabel>
            <Select
              {...register('education')}
              size="lg"
              placeholder="Selecione uma escolaridade"
            >
              {EDUCATION_OPTIONS.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                )
              })}
            </Select>
            <FormErrorMessage>
              {!!errors && errors.education?.message}
            </FormErrorMessage>
          </FormControl>
        </div>
        <div className={row}>
          <FormControl isInvalid={!!errors.phone}>
            <FormLabel>Celular</FormLabel>
            <Input {...register('phone')} type="text" size="lg" />
            <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.photo}>
            <FormLabel>Foto</FormLabel>
            <Input {...register('photo')} type="file" size="lg" />
            <FormErrorMessage>
              {!!errors && errors.photo?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </div>
        <div className="flex flex-row gap-6 w-[50%] h-fit ml-auto mt-4">
          <Button
            isLoading={isLoading}
            colorScheme="blue"
            variant="solid"
            type="submit"
            size="lg"
            width="full"
          >
            CADASTRAR
          </Button>
        </div>
      </form>
    </div>
  )
}
