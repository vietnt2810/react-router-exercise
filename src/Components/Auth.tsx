import { createContext, useContext, useState } from 'react'
import { WrapperChildren } from '../types/WrapperChildren'

interface AuthContext {
    user: string | null
    login: (user: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContext | null>(null)

const AuthProvider = ({ children }: WrapperChildren) => {
    const [user, setUser] = useState<string | null>(null)

    const login = (user: string) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}