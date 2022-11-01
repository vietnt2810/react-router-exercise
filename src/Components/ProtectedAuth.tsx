import { useAuth } from './Auth'
import { Navigate, useLocation } from 'react-router-dom'
import { WrapperChildren } from '../types/WrapperChildren'
export const RequireAuth = ({ children }: WrapperChildren) => {
    const location = useLocation()
    const auth = useAuth()

    if (!auth?.user) {

        return <Navigate to='/login' state={{ path: location.pathname }} />
    }
    return <>{children}</>
}

export const AlreadyAuth = ({ children }: WrapperChildren) => {
    const auth = useAuth()
    if (auth?.user != null) {
        return <Navigate to='/page-a' />
    }
    return <>{children}</>
}
