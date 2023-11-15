'use client'

import { SearchProfession } from '@/components/Patients/PatientRegistration/SearchProfession'
import { createPatient } from '@/services'
import {
  EDUCATION_OPTIONS,
  GENDER_OPTIONS,
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
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FiAlertCircle } from 'react-icons/fi'
import { z } from 'zod'

export function PatientRegistration() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchModalIsOpen, setSearchModalIsOpen] = useState<boolean>(false)

  const [professionLinst, setProfessionList] =
    useState<{ value: string; label: string }[]>()
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
    photo: z.any().optional(),
    securitycontactsname: z
      .string()
      .trim()
      .min(1, 'É necessário preencher o nome do contato de emergência!')
      .transform((securitycontactsname) => {
        return initialLettersIntoCapitalLetters(securitycontactsname)
      }),
    securitycontactslastname: z
      .string()
      .trim()
      .min(1, 'É necessário preencher o sobrenome do contato de emergência!')
      .transform((securitycontactslastname) => {
        return initialLettersIntoCapitalLetters(securitycontactslastname)
      }),
    securitycontactsphone: z
      .string()
      .trim()
      .min(1, 'É necessário preencher o Telefone do contato de emergência!'),
    securitycontactslastrelationship: z
      .string()
      .trim()
      .min(1, 'É necessário selecionar o parentesco do contato de emergência!')
  })

  type CreatePatientFormData = z.infer<typeof createPatientFormSchema>

  function searchProfession(value: string): void {
    setProfessionList([
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' },
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' },
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' },
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' },
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' },
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' },
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' },
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' },
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' },
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' },
      { value: 'oi', label: 'oi' },
      { value: 'tchau', label: 'tchau' }
    ])
  }

  const {
    register,
    handleSubmit,
    control,
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
    <Card className="w-[1024px]">
      <CardHeader className="text-xl text-gray-500 font-bold p-6">
        Cadastro de paciente
      </CardHeader>
      <Divider />
      <CardBody>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
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

          {/* ######################################################################################## */}

          <Controller
            control={control}
            name="profession"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  type="text"
                  value={value}
                  label="Profissão*"
                  placeholder="Clique aqui para buscar uma profissão"
                  onClick={() => setSearchModalIsOpen(!searchModalIsOpen)}
                  fullWidth
                  isInvalid={!!errors.profession}
                  variant={!!errors.profession ? 'bordered' : 'flat'}
                  errorMessage={!!errors && errors.profession?.message}
                  isReadOnly
                />
                <SearchProfession
                  openModal={searchModalIsOpen}
                  setModalOpen={setSearchModalIsOpen}
                  setOnChange={onChange}
                />
              </>
            )}
          />

          {/* ######################################################################################## */}

          <Textarea
            className="col-start-1 col-span-2"
            {...register('obs1')}
            label="Observação"
            fullWidth
            isInvalid={!!errors.obs1}
            variant={!!errors.obs1 ? 'bordered' : 'flat'}
            errorMessage={!!errors && errors.obs1?.message}
          />
          <div className="grid grid-cols-2 gap-4 col-span-2 p-4 m-4 rounded-lg border-solid border-1">
            <span className="flex justify-start items-center gap-2 col-span-2 text-red-600">
              <FiAlertCircle color="red" /> Contato de emergência
            </span>
            <Input
              {...register('securitycontactsname')}
              type="text"
              label="Nome*"
              isInvalid={!!errors.securitycontactslastname}
              variant={!!errors.securitycontactslastname ? 'bordered' : 'flat'}
              errorMessage={
                !!errors && errors.securitycontactslastname?.message
              }
            />
            <Input
              {...register('securitycontactslastname')}
              type="text"
              label="Sobrenome*"
              isInvalid={!!errors.securitycontactslastname}
              variant={!!errors.securitycontactslastname ? 'bordered' : 'flat'}
              errorMessage={
                !!errors && errors.securitycontactslastname?.message
              }
            />
            <Input
              {...register('securitycontactslastname')}
              type="text"
              label="Telefone*"
              isInvalid={!!errors.securitycontactslastname}
              variant={!!errors.securitycontactslastname ? 'bordered' : 'flat'}
              errorMessage={
                !!errors && errors.securitycontactslastname?.message
              }
            />
            <Select
              {...register('securitycontactslastrelationship')}
              items={GENDER_OPTIONS}
              label="Gênero*"
              fullWidth
              isInvalid={!!errors.securitycontactslastrelationship}
              variant={
                !!errors.securitycontactslastrelationship ? 'bordered' : 'flat'
              }
              errorMessage={
                !!errors && errors.securitycontactslastrelationship?.message
              }
            >
              {(gender) => (
                <SelectItem key={gender.value}>{gender.label}</SelectItem>
              )}
            </Select>
          </div>
          <span>(*) - campos obrigatórios</span>
          <Button
            type="submit"
            color="primary"
            fullWidth
            isLoading={isLoading}
            size="lg"
          >
            CADASTRAR
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}
