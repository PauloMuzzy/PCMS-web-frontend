'use client'

import { useState } from 'react'
import * as W from './SocialLogin.styles'

export function SocialLogin() {
  const [facebookLoading, setFacebookLoading] = useState<boolean>(false)
  const [googleLoading, setGoogleLoading] = useState<boolean>(false)

  return <W.Wrapper></W.Wrapper>
}
