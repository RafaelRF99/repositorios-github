import styles from './Layout.module.scss'

import { useQuery } from 'react-query'
import axios from 'axios'

import SideBar from '../../components/SideBar'
import MenuBar from '../../components/menuBar'
import Reading from '../Reading'
import { useUser } from '../../data/hooks/useUser'

interface GithubApiProps {
    name: string
    description: string
}

export default function Layout() {
    const { username } = useUser()

    const { data } = useQuery<GithubApiProps[]>('Repositório', async () => {
        const res = await axios.get(
            `https://api.github.com/users/${username}/repos`,
        )

        return res.data
    })

    return (
        <div className={styles.container}>
            <SideBar username={username} />
            <div className={styles.content}>
                <div className={styles.menu}>
                    <MenuBar />
                </div>
                <div className={styles.display}>
                    <div>
                        {data?.map((repo, i) => {
                            return (
                                <Reading
                                    key={i}
                                    name={repo.name}
                                    description={repo.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
