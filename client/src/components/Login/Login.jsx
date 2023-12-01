import styles from './Login.module.css';


export default function Login() {

    return (

        <div className={styles.registrationForm}>
            
            {/* <script src="assets/js/script.js"></script> */}
            <form>
               
                <div className={styles.formIcon}>
                   <img src="public/img/logo_red.png" alt="logo" />
                   <h5>Влез в своя профил</h5>
                </div>
                <div className={styles.formGroup}>
                    <input type="text" className="form-control item" id="username" placeholder="Потребителско име" />
                </div>
                <div className={styles.formGroup}>
                    <input type="password" className="form-control item" id="password" placeholder="Парола" />
                </div>
               
                <div className={styles.formGroup}>
                    <button type="button" className={[ styles.createAccount]}>Вход</button>
                </div>
            </form>
            <div className={styles.socialMedia}>
                <h5>Нямате профил</h5>
                <h5>Стани част от семйството на Еремия</h5>
                <div className={styles.socialIcons}>
                    <a href="/register">Регистрация</a>

                </div>
            </div>
        </div>
    );
}