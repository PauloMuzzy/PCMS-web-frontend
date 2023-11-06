'use client'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  EDUCATION_OPTIONS,
  GENDER_OPTIONS,
  PROFESSION_OPTIONS,
  initialLettersIntoCapitalLetters
} from '../../../../utils'
import * as S from './PersonalData.styles'
import { PersonalDataProps } from './PersonalData.types'

export function PersonalData({ patient }: PersonalDataProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [inputDisabled, setInputDisabeld] = useState<boolean>(true)

  const createPatientFormSchema = z.object({
    name: z
      .string()
      .trim()
      .transform((name) => {
        return initialLettersIntoCapitalLetters(name)
      }),
    lastname: z
      .string()
      .trim()
      .transform((lastname) => {
        return initialLettersIntoCapitalLetters(lastname)
      }),
    email: z.string().trim().email('E-mail inválido, tente outro!'),
    gender: z.string().trim(),
    birthdate: z.string().trim(),
    cpf: z.string().trim(),
    phone: z.string().trim(),
    profession: z.string().trim(),
    education: z.string().trim()
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
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <AccordionItem>
        <AccordionButton display={'flex'} justifyContent={'space-between'}>
          Dados pessoais
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Row>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Nome</FormLabel>
                <Input
                  {...register('name')}
                  type="text"
                  size="lg"
                  disabled={inputDisabled}
                />
                <FormErrorMessage>
                  {!!errors && errors.name?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.lastname}>
                <FormLabel>Sobrenome</FormLabel>
                <Input
                  {...register('lastname')}
                  type="text"
                  size="lg"
                  disabled={inputDisabled}
                />
                <FormErrorMessage>
                  {!!errors && errors.lastname?.message}
                </FormErrorMessage>
              </FormControl>
            </S.Row>
            <S.Row>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel>E-mail</FormLabel>
                <Input
                  {...register('email')}
                  type="text"
                  size="lg"
                  disabled={inputDisabled}
                />
                <FormErrorMessage>
                  {!!errors && errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.cpf}>
                <FormLabel>CPF</FormLabel>
                <Input
                  {...register('cpf')}
                  type="text"
                  size="lg"
                  disabled={inputDisabled}
                />
                <FormErrorMessage>
                  {!!errors && errors.cpf?.message}
                </FormErrorMessage>
              </FormControl>
            </S.Row>
            <S.Row>
              <FormControl isInvalid={!!errors.birthdate}>
                <FormLabel>Data de nascimento</FormLabel>
                <Input
                  {...register('birthdate')}
                  type="date"
                  size="lg"
                  disabled={inputDisabled}
                />
                <FormErrorMessage>{errors.birthdate?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.gender}>
                <FormLabel>Gênero</FormLabel>
                <Select
                  {...register('gender')}
                  size="lg"
                  placeholder="Selecione uma gênero"
                  disabled={inputDisabled}
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
            </S.Row>
            <S.Row>
              <FormControl isInvalid={!!errors.gender}>
                <FormLabel>Profissão</FormLabel>
                <Select
                  {...register('profession')}
                  size="lg"
                  placeholder="Selecione uma profissão"
                  disabled={inputDisabled}
                >
                  {PROFESSION_OPTIONS.map((item, index) => {
                    return (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    )
                  })}
                </Select>
                <FormErrorMessage>
                  {errors.profession?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.education}>
                <FormLabel>Escolaridade</FormLabel>
                <Select
                  {...register('education')}
                  size="lg"
                  placeholder="Selecione uma escolaridade"
                  disabled={inputDisabled}
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
            </S.Row>
            <S.Row>
              <FormControl isInvalid={!!errors.phone}>
                <FormLabel>Celular</FormLabel>
                <Input
                  {...register('phone')}
                  type="text"
                  size="lg"
                  disabled={inputDisabled}
                />
                <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
              </FormControl>
            </S.Row>
            <S.ButtonWrapper>
              <Button
                colorScheme="red"
                variant="link"
                type="button"
                size="lg"
                width="full"
                onClick={() => setInputDisabeld(!inputDisabled)}
              >
                {inputDisabled ? 'LIBERAR EDIÇÃO' : 'BLOQUEAR EDIÇÃO'}
              </Button>
              {!inputDisabled && (
                <Button
                  colorScheme="green"
                  variant="solid"
                  type="button"
                  size="lg"
                  width="full"
                >
                  EDITAR
                </Button>
              )}
            </S.ButtonWrapper>
          </S.Form>
        </AccordionPanel>
      </AccordionItem>
    </S.Wrapper>
  )
}
