import { useContext, useEffect, useState } from 'react';

import styles from './EditStudio.module.css';

import AuthContext, { AuthProvider } from '../../../contexts/authContext';
import useForm from '../../../hooks/useForm';
import * as studioService from '../../../services/studioService';
import { useNavigate, useParams } from 'react-router-dom';
import Path from '../../../paths';




export default function EditStudio() {
    const navigate = useNavigate();
    const { studioId } = useParams();
    const [errors, setErrors] = useState({});
    const [studio, setStudio] = useState({
        name: '',
        imageUrl: '',
        address: '',
        instructor: '',
    });


    useEffect(() => {

        studioService.getOne(studioId)
            .then(result => {
                setStudio(result);
            })
            .catch((error) => {
                console.error("Error fetching studio data", error);
            })

    }, [studioId]);
    console.log(studio);

    const editSubmitHandler = async () => {
        try {
            const result = await studioService.edit(studioId, values);
            console.log(result);
            navigate(Path.Studios);
        } catch (error) {
            console.log(error);
        }
    };

    function areValuesEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    const { values, onChange, onSubmit } = useForm(editSubmitHandler, studio);

    const imgValidator = () => {
        const regex = /\.(jpeg|jpg|gif|png|bmp)$/;

        if (!regex.test(values.imageUrl)) {
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
        if (!regex.test(values.name)) {
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
        if (!regex.test(values.address)) {
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
        if (!regex.test(values.instructor)) {
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

                <div className={styles.formGroup}>
                    <input 
                    type="text" 
                    className="form-control item" 
                    name="name" 
                    onBlur={nameValidator}
                    value={values?.name} 
                    onChange={onChange} 
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
                    <input 
                    type="text" 
                    className="form-control item" 
                    name="imageUrl" 
                    onMouseLeave={imgValidator}
                    value={values?.imageUrl} 
                    onChange={onChange} 
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
                    <input 
                    type="text" 
                    className="form-control item" 
                    name="address" 
                    onBlur={addressValidator}
                    value={values?.address} 
                    onChange={onChange} 
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
                    <input 
                    type="text" 
                    className="form-control item" 
                    name="instructor" 
                    onBlur={instructorValidator}
                    value={values?.instructor} 
                    onChange={onChange} 
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
                    disabled = {isButtonDisabled}>
                        Редактирай
                    </button>
                </div>
            </form>
        </div>
    );
}
