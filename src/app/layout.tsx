'use client'

import { checkIsPublicRoute } from '@/utils'
import { Roboto } from 'next/font/google'
import { usePathname } from 'next/navigation'
import './globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isPublicRoute = checkIsPublicRoute(pathname)

  return (
    <html lang="en">
      <body className={roboto.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
