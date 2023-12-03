import { useContext } from 'react';

import styles from './Register.module.css';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';


export default function Register() {

    const registerFormKeys = {
        Email: 'email',
        Password: 'password',
        Name: 'name',
        Surname: 'surname',
        Studio: 'studio',
        Group: 'group'
    }

    const {registerSubmitHandler} = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [registerFormKeys.Email]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.Name]: '',
        [registerFormKeys.Surname]: '',
        [registerFormKeys.Studio]: '',
        [registerFormKeys.Group]: '',
    })

    return (

        <div className={styles.registrationForm}>
            
            {/* <script src="assets/js/script.js"></script> */}
            <form onSubmit={onSubmit}>
               
                <div className={styles.formIcon}>
                   <img src="public/img/logo_red.png" alt="logo" />
                   <h5>Стани част от семейството на Еремия</h5>
                </div>
                <div className={styles.formGroup}>
                    <input type="text" 
                    className="form-control item" 
                    id="email" 
                    placeholder="Имейл"
                    name="email"
                    onChange={onChange}
                    values={values[registerFormKeys.Email]} 
                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="password" 
                    className="form-control item" 
                    id="password" 
                    placeholder="Парола" 
                    name="password"
                    onChange={onChange}
                    values={values[registerFormKeys.Password]}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" 
                    className="form-control item" 
                    id="name" 
                    placeholder="Име" 
                    name="name"
                    onChange={onChange}
                    values={values[registerFormKeys.Name]}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" 
                    className="form-control item" 
                    id="surname" 
                    placeholder="Фамилия" 
                    name="surname"
                    onChange={onChange}
                    values={values[registerFormKeys.Surname]}
                    />
                </div>

                <div className={styles.formGroup}>
                    <input type="text" 
                    className="form-control item" 
                    id="studio" 
                    placeholder="Зала" 
                    name="studio"
                    onChange={onChange}
                    values={values[registerFormKeys.Studio]}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" 
                    className="form-control item" 
                    id="group" 
                    placeholder="Група" 
                    name="group"
                    onChange={onChange}
                    values={values[registerFormKeys.Group]}
                    />
                </div>
                {/* <div className={styles.formGroup}>
                    <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date" />
                </div> */}
                <div className={styles.formGroup}>
                    <button type="submit" className={[ styles.createAccount]}>Регистрация</button>
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


