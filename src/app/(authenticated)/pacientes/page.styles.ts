import styled from 'windstitch'

export const Wrapper = styled.div(``)

export const Section = styled.section(`
  w-screen 
  h-screen 
  grid 
  grid-rows-[112px_auto] 
  grid-cols-[max-content_auto]
`)

export const Nav = styled.nav(`
  w-64 
  h-full 
  row-span-2
`)

export const Header = styled.header(`
  w-full 
  h-28
`)

export const Main = styled.main(`
  w-full 
  h-full 
  col-start-2 
  pt-16 
  pr-6 
  pb-3 
  pl-16
  bg-gradient-to-b from-token-secondary to-token-gray-300
`)
