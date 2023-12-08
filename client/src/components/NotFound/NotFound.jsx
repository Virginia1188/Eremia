import styles from './NotFound.module.css'

export default function NotFound() {
    return(
        <div className={styles.notFound}>
            <h2 className={styles.h1}>Тази страница не е налична в момента.</h2>
        </div>
    );
}