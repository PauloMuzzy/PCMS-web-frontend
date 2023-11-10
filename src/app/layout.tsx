'use client'

import { Roboto } from 'next/font/google'
import './globals.css'

import { NextUIProvider } from '@nextui-org/react'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
