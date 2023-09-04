import styles from './Reading.module.scss'

interface ReadingProps {
    name: string
    description: string
}

export default function Reading(props: ReadingProps) {
    return (
        <div className={styles.container}>
            <h1>{props.name}</h1>
            {props.description === null ? (
                <p>Em desenvolvido...</p>
            ) : (
                <p>{props.description}</p>
            )}
        </div>
    )
}
