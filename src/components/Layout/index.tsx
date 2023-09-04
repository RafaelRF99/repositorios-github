import styles from './Layout.module.scss'

import SideBar from '../../components/SideBar'
import MenuBar from '../../components/menuBar'
import Reading from '../Reading'

export default function Layout() {
    return (
        <div className={styles.container}>
            <SideBar />
            <div className={styles.content}>
                <div className={styles.menu}>
                    <MenuBar />
                </div>
                <div className={styles.display}>
                    <div>
                        <Reading />
                        <Reading />
                        <Reading />
                        <Reading />
                        <Reading />
                    </div>
                </div>
            </div>
        </div>
    )
}
