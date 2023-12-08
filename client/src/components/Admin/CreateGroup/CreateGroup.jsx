import { useContext, useState } from 'react';

import styles from './CreateGroup.module.css';

import AuthContext, { AuthProvider } from '../../../contexts/authContext';
import useForm from '../../../hooks/useForm';
import * as groupService from '../../../services/groupService';
import { useNavigate, useParams } from 'react-router-dom';
import Path from '../../../paths';


export default function CreateGroup() {

    const registerFormKeys = {
        Name: 'name',
        Image: 'imageUrl',
        Dances: 'dances',
        Created: 'created',

    }

    const { studioId } = useParams();

    const navigate = useNavigate();

    const { userId, isAdmin } = useContext(AuthContext);

    const createSubmitHandler = async (e) => {
        try {
            console.log(values);
            const result = await groupService.create(values, studioId);
            
            navigate(pathToUrl(Path.StudioDetails, { studioId: studioId }));
        } catch (error) {
            console.log(error);
        }
    }

    const { values, onChange, onSubmit } = useForm(createSubmitHandler, {
        [registerFormKeys.Name]: '',
        [registerFormKeys.ImageUrl]: '',
        [registerFormKeys.Dances]: '',
        [registerFormKeys.Created]: '',
        danceList: [],
        likes: [],
        studio: studioId

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
                        placeholder="Име на групата"
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
                        id="dances"
                        placeholder="Брой хора"
                        name="dances"
                        onChange={onChange}
                        values={values[registerFormKeys.Dances]}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="created"
                        placeholder="Създадена"
                        name="created"
                        onChange={onChange}
                        values={values[registerFormKeys.Created]}
                    />
                </div>

                <div className={styles.formGroup}>
                    <button type="submit" className={[styles.createAccount]}>Добави нова група</button>
                </div>
            </form>
            
        </div>
    );
}