import { w } from 'windstitch'

export const Wrapper = w.div(`
  container 
  bg-blue-400
`)

export const CardListHeader = w.div(`
  flex 
  flex-row 
  justify-between 
  items-center  
  h-fit 
  p-2 
  w-[calc(100%-112px)] 
  overflow-y-auto
`)
