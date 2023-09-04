import styles from './SideBar.module.scss'

export default function SideBar() {
    return (
        <div className={styles.container}>
            <h1>Informações</h1>
            <img
                src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png"
                alt="Usuario"
            />
            <div className={styles.inform}>
                <p>Nome</p>
                <p>Descrição</p>
                <p>Objetivo</p>
            </div>
        </div>
    )
}
