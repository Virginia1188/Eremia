import { useContext, useState } from 'react';

import styles from './CreateStudio.module.css';

import AuthContext, { AuthProvider } from '../../../contexts/authContext';
import useForm from '../../../hooks/useForm';
import * as studioService from '../../../services/studioService';
import { useNavigate } from 'react-router-dom';
import Path from '../../../paths';


export default function CreateStudio() {

    const registerFormKeys = {
        Name: 'name',
        Image: 'imageUrl',
        Address: 'address',
        Instructor: 'instructor',

    }

    const navigate = useNavigate();

    const { userId, isAdmin } = useContext(AuthContext);

    const createSubmitHandler = async (e) => {
        try {
            const result = await studioService.create(values, userId, isAdmin);
            console.log(values);
            navigate(Path.Studios);
        } catch (error) {
            console.log(error);
        }
    }

    const { values, onChange, onSubmit } = useForm(createSubmitHandler, {
        [registerFormKeys.Name]: '',
        [registerFormKeys.ImageUrl]: '',
        [registerFormKeys.Address]: '',
        [registerFormKeys.Instructor]: '',
        groups: [],

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
                        name="imageUrl"
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