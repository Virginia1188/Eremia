import { useContext, useState } from 'react';

import styles from './Register.module.css';

import AuthContext from '../../contexts/authContext';
import useFormAuth from '../../hooks/useFormAuth';


export default function Register() {

    const registerFormKeys = {
        Email: 'email',
        Password: 'password',
        Name: 'name',
        Surname: 'surname',
        Studio: 'studio',
        Group: 'group',
        Admin: 'admin',
        IsChecked: 'isChecked',
        AdminPass: 'adminPass'
    }

    const [isAdmin, setIsAdmin] = useState(false);

console.log('is admin', isAdmin);
    const handleAdminCheckboxChange = (e) => {
        setIsAdmin((prevIsAdmin) => {
          if (e.target.checked) {
            console.log(prevIsAdmin); 
            // registerFormKeys.IsChecked=!prevIsAdmin;
          }
          return !prevIsAdmin;
        });
      }

    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useFormAuth(registerSubmitHandler, {
        [registerFormKeys.Email]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.Name]: '',
        [registerFormKeys.Surname]: '',
        [registerFormKeys.Studio]: '',
        [registerFormKeys.Group]: '',
        [registerFormKeys.Admin]: false,
        // [registerFormKeys.IsChecked]: isAdmin,
        [registerFormKeys.AdminPass]: '',
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

                    <select
                        id="dropdown-studio"
                        className="form-control item"
                        name="studio"
                        values={values[registerFormKeys.Studio]}
                        onChange={onChange}
                    >
                        <option value="">Избери Зала</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                    {/* {selectedOption && (
                        <p>You selected: {selectedOption}</p>
                    )} */}
                </div>
                <div className={styles.formGroup}>

                    <select
                        id="dropdown-group"
                        className="form-control item"
                        name="group"
                        values={values[registerFormKeys.Group]}
                        onChange={onChange}
                    >
                        <option value="">Избери Група</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                    {/* {selectedOption && (
                        <p>You selected: {selectedOption}</p>
                    )} */}
                </div>
                <label>
                    Регистрация на админ:
                    <input
                        type="checkbox"
                        name='admin'
                        checked={isAdmin}
                        // values={values[registerFormKeys.IsChecked]}
                        onChange={handleAdminCheckboxChange}
                    />
                </label>

                {isAdmin &&
                    <div className={styles.formGroup}>
                        <input type="text"
                            className="form-control item"
                            id="adminPass"
                            placeholder="Админ парола"
                            name="adminPass"
                            onChange={onChange}
                            values={values[registerFormKeys.AdminPass]}
                        />
                    </div>}
                <div className={styles.formGroup}>
                    <button type="submit" className={[styles.createAccount]}>Регистрация</button>
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


