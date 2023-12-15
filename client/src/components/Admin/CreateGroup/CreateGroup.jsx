import { useContext, useState } from 'react';

import styles from './CreateGroup.module.css';

import AuthContext, { AuthProvider } from '../../../contexts/authContext';
import useFormAuth from '../../../hooks/useFormAuth';
import * as groupService from '../../../services/groupService';
import { useNavigate, useParams } from 'react-router-dom';
import Path from '../../../paths';
import { useStudio } from '../../../contexts/studioContext';
import { pathToUrl } from '../../../utils/pathToUrl';


export default function CreateGroup() {

    const registerFormKeys = {
        Name: 'name',
        Image: 'imageUrl',
        Dances: 'dances',
        Created: 'created',

    }

    const navigate = useNavigate();

    const { userId, isAdmin } = useContext(AuthContext);
    const {studioId} = useStudio();
    const [errors, setErrors] = useState({});

    const createSubmitHandler = async (e) => {
        try {
            const result = await groupService.create(values, studioId);
            navigate(pathToUrl(Path.StudioDetails, { studioId: studioId }));
        } catch (error) {
            console.log('From Create Group',error);
        }
    }

    const { values, onChange, onSubmit } = useFormAuth(createSubmitHandler, {
        [registerFormKeys.Name]: '',
        [registerFormKeys.Image]: '',
        [registerFormKeys.Dances]: '',
        [registerFormKeys.Created]: '',
        danceList: [],
        likes: [],
        _studioId: studioId,
        _ownerId: userId,

    })

    // const imgValidator = () => {
    //     const regex = /\.(jpeg|jpg|gif|png|bmp)$/;

    //     if (!regex.test(values[registerFormKeys.Image])) {
    //         setErrors(state => ({
    //             ...state,
    //             image: 'Please enter a valid image URL (JPEG, JPG, GIF, PNG, BMP).',
    //         }));
    //     } else {
    //         if (errors.image) {
    //             setErrors(state => ({ ...state, image: '' }));
    //         }
    //     }
    // }

    const nameValidator = () => {
        const regex = /^.{3,}$/;
        if (!regex.test(values[registerFormKeys.Name])) {
            setErrors(state => ({
                ...state,
                name: 'Group name should be at least 3 characters long.',
            }));
        } else {
            if (errors.name) {
                setErrors(state => ({ ...state, name: '' }));
            }
        }
    }

    const dancesValidator = () => {
        const regex = /^\d+$/;
        if (!regex.test(values[registerFormKeys.Dances])) {
            setErrors(state => ({
                ...state,
                dances: 'Please enter a valid number.',
            }));
        } else {
            if (errors.dances) {
                setErrors(state => ({ ...state, dances: '' }));
            }
        }
    }

    const createdValidator = () => {
        const regex = /^[a-zA-Z0-9\s\-_,.]+$/;
        if (!regex.test(values[registerFormKeys.Created])) {
            setErrors(state => ({
                ...state,
                created: 'Please enter a valid date.',
            }));
        } else {
            if (errors.created) {
                setErrors(state => ({ ...state, created: '' }));
            }
        }
    }

    const isButtonDisabled =
        errors.name ||
        errors.image ||
        errors.dances ||
        errors.created ;

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
                        placeholder="Име на групата"
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
                        // onMouseLeave={imgValidator}
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
                        id="dances"
                        placeholder="Брой хора"
                        name="dances"
                        onBlur={dancesValidator}
                        onChange={onChange}
                        values={values[registerFormKeys.Dances]}
                    />
                </div>
                {errors.dances && (
                    <p className={styles.error}>{errors.dances}</p>
                )}
                {!errors.dances && (
                    <div className={styles.space}>
                    </div>
                )}
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="created"
                        placeholder="Създадена"
                        name="created"
                        onBlur={createdValidator}
                        onChange={onChange}
                        values={values[registerFormKeys.Created]}
                    />
                </div>
                {errors.created && (
                    <p className={styles.error}>{errors.created}</p>
                )}
                {!errors.created && (
                    <div className={styles.space}>
                    </div>
                )}

                <div className={styles.formGroup}>
                    <button 
                    type="submit" 
                    className={[styles.createAccount]}
                    disabled={isButtonDisabled}
                    >
                        Добави нова група</button>
                </div>
            </form>
            
        </div>
    );
}