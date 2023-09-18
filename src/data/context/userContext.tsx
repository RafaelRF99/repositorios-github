import { createContext, useState, ReactNode } from 'react'

interface UserContextProps {
    username: string
    handleUser: (name: string) => void
}

export const UserContext = createContext<UserContextProps>(null!)

export default function UserProvider({ children }: { children: ReactNode }) {
    const [username, setUsername] = useState('')

    function handleUser(name: string) {
        setUsername(name)
    }

    return (
        <UserContext.Provider value={{ username, handleUser }}>
            {children}
        </UserContext.Provider>
    )
}