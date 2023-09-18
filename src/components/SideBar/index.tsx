import styles from './SideBar.module.scss'

import { useQuery } from 'react-query'
import axios from 'axios'

interface PerfilGitHub {
    login: string
    avatar_url: string
    name: string
    bio: string
}

interface SideBarProps {
    username: string
}

export default function SideBar({ username }: SideBarProps) {
    const { data } = useQuery<PerfilGitHub>('Perfil', async () => {
        const res = await axios.get(`https://api.github.com/users/${username}`)

        return res.data
    })

    return (
        <div className={styles.container}>
            <h1>Informações</h1>
            <img src={data?.avatar_url} alt={data?.name} />
            <div className={styles.inform}>
                <p>Login: {data?.login}</p>
                <p>Nome: {data?.name}</p>
                <p>Biografia: {data?.bio}</p>
            </div>
        </div>
    )
}
