import { w } from 'windstitch'

export const Wrapper = w.div(`
  flex 
  flex-row 
  w-full
`)

export const CardHeader = w.h2(`
  flex 
  flex-row
  items-center
  justify-between
  gap-4
`)

export const PatientImageWrapper = w.div(`
  p-2
  w-fit
  h-fit
`)

export const PatientImage = w.span(`
  rounded-full 
  h-10
  w-10
  flex 
  items-center 
  justify-center
  bg-token-primary
  text-token-white
`)

export const PatientName = w.div(`
  w-24
  h-full
`)

export const PatientLastname = w.div(`
  w-24
  h-full
`)

export const PatientEmail = w.div(`
  w-full
  h-full
`)

export const ShowMoreButtonWrapper = w.div(`
  max-w-10
  h-full
`)
