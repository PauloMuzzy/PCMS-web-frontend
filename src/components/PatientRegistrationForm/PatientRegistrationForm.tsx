'use client'

import { createPatient } from '@/services'
import {
  GENDER_OPTIONS,
  PROFESSION_OPTIONS,
  initialLettersIntoCapitalLetters
} from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useHookFormMask } from 'use-mask-input'
import { z } from 'zod'

export function PatientRegistrationForm() {
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
    photo: z.string()
  })

  type CreatePatientFormData = z.infer<typeof createPatientFormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreatePatientFormData>({
    resolver: zodResolver(createPatientFormSchema)
  })

  const registerWithMask = useHookFormMask(register)

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

  return (
    <div className="flex flex-col justify-start items-center gap-4 max-w-[1024px] w-full h-fit bg-token-white rounded-lg shadow-xl p-6">
      <form
        className="flex flex-col gap-6 w-full h-fit"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row gap-6">
          <Input
            type="text"
            label="Nome"
            placeholder="ex: Jhon"
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            isInvalid={!!errors.name?.message}
            errorMessage={!!errors && errors.name?.message}
            autoComplete="name"
            {...register('name')}
          />
          <Input
            type="text"
            label="Sobrenome"
            placeholder="ex: Silva"
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            isInvalid={!!errors.lastname?.message}
            errorMessage={!!errors && errors.lastname?.message}
            autoComplete="last-name"
            {...register('lastname')}
          />
        </div>
        <div className="row gap-6">
          <Input
            type="text"
            label="E-mail"
            placeholder="ex: paciente@pcms.com"
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            isInvalid={!!errors.email?.message}
            errorMessage={!!errors && errors.email?.message}
            autoComplete="email"
            {...register('email')}
          />
          <Input
            type="text"
            label="CPF"
            placeholder="ex: 999.999.999-99"
            variant="bordered"
            className="w-full h-full"
            size="lg"
            isInvalid={!!errors.cpf?.message}
            errorMessage={!!errors && errors.cpf?.message}
            autoComplete="cpf"
            {...register('cpf')}
            {...registerWithMask('cpf', ['999.999.999-99'])}
          />
        </div>
        <div className="row gap-6">
          <Input
            type="date"
            label="Data de nascimento"
            placeholder={' '}
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            isInvalid={!!errors.birthdate?.message}
            errorMessage={!!errors && errors.birthdate?.message}
            autoComplete="birth-date"
            {...register('birthdate')}
          />
          <Select
            label="Gênero"
            placeholder="Selecione um gênero"
            className="w-full h-fit"
            size="lg"
            variant="bordered"
            isInvalid={!!errors.gender?.message}
            errorMessage={!!errors && errors.gender?.message}
            {...register('gender')}
          >
            {GENDER_OPTIONS.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="row gap-6">
          <Select
            label="Profissão"
            placeholder="Selecione uma profissão"
            className="w-full h-fit"
            size="lg"
            variant="bordered"
            isInvalid={!!errors.profession?.message}
            errorMessage={!!errors && errors.profession?.message}
            {...register('profession')}
          >
            {PROFESSION_OPTIONS.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            type="text"
            label="Escolaridade"
            placeholder="Selecione uma escolaridade"
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            isInvalid={!!errors.education?.message}
            errorMessage={!!errors && errors.education?.message}
            autoComplete="education"
            {...register('education')}
          />
        </div>
        <div className="row gap-6">
          <Input
            type="text"
            variant="bordered"
            className="w-full h-fit"
            label="Celular"
            placeholder="ex: (99)99999-9999"
            size="lg"
            isInvalid={!!errors.phone?.message}
            errorMessage={!!errors && errors.phone?.message}
            autoComplete="phone"
            {...register('phone')}
            {...registerWithMask('phone', ['(99)99999-9999'])}
          />
          <Input
            type="text"
            label="Foto"
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            isInvalid={!!errors.photo?.message}
            errorMessage={!!errors && errors.photo?.message}
            autoComplete="photo"
            {...register('photo')}
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
