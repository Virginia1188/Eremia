import styles from './Register.module.css';


export default function Register() {

    return (

        <div className={styles.registrationForm}>
            
            {/* <script src="assets/js/script.js"></script> */}
            <form>
               
                <div className={styles.formIcon}>
                   <img src="public/img/logo_red.png" alt="logo" />
                   <h5>Стани част от семйството на Еремия</h5>
                </div>
                <div className={styles.formGroup}>
                    <input type="text" className="form-control item" id="username" placeholder="Username" />
                </div>
                <div className={styles.formGroup}>
                    <input type="password" className="form-control item" id="password" placeholder="Password" />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" className="form-control item" id="email" placeholder="Email" />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date" />
                </div>
                <div className={styles.formGroup}>
                    <button type="button" className={[ styles.createAccount]}>Create Account</button>
                </div>
            </form>
            <div className={styles.socialMedia}>
                <h5>Имате профил</h5>
                <div className={styles.socialIcons}>
                    <a href="/login">Вход</a>

                </div>
            </div>
        </div>
    );
}


