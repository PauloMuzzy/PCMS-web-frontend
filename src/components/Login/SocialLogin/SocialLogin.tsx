'use client'

import { FacebookIcon, GoogleIcon } from '@/Icons'

import { useState } from 'react'

export function SocialLogin() {
  const [facebookLoading, setFacebookLoading] = useState<boolean>(false)
  const [googleLoading, setGoogleLoading] = useState<boolean>(false)

  return (
    <div className="flex flex-col justify-center items-center w-full h-fit gap-unit-sm"></div>
  )
}
