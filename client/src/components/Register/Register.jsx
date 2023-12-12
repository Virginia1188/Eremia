import { useContext, useEffect, useState } from 'react';

import styles from './Register.module.css';

import AuthContext from '../../contexts/authContext';
import useFormAuth from '../../hooks/useFormAuth';
// import * as validator from '../../lib/validator';


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
    const [errors, setErrors] = useState({});

    const handleAdminCheckboxChange = (e) => {
        setIsAdmin((prevIsAdmin) => {
            if (e.target.checked) {
                console.log(prevIsAdmin);
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
        [registerFormKeys.AdminPass]: '',
    })

    const emailValidator = () => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(values[registerFormKeys.Email])) {
            setErrors(state => ({
                ...state,
                email: 'Email is not valid. Please enter a valid email address.',
            }));
        } else {
            if (errors.email) {
                setErrors(state => ({ ...state, email: '' }));
            }
        }
    }

    const passwordValidator = () => {
        
        const pass = values[registerFormKeys.Password];
        if (pass.length < 6) {
            setErrors(state => ({
                ...state,
                password: 'Password must be minimum 6 character.',
            }));
        } else {
            if (errors.password) {
                setErrors(state => ({ ...state, password: '' }));
            }
        }
    }

    const nameValidator = () => {
        const regex = /^[a-zA-Z]+(?:[-\s][a-zA-Z]+)*$/;
        if (!regex.test(values[registerFormKeys.Name])) {
            setErrors(state => ({
                ...state,
                name: 'Name cannot contain any special characters or numbers',
            }));
        } else {
            if (errors.name) {
                setErrors(state => ({ ...state, name: '' }));
            }
        }
    }

    const surnameValidator = () => {
        const regex = /^[a-zA-Z]+(?:[-\s][a-zA-Z]+)*$/;
        if (!regex.test(values[registerFormKeys.Surname])) {
            setErrors(state => ({
                ...state,
                surname: 'Surname cannot contain any special characters or numbers',
            }));
        } else {
            if (errors.surname) {
                setErrors(state => ({ ...state, surname: '' }));
            }
        }
    }

    const isButtonDisabled =
    errors.email ||
    errors.password ||
    errors.name ||
    errors.surname ||
    errors.studio ||
    errors.group ||
    errors.adminPass;


    // console.log('errors', errors);
    return (

        <div className={styles.registrationForm}>

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
                        onBlur={emailValidator}
                        onChange={onChange}
                        values={values[registerFormKeys.Email]}
                    />
                </div>
                {errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                )}
                {!errors.email && (
                    <div className={styles.space}>
                    </div>
                )}
                <div className={styles.formGroup}>
                    <input type="password"
                        className="form-control item"
                        id="password"
                        placeholder="Парола"
                        name="password"
                        onBlur={passwordValidator}
                        onChange={onChange}
                        values={values[registerFormKeys.Password]}
                    />
                </div>
                {errors.password && (
                    <p className={styles.error}>{errors.password}</p>
                )}
                {!errors.password && (
                    <div className={styles.space}>
                    </div>
                )}
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="name"
                        placeholder="Име"
                        name="name"
                        onBlur={nameValidator}
                        onChange={onChange}
                        values={values[registerFormKeys.Name]}
                    />
                </div>
                {errors.name && (
                    <p className={styles.error}>{errors.name}</p>
                )}
                {!errors.name && (
                    <div className={styles.space}>
                    </div>
                )}
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="surname"
                        placeholder="Фамилия"
                        name="surname"
                        onBlur={surnameValidator}
                        onChange={onChange}
                        values={values[registerFormKeys.Surname]}
                    />
                </div>
                {errors.surname && (
                    <p className={styles.error}>{errors.surname}</p>
                )}
                {!errors.surname && (
                    <div className={styles.space}>
                    </div>
                )}

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
                {errors.studio && (
                    <p className={styles.error}>{errors.studio}</p>
                )}
                {!errors.studio && (
                    <div className={styles.space}>
                    </div>
                )}
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
                {errors.group && (
                    <p className={styles.error}>{errors.group}</p>
                )}
                {!errors.group && (
                    <div className={styles.space}>
                    </div>
                )}
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
                {errors.adminPass && (
                    <p className={styles.error}>{errors.adminPass}</p>
                )}
                {!errors.adminPass && (
                    <div className={styles.space}>
                    </div>
                )}
                <div className={styles.formGroup}>
                    <button 
                    type="submit" 
                    className={[styles.createAccount]}
                    disabled={isButtonDisabled}
                    >Регистрация</button>
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


