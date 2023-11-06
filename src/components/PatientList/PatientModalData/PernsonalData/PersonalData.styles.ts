import { w } from 'windstitch'

export const Wrapper = w.div(``)

export const Form = w.form(`
  flex 
  flex-col 
  gap-4 
  w-full 
  h-fit 
  p-8 
`)

export const Title = w.h1(`
  text-3xl 
  text-token-primary 
  font-bold 
`)

export const Row = w.div(`
  flex 
  w-full 
  h-fit 
  gap-6
`)

export const ButtonWrapper = w.div(`
  flex 
  flex-row 
  w-full
  h-fit 
`)
