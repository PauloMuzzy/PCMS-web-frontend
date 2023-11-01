import styled from 'windstitch'

export const Wrapper = styled.div(`
  flex 
  flex-col 
  justify-start 
  items-center 
  gap-4 
  w-full 
  h-fit 
  bg-token-white 
  rounded-lg 
  shadow-xl 
  p-6
`)

export const Form = styled.form(`
  flex 
  flex-col 
  gap-4 
  w-full 
  h-fit 
  p-8 
`)

export const Title = styled.h1(`
  text-3xl 
  text-token-primary 
  font-bold 
`)

export const Row = styled.div(`
  flex 
  w-full 
  h-fit 
  gap-6
`)

export const ButtonWrapper = styled.div(`
  flex 
  flex-row 
  gap-6 
  w-[50%] 
  h-fit 
  ml-auto 
  mt-4"
`)
