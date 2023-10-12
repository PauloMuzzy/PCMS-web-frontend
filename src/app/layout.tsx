'use client'

import { checkIsPublicRoute } from '@/utils'
import { Roboto } from 'next/font/google'
import { usePathname } from 'next/navigation'
import './globals.css'

import { NextUIProvider } from '@nextui-org/react'
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
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
