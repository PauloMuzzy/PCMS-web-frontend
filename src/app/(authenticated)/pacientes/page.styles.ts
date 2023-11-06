import { w } from 'windstitch'

export const Wrapper = w.div(``)

export const Section = w.section(`
  w-screen 
  h-screen 
  grid 
  grid-rows-[112px_auto] 
  grid-cols-[max-content_auto]
`)

export const Nav = w.nav(`
  w-64 
  h-full 
  row-span-2
`)

export const Header = w.header(`
  w-full 
  h-28
`)

export const Main = w.main(`
  w-full 
  h-full 
  col-start-2 
  bg-token-gray-200
  p-8
`)
