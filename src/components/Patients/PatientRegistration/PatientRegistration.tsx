'use client'

import { createPatient } from '@/services'
import {
  EDUCATION_OPTIONS,
  GENDER_OPTIONS,
  PROFESSION_OPTIONS,
  initialLettersIntoCapitalLetters
} from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea
} from '@nextui-org/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

export function PatientRegistration() {
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
    obs1: z.string().trim(),
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
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="max-w-[400px]">
      <CardHeader>Cadastro de paciente</CardHeader>
      <Divider />
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            {...register('name')}
            type="text"
            label="Nome*"
            isInvalid={!!errors.name}
            variant={!!errors.name ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.name?.message}
          />
          <Input
            {...register('lastname')}
            type="text"
            label="Sobrenome*"
            isInvalid={!!errors.lastname}
            variant={!!errors.lastname ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.lastname?.message}
          />
          <Input
            {...register('email')}
            type="email"
            label="Email*"
            fullWidth
            isInvalid={!!errors.email}
            variant={!!errors.email ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.email?.message}
          />
          <Select
            {...register('gender')}
            items={GENDER_OPTIONS}
            label="Gênero*"
            fullWidth
            isInvalid={!!errors.gender}
            variant={!!errors.gender ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.gender?.message}
          >
            {(gender) => (
              <SelectItem key={gender.value}>{gender.label}</SelectItem>
            )}
          </Select>
          <Input
            {...register('birthdate')}
            type="date"
            label="Data de nascimento*"
            fullWidth
            placeholder={' '}
            isInvalid={!!errors.birthdate}
            variant={!!errors.birthdate ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.birthdate?.message}
          />
          <Input
            {...register('cpf')}
            type="text"
            label="CPF*"
            fullWidth
            isInvalid={!!errors.cpf}
            variant={!!errors.cpf ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.cpf?.message}
          />
          <Input
            {...register('phone')}
            type="text"
            label="Telefone*"
            fullWidth
            isInvalid={!!errors.phone}
            variant={!!errors.phone ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.phone?.message}
          />
          <Select
            {...register('education')}
            items={EDUCATION_OPTIONS}
            label="Escolaridade*"
            fullWidth
            isInvalid={!!errors.education}
            variant={!!errors.education ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.education?.message}
          >
            {(education) => (
              <SelectItem key={education.value}>{education.label}</SelectItem>
            )}
          </Select>
          <Select
            {...register('profession')}
            items={PROFESSION_OPTIONS}
            label="Profissão*"
            fullWidth
            isInvalid={!!errors.profession}
            variant={!!errors.profession ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.profession?.message}
          >
            {(profession) => (
              <SelectItem key={profession.value}>{profession.label}</SelectItem>
            )}
          </Select>
          <Textarea
            {...register('obs1')}
            label="Observação"
            fullWidth
            isInvalid={!!errors.obs1}
            variant={!!errors.obs1 ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.obs1?.message}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            isLoading={isLoading}
            size="lg"
          >
            CADASTRAR
          </Button>
          (*) - campos obrigatórios
        </form>
      </CardBody>
    </Card>
  )
}
