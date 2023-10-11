'use client'

import { createPatient } from '@/services'
import { GENDER_OPTIONS } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useHookFormMask } from 'use-mask-input'
import { z } from 'zod'

export function PatientRegistrationForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const createPatientFormSchema = z.object({
    name: z.string().min(1, 'É necessário preencher o nome!'),
    lastname: z.string().min(1, 'É necessário preencher o nome!'),
    email: z.string().min(1, 'É necessário preencher o nome!'),
    gender: z.string().min(1, 'É necessário preencher o nome!'),
    birthdate: z.string().min(1, 'É necessário preencher o nome!'),
    cpf: z.string().min(1, 'É necessário preencher o nome!'),
    phone: z.string().min(1, 'É necessário preencher o nome!'),
    profession: z.string().min(1, 'É necessário preencher o nome!'),
    education: z.string().min(1, 'É necessário preencher o nome!'),
    photo: z.string().min(1, 'É necessário preencher o nome!')
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
        <Input
          type="text"
          label="Nome"
          variant="bordered"
          className="w-full h-fit"
          isInvalid={!!errors.name?.message}
          errorMessage={!!errors && errors.name?.message}
          autoComplete="name"
          {...register('name')}
        />
        <Input
          type="text"
          label="Sobrenome"
          variant="bordered"
          className="w-full h-fit"
          isInvalid={!!errors.lastname?.message}
          errorMessage={!!errors && errors.lastname?.message}
          autoComplete="last-name"
          {...register('lastname')}
        />
        <Input
          type="text"
          label="E-mail"
          variant="bordered"
          className="w-full h-fit"
          isInvalid={!!errors.email?.message}
          errorMessage={!!errors && errors.email?.message}
          autoComplete="email"
          {...register('email')}
        />
        <Input
          type="text"
          label="CPF"
          variant="bordered"
          className="w-full h-fit"
          isInvalid={!!errors.cpf?.message}
          errorMessage={!!errors && errors.cpf?.message}
          autoComplete="cpf"
          {...register('cpf')}
          {...registerWithMask('cpf', ['999.999.999-99'])}
        />
        <Input
          type="text"
          label="Data de nascimento"
          variant="bordered"
          className="w-full h-fit"
          isInvalid={!!errors.birthdate?.message}
          errorMessage={!!errors && errors.birthdate?.message}
          autoComplete="birth-date"
          {...register('birthdate')}
          {...registerWithMask('birthdate', ['99/99/9999'])}
        />
        <Select
          label="Selecione um gênero"
          className="w-full h-fit"
          variant="bordered"
          isInvalid={!!errors.gender?.message}
          errorMessage={!!errors && errors.gender?.message}
          {...register('gender')}
        >
          {GENDER_OPTIONS.map((gender) => (
            <SelectItem key={gender.value} value={gender.value}>
              {gender.label}
            </SelectItem>
          ))}
        </Select>
        <Input
          type="text"
          label="Profissão"
          variant="bordered"
          className="w-full h-fit"
          isInvalid={!!errors.profession?.message}
          errorMessage={!!errors && errors.profession?.message}
          autoComplete="profession"
          {...register('profession')}
        />
        <Input
          type="text"
          label="Escolaridade"
          variant="bordered"
          className="w-full h-fit"
          isInvalid={!!errors.education?.message}
          errorMessage={!!errors && errors.education?.message}
          autoComplete="education"
          {...register('education')}
        />
        <Input
          type="text"
          label="Celular"
          variant="bordered"
          className="w-full h-fit"
          isInvalid={!!errors.phone?.message}
          errorMessage={!!errors && errors.phone?.message}
          autoComplete="phone"
          {...register('phone')}
        />
        <Input
          type="text"
          label="Foto"
          variant="bordered"
          className="w-full h-fit"
          isInvalid={!!errors.photo?.message}
          errorMessage={!!errors && errors.photo?.message}
          autoComplete="photo"
          {...register('photo')}
        />
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
