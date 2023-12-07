import { useContext, useState } from 'react';

import styles from './CreateGroup.module.css';

import AuthContext, { AuthProvider } from '../../../contexts/authContext';
import useForm from '../../../hooks/useForm';
import * as studioGroup from '../../../services/groupService';
import { useNavigate } from 'react-router-dom';
import Path from '../../../paths';


export default function CreateGroup() {

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
            const result = await groupService.create(values, userId, isAdmin);
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

            <form onSubmit={onSubmit}>

                <div className={styles.formIcon}>
                    <img src="public/img/logo_red.png" alt="logo" />
                    <h5>Добави нова група</h5>
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