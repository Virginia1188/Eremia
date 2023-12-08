import { useContext, useState } from 'react';

import styles from './CreateStudio.module.css';

import AuthContext, { AuthProvider } from '../../../contexts/authContext';
import useFormAuth from '../../../hooks/useFormAuth';
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

    const { values, onChange, onSubmit } = useFormAuth(createSubmitHandler, {
        [registerFormKeys.Name]: '',
        [registerFormKeys.ImageUrl]: '',
        [registerFormKeys.Address]: '',
        [registerFormKeys.Instructor]: '',
        groups: [],

    })

    return (

        <div className={styles.registrationForm}>

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

                <div className={styles.formGroup}>
                    <button type="submit" className={[styles.createAccount]}>Добави нова зала</button>
                </div>
            </form>
            
        </div>
    );
}