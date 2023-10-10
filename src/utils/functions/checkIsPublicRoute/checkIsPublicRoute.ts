import { PUBLIC_ROUTES } from '@/utils'

export const checkIsPublicRoute = (asPath: string) => {
  const appPublicRoutes = Object.values(PUBLIC_ROUTES)
  return appPublicRoutes.includes(asPath)
}
