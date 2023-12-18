import { useContext, useState } from 'react';

import styles from './CreateStudio.module.css';

import AuthContext, { AuthProvider } from '../../../contexts/authContext';
import useFormAuth from '../../../hooks/useFormAuth';
import * as studioService from '../../../services/studioService';
import { useNavigate } from 'react-router-dom';
import Path from '../../../paths';
import {Error} from '../../Error/Error';


export default function CreateStudio() {

    const registerFormKeys = {
        Name: 'name',
        Image: 'imageUrl',
        Address: 'address',
        Instructor: 'instructor',

    }

    const navigate = useNavigate();

    const { userId, isAdmin } = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const createSubmitHandler = async (e) => {
        try {
            const result = await studioService.create(values, userId, isAdmin);
            console.log(values);
            navigate(Path.Studios);
        } catch (error) {
            setErrors(error);
        }
    }

    const { values, onChange, onSubmit } = useFormAuth(createSubmitHandler, {
        [registerFormKeys.Name]: '',
        [registerFormKeys.ImageUrl]: '',
        [registerFormKeys.Address]: '',
        [registerFormKeys.Instructor]: '',
        groups: [],

    })

    const imgValidator = () => {
        const regex = /\.(jpeg|jpg|gif|png|bmp)$/;

        if (!regex.test(values[registerFormKeys.Image])) {
            setErrors(state => ({
                ...state,
                image: 'Please enter a valid image URL (JPEG, JPG, GIF, PNG, BMP).',
            }));
        } else {
            if (errors.image) {
                setErrors(state => ({ ...state, image: '' }));
            }
        }
    }

    const nameValidator = () => {
        const regex = /^.{3,}$/;
        if (!regex.test(values[registerFormKeys.Name])) {
            setErrors(state => ({
                ...state,
                name: 'Studio name should be at least 3 characters long.',
            }));
        } else {
            if (errors.name) {
                setErrors(state => ({ ...state, name: '' }));
            }
        }
    }

    const addressValidator = () => {
        const regex = /^[a-zA-Z0-9\s\-_,.]+$/;
        if (!regex.test(values[registerFormKeys.Address])) {
            setErrors(state => ({
                ...state,
                address: 'Please enter a valid address.',
            }));
        } else {
            if (errors.address) {
                setErrors(state => ({ ...state, address: '' }));
            }
        }
    }

    const instructorValidator = () => {
        const regex = /^[a-zA-Z0-9\s\-]+$/;
        if (!regex.test(values[registerFormKeys.Instructor])) {
            setErrors(state => ({
                ...state,
                instructor: 'Please enter a valid name and surname.',
            }));
        } else {
            if (errors.instructor) {
                setErrors(state => ({ ...state, instructor: '' }));
            }
        }
    }

    const isButtonDisabled =
        errors.name ||
        errors.image ||
        errors.address ||
        errors.instructor ;
    return (

        <div className={styles.registrationForm}>

            <form onSubmit={onSubmit}>

                <div className={styles.formIcon}>
                    <img src="public/img/logo_red.png" alt="logo" />
                    <h5>Добави нова зала</h5>
                </div>
                {errors && (
                    <Error type='error' message={errors.message}/>
                ) }
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="name"
                        placeholder="Име на студиото"
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
                        id="image"
                        placeholder="Снимка"
                        name="imageUrl"
                        onMouseLeave={imgValidator}
                        onChange={onChange}
                        values={values[registerFormKeys.Image]}
                    />
                </div>
                {errors.image && (
                    <p className={styles.error}>{errors.image}</p>
                )}
                {!errors.image && (
                    <div className={styles.space}>
                    </div>
                )}
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="address"
                        placeholder="Адрес"
                        name="address"
                        onBlur={addressValidator}
                        onChange={onChange}
                        values={values[registerFormKeys.Address]}
                    />
                </div>
                {errors.address && (
                    <p className={styles.error}>{errors.address}</p>
                )}
                {!errors.address && (
                    <div className={styles.space}>
                    </div>
                )}
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="instructor"
                        placeholder="Ръководител"
                        name="instructor"
                        onBlur={instructorValidator}
                        onChange={onChange}
                        values={values[registerFormKeys.Instructor]}
                    />
                </div>
                {errors.instructor && (
                    <p className={styles.error}>{errors.instructor}</p>
                )}
                {!errors.instructor && (
                    <div className={styles.space}>
                    </div>
                )}

                <div className={styles.formGroup}>
                    <button 
                    type="submit" 
                    className={[styles.createAccount]}
                    disabled={isButtonDisabled}
                    >
                        Добави нова зала</button>
                </div>
            </form>

        </div>
    );
}