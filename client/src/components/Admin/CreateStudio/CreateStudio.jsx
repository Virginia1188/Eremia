import { useContext, useState } from 'react';

import styles from './CreateStudio.module.css';

import AuthContext from '../../../contexts/authContext';
import useForm from '../../../hooks/useForm';


export default function CreateStudio() {

    const registerFormKeys = {
        Email: 'email',
        Password: 'password',
        Name: 'name',
        Surname: 'surname',
        Studio: 'studio',
        Group: 'group',
        Admin: 'admin',
        AdminPass: 'adminPass'
    }

    const [isAdmin, setIsAdmin] = useState(false);

    const handleAdminCheckboxChange = (e) => {
        setIsAdmin(e.target.checked);

    }

    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [registerFormKeys.Email]: '',
        [registerFormKeys.Password]: '',
        [registerFormKeys.Name]: '',
        [registerFormKeys.Surname]: '',
        [registerFormKeys.Studio]: '',
        [registerFormKeys.Group]: '',
        [registerFormKeys.Admin]: false,
        [registerFormKeys.AdminPass]: '',
    })

    return (

        <div className={styles.registrationForm}>

            {/* <script src="assets/js/script.js"></script> */}
            <form onSubmit={onSubmit}>

                <div className={styles.formIcon}>
                    <img src="public/img/logo_red.png" alt="logo" />
                    <h5>Добави нова зала</h5>
                </div>
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="name"
                        placeholder="Име на студиото"
                        name="name"
                        onChange={onChange}
                        values={values[registerFormKeys.Name]}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="image"
                        placeholder="Снимка"
                        name="image"
                        onChange={onChange}
                        values={values[registerFormKeys.Image]}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="address"
                        placeholder="Адрес"
                        name="address"
                        onChange={onChange}
                        values={values[registerFormKeys.Address]}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="instructor"
                        placeholder="Ръководител"
                        name="instructor"
                        onChange={onChange}
                        values={values[registerFormKeys.Instructor]}
                    />
                </div>

                {/* <div className={styles.formGroup}>

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

                    {selectedOption && (
                        <p>You selected: {selectedOption}</p>
                    )}
                </div> */}
                {/* <div className={styles.formGroup}>

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

                    {selectedOption && (
                        <p>You selected: {selectedOption}</p>
                    )}
                </div> */}
                {/* <label>
                    Регистрация на админ:
                    <input type="checkbox" name='admin' checked={isAdmin} onChange={handleAdminCheckboxChange} />
                </label> */}

                {/* {isAdmin &&
                    <div className={styles.formGroup}>
                        <input type="text"
                            className="form-control item"
                            id="adminPass"
                            placeholder="Админ парола"
                            name="adminPass"
                            onChange={onChange}
                            values={values[registerFormKeys.AdminPass]}
                        />
                    </div>} */}

                <div className={styles.formGroup}>
                    <button type="submit" className={[styles.createAccount]}>Добави нова зала</button>
                </div>
            </form>
            {/* <div className={styles.socialMedia}>
                <h5>Имате профил</h5>
                <div className={styles.socialIcons}>
                    <a href="/login">Вход</a>

                </div>
            </div> */}
        </div>
    );
}