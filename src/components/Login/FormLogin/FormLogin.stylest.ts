import { w } from 'windstitch'

export const Wrapper = w.div(`
  flex 
  flex-col 
  justify-center 
  items-center 
  gap-8 
  w-96 
  h-fit 
  bg-token-light 
  p-6 
  rounded-lg 
  my-auto 
  shadow-md
`)

export const Title = w.h1(`
  w-full 
  text-left 
  text-3xl 
  text-token-primary 
  font-black
`)

export const Form = w.form(`
  flex 
  flex-col 
  justify-center 
  items-center 
  w-full 
  h-fit 
  gap-4
`)

export const ButtonWrapper = w.div(`
  flex 
  flex-col 
  w-full 
  h-fit 
  justify-center 
  items-center 
  gap-4
`)
