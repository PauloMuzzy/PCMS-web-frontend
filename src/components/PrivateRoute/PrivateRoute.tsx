'use client'

import { checkUserAuthenticated } from '@/utils'
import { useRouter } from 'next/navigation'
import { ReactNode, useState } from 'react'

type PrivateRouteProps = {
  children: ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter()
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>()

  const handleAuth = async (): Promise<any> => {
    const isUserAuthenticated = await checkUserAuthenticated()
    if (!isUserAuthenticated) {
      push('/login')
      return
    }
    return <>{children}</>
  }

  return { handleAuth }
}
