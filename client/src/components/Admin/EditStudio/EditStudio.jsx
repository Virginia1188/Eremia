import { useContext, useEffect, useState } from 'react';

import styles from './EditStudio.module.css';

import AuthContext, { AuthProvider } from '../../../contexts/authContext';
import useForm from '../../../hooks/useForm';
import * as studioService from '../../../services/studioService';
import { useNavigate, useParams } from 'react-router-dom';
import Path from '../../../paths';


export default function EditStudio() {
    // const registerFormKeys = {
    //     Name: 'name',
    //     Image: 'imageUrl',
    //     Address: 'address',
    //     Instructor: 'instructor',

    // }

    const navigate = useNavigate();

    const { studioId } = useParams();

    const [studio, setStudio] = useState({
        name: '',
        imageUrl: '',
        address: '',
        instructor: '',
    });
    useEffect(() =>{
        studioService.getOne(studioId)
        .then(result => {
            setStudio(result);
        })
    }, [studioId]);


    // const { userId, isAdmin } = useContext(AuthContext);


    const editSubmitHandler = async (values) => {
        try {
            const result = await studioService.edit(studioId, values);
            console.log(values);
            navigate(Path.Studios);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(studio);
    const { values, onChange, onSubmit } = useForm(editSubmitHandler, studio);

    return(
        <div className={styles.registrationForm}>

            <form onSubmit={onSubmit}>

                <div className={styles.formIcon}>
                    <img src="public/img/logo_red.png" alt="logo" />
                    <h5>Зала {values.name}</h5>
                </div>
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="name"
                        placeholder="Име на студиото"
                        name="name"
                        value={studio.name}
                        onChange={onChange}

                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="image"
                        placeholder="Снимка"
                        name="imageUrl"
                        onChange={onChange}
                        value={studio.imageUrl}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="address"
                        placeholder="Адрес"
                        name="address"
                        onChange={onChange}
                        value={studio.address}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input type="text"
                        className="form-control item"
                        id="instructor"
                        placeholder="Ръководител"
                        name="instructor"
                        onChange={onChange}
                        value={studio.instructor}
                    />
                </div>

                <div className={styles.formGroup}>
                    <button type="submit" className={[styles.createAccount]}>Редактирай</button>
                </div>
            </form>
            
        </div>
    );
}