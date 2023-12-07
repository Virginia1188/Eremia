import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useReducer, useState } from 'react';

import styles from './StudioDetails.module.css';
import AuthContext from '../../../contexts/authContext';
import * as studioService from '../../../services/studioService';
import * as groupService from '../../../services/groupService';
import reducer from './studioReducer';
import Path from '../../../paths';



export default function StudioDetails({ }) {
    const navigate = useNavigate();
    const { } = useContext(AuthContext);
    const [studio, setStudio] = useState({});
    // const [groups, setGroup] = useState({});
    const [groups, dispatch] = useReducer(reducer, []);
    const { studioId } = useParams();

    useEffect(() => {
        studioService.getOne(studioId)
            .then(setStudio);

        groupService.getAll(studioId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_GROUPS',
                    payload: result,
                })
            })

    }, [studioId])



    const deleteClickHandler = async () => {
        // const hasConfirmed = confirm(`Are you sure you want to delete ${studioName}`);

        // if (hasConfirmed) {
            // console.log(studioId);
        const result = await studioService.remove(studioId);
        // console.log(result);
        navigate(Path.Studios);
        // }
    }

    return (
        <div className={styles.main}>

            <h2 className={styles.titleStudios} >Зала {studio.name}</h2>
            <div className={styles.studioDetails}>
                <p><b>Адрес: </b> {studio.address}</p>
                <span><b>Ръководител:</b> {studio.instructor}</span>
            </div>
            <div className={styles.adminBtns}>
                <button className={styles.deleteBtn} onClick={deleteClickHandler}>Премахни Зала {studio.name}</button>
                <button className={styles.addBtn} onClick={deleteClickHandler}>Добави нова група</button>
            </div>
            <h4>Групи в зала {studio.name}</h4>


            {/* TODO add schedule */}

            {groups.map(group => (
                <div className={styles.cards} key={group._id}>


                    <div className={styles.card} >
                        <img className={styles.cardImg} src='https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/384220642_705558081613582_1456725998677837583_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=3d9721&_nc_ohc=CxfqeDrdzC8AX8TRgzM&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCAcVS0V0HDVMAIqwl6JIpudgl4pcHlCmv69fdHKm1aIw&oe=657380F4' alt="logo" />
                        <div >
                            <h2 className={styles.cardH2}>
                                {group.name}
                            </h2>
                            <h5 className={styles.cardH5}>
                                Зала {studio.name}
                            </h5>

                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.cardP}>
                                <p >
                                    Създанена: {group.created}
                                </p>
                                <p >
                                    Брой хора: {group.dances}
                                </p>
                            </div>


                            <div className={styles.buttons}>
                                <Link to='#' className={styles.btn}>
                                    Към групата
                                    <span className={styles.materialSymbolsOutlined}>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </Link>
                                <Link to='#' className={styles.btn}>
                                    Харесай
                                    <span className={styles.materialSymbolsOutlined}>
                                        <i className="fa-solid fa-heart"></i>
                                    </span>
                                </Link>
                            </div>

                            {/* <Link className={styles.btnEdit} to='#'>Харесай</Link> */}

                        </div>

                    </div>


                </div>
            ))}



        </div>
    );



}
