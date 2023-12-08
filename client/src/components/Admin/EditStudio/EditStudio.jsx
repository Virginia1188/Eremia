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

    const editSubmitHandler = async () => {
        try {
            const result = await studioService.edit(studioId, values);
            console.log(result);
            navigate(Path.Studios);
        } catch (error) {
            console.log(error);
        }
    };

    // function areValuesEqual(obj1, obj2) {
    //     return JSON.stringify(obj1) === JSON.stringify(obj2);
    // }

    const { values, onChange, onSubmit } = useForm(editSubmitHandler, studio);


    return (
        <div className={styles.registrationForm}>
            <form onSubmit={onSubmit}>
                <div className={styles.formIcon}>
                    <img src="public/img/logo_red.png" alt="logo" />
                    <h5>Добави нова зала</h5>
                </div>

                <div className={styles.formGroup}>
                    <input type="text" className="form-control item" name="name" value={values?.name} onChange={onChange} />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" className="form-control item" name="imageUrl" value={values?.imageUrl} onChange={onChange} />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" className="form-control item" name="address" value={values?.address} onChange={onChange} />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" className="form-control item" name="instructor" value={values?.instructor} onChange={onChange} />
                </div>
                <div className={styles.formGroup}>
                    <button type="submit" className={[styles.createAccount]}>
                        Редактирай
                    </button>
                </div>
            </form>
        </div>
    );
}
