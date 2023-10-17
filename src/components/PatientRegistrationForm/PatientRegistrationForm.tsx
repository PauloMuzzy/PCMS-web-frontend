'use client'

import { createPatient } from '@/services'
import {
  GENDER_OPTIONS,
  PROFESSION_OPTIONS,
  initialLettersIntoCapitalLetters
} from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useHookFormMask } from 'use-mask-input'
import { z } from 'zod'

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export function PatientRegistrationForm() {
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
    // setIsLoading(true)
    try {
      const response = await createPatient(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      // setIsLoading(false)
    }
  }

  const row = 'flex flex-row justify-between items-start w-full max-h-14'
  const label = 'flex items-center justify-start w-64 h-full font-medium'

  return (
    <div className="flex flex-col justify-start items-center gap-4 max-w-[1024px] w-full h-fit bg-token-white rounded-lg shadow-xl p-6">
      <form
        className="flex flex-col gap-8 w-full h-fit p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl text-token-primary font-bold">
          Cadastro de Paciente
        </h1>
        <div className={row}>
          <label className={label}>Nome</label>
          <Input
            type="text"
            placeholder="ex: Jhon"
            variant="bordered"
            className="w-full h-fit"
            radius="sm"
            size="lg"
            isInvalid={!!errors.name?.message}
            errorMessage={!!errors && errors.name?.message}
            autoComplete="name"
            {...register('name')}
          />
        </div>
        <div className={row}>
          <label className={label}>Sobrenome</label>
          <Input
            type="text"
            placeholder="ex: Silva"
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            radius="sm"
            isInvalid={!!errors.lastname?.message}
            errorMessage={!!errors && errors.lastname?.message}
            autoComplete="last-name"
            {...register('lastname')}
          />
        </div>
        <div className={row}>
          <label className={label}>E-mail</label>
          <Input
            type="text"
            placeholder="ex: paciente@pcms.com"
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            radius="sm"
            isInvalid={!!errors.email?.message}
            errorMessage={!!errors && errors.email?.message}
            autoComplete="email"
            {...register('email')}
          />
        </div>
        <div className={row}>
          <label className={label}>CPF</label>
          <Input
            type="text"
            placeholder="ex: 999.999.999-99"
            variant="bordered"
            className="w-full h-full"
            size="lg"
            radius="sm"
            isInvalid={!!errors.cpf?.message}
            errorMessage={!!errors && errors.cpf?.message}
            autoComplete="cpf"
            {...register('cpf')}
            {...registerWithMask('cpf', ['999.999.999-99'])}
          />
        </div>
        <div className={row}>
          <label className={label}>Data de nascimento</label>
          <Input
            type="date"
            placeholder={' '}
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            radius="sm"
            isInvalid={!!errors.birthdate?.message}
            errorMessage={!!errors && errors.birthdate?.message}
            autoComplete="birth-date"
            {...register('birthdate')}
          />
        </div>
        <div className={row}>
          <label className={label}>Gênero</label>
          <Select
            placeholder="Selecione um gênero"
            className="w-full h-fit"
            size="sm"
            radius="sm"
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
        <div className={row}>
          <label className={label}>Profissão</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={PROFESSION_OPTIONS}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
            {...register('profession')}
          />

          {/* <Select
            className="max-w-xs"
            isLoading={isLoading}
            items={items}
            label="Pick a Pokemon"
            placeholder="Select a Pokemon"
            scrollRef={scrollerRef}
            selectionMode="single"
            onOpenChange={setIsOpen}
          >
            {(item) => (
              <SelectItem key={item.name} className="capitalize">
                {item.name}
              </SelectItem>
            )}
          </Select> */}
          {/* <Select
            placeholder="Selecione uma profissão"
            className="w-full h-fit"
            size="sm"
            radius="sm"
            variant="bordered"
            isInvalid={!!errors.profession?.message}
            errorMessage={!!errors && errors.profession?.message}
            {...register('profession')}
          >
            {GENDER_OPTIONS.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select> */}
        </div>
        <div className={row}>
          <label className={label}>Escolaridade</label>
          <Input
            type="text"
            placeholder="Selecione uma escolaridade"
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            radius="sm"
            isInvalid={!!errors.education?.message}
            errorMessage={!!errors && errors.education?.message}
            autoComplete="education"
            {...register('education')}
          />
        </div>
        <div className={row}>
          <label className={label}>Celular</label>
          <Input
            type="text"
            variant="bordered"
            className="w-full h-fit"
            placeholder="ex: (99)99999-9999"
            size="lg"
            radius="sm"
            isInvalid={!!errors.phone?.message}
            errorMessage={!!errors && errors.phone?.message}
            autoComplete="phone"
            {...register('phone')}
            {...registerWithMask('phone', ['(99)99999-9999'])}
          />
        </div>
        <div className={row}>
          <label className={label}>Foto</label>
          <Input
            type="text"
            variant="bordered"
            className="w-full h-fit"
            size="lg"
            radius="sm"
            isInvalid={!!errors.photo?.message}
            errorMessage={!!errors && errors.photo?.message}
            autoComplete="photo"
            {...register('photo')}
          />
        </div>
        <div className="flex flex-row gap-6 w-[50%] h-fit ml-auto">
          <Button
            type="button"
            isLoading={false}
            className="w-full h-12 bg-token-danger text-token-white text-medium"
          >
            CANCELAR
          </Button>
          <Button
            type="submit"
            isLoading={false}
            className="w-full h-12 bg-token-primary text-token-white  text-base"
          >
            CADASTRAR
          </Button>
        </div>
      </form>
    </div>
  )
}
