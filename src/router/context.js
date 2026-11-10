import { createContext, useContext } from 'react'

export const RouterContext = createContext(null)

function useRouter() {
  const context = useContext(RouterContext)
  if (!context) throw new Error('useRouter must be used inside a RouterProvider')
  return context
}

export const useRoute = () => useRouter().route
export const useLocation = () => useRouter().location
export const useNavigate = () => useRouter().navigate
