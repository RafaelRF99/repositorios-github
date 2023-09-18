import styles from './App.module.scss'

import { Link } from 'react-router-dom'

import { useUser } from './data/hooks/useUser'

function App() {
    const { username, handleUser } = useUser()

    const isDisable = username.length <= 0 ? true : false

    return (
        <main className={styles.container}>
            <h1>
                Repositório <br /> GitHub
            </h1>
            <input type="text"
                value={username} onChange={e => handleUser(e.target.value)}
                placeholder='Digite seu repositório...' />
            {isDisable ? (
                <button>Entrar</button>
            ) : (
                <Link to={"/repository"}>
                    <button>Entrar</button>
                </Link>
            )}
        </main>
    )
}

export default App
