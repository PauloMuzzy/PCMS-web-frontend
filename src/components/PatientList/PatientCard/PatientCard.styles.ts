import styled from 'windstitch'

export const Wrapper = styled.div(`
  flex 
  flex-row 
  w-full
`)

export const CardHeader = styled.h2(`
  flex 
  flex-row
  items-center
  justify-between
  gap-4
`)

export const PatientImageWrapper = styled.div(`
  p-2
  w-fit
  h-fit
`)

export const PatientImage = styled.span(`
  rounded-full 
  h-10
  w-10
  flex 
  items-center 
  justify-center
  bg-token-primary
  text-token-white
`)

export const PatientName = styled.div(`
  w-24
  h-full
`)

export const PatientLastname = styled.div(`
  w-24
  h-full
`)

export const PatientEmail = styled.div(`
  w-full
  h-full
`)

export const ShowMoreButtonWrapper = styled.div(`
  max-w-10
  h-full
`)
