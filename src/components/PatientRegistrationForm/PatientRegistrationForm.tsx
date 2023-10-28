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
import * as W from './PatientRegistrationForm.styles'
import { PatientRegistrationForm } from './PatientRegistrationForm.types'

export function PatientRegistrationForm({ patient }: PatientRegistrationForm) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
    defaultValues: {
      name: patient?.name,
      lastname: patient?.lastname,
      email: patient?.email,
      gender: patient?.gender,
      birthdate: patient?.birthdate,
      cpf: patient?.cpf,
      phone: patient?.phone,
      profession: patient?.profession,
      education: patient?.education
    },
    resolver: zodResolver(createPatientFormSchema)
  })

  const onSubmit: SubmitHandler<CreatePatientFormData> = async (
    data: CreatePatientFormData
  ): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await createPatient(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <W.Wrapper>
      <W.Form onSubmit={handleSubmit(onSubmit)}>
        <W.Title>Cadastro de Paciente</W.Title>
        <W.Row>
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
        </W.Row>
        <W.Row>
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
        </W.Row>
        <W.Row>
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
        </W.Row>
        <W.Row>
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
        </W.Row>
        <W.Row>
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
        </W.Row>
        <W.ButtonWrapper>
          <Button
            isLoading={isLoading}
            colorScheme="blue"
            variant="solid"
            type="submit"
            size="lg"
            width="full"
          >
            {patient ? 'EDITAR' : 'CADASTRAR'}
          </Button>
        </W.ButtonWrapper>
      </W.Form>
    </W.Wrapper>
  )
}
