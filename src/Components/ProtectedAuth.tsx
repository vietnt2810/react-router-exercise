import { Navigate, useLocation } from 'react-router-dom'
import { WrapperChildren } from '../types/WrapperChildren'

export const RequireAuth = ({ children }: WrapperChildren) => {
    const location = useLocation()

    if (localStorage.getItem('user') == null) {
        return <Navigate to='/login' state={{ path: location.pathname }} />
    }
    return <>{children}</>
}

export const AlreadyAuth = ({ children }: WrapperChildren) => {
    if (localStorage.getItem('user') != null) {
        return <Navigate to='/' />
    }
    return <>{children}</>
}
