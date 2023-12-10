import { useContext } from 'react';

import styles from './Login.module.css';
import useFormAuth from '../../hooks/useFormAuth';
import AuthContext from '../../contexts/authContext';


const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}


export default function Login() {
    const { loginSubmitHandler, error } = useContext(AuthContext);

    console.log(error);

    const { values, onChange, onSubmit } = useFormAuth(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    })

    return (

        <div className={styles.registrationForm}>

            {/* <script src="assets/js/script.js"></script> */}
            <form onSubmit={onSubmit}>

                <div className={styles.formIcon}>
                    <img src="public/img/logo_red.png" alt="logo" />
                    <h5>Влез в своя профил</h5>
                </div>
                {error && (
                    <div className={styles.errorContainer}>
                        <p>{error}</p>
                    </div>

                )}

                <div className={styles.formGroup}>
                    <input
                        type="text"
                        className="form-control item"
                        id="username"
                        name={LoginFormKeys.Email}
                        placeholder="Потребителско име"
                        onChange={onChange}
                        value={values.email}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="password"
                        className="form-control item"
                        id="password"
                        name={LoginFormKeys.Password}
                        placeholder="Парола"
                        onChange={onChange}
                        value={values.password}
                    />
                </div>

                <div className={styles.formGroup}>
                    <button type="submit" className={[styles.createAccount]}>Вход</button>
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