import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useReducer, useState } from 'react';

import styles from './StudioDetails.module.css';
import AuthContext from '../../../contexts/authContext';
import * as studioService from '../../../services/studioService';
import * as groupService from '../../../services/groupService';
import Path from '../../../paths';
import { pathToUrl } from '../../../utils/pathToUrl';
import { useStudio } from '../../../contexts/studioContext';



export default function StudioDetails({ }) {
    const navigate = useNavigate();
    const { isAdmin, userId } = useContext(AuthContext);
    const [studio, setStudio] = useState({});
    const [groups, setGroups] = useState([]);
    const { studioId } = useParams();

    const { setStudioFunk } = useStudio();

    useEffect(() => {
        studioService.getOne(studioId)
            .then(setStudio);

        groupService.getAll(studioId)
            .then((result) => {
                setGroups(result);
            })

    }, [studioId])


    const deleteClickHandler = async () => {

        const result = await studioService.remove(studioId);
        navigate(Path.Studios);
    }

    const addClickHandler = () => {
        setStudioFunk(studioId);
        navigate(Path.CreateGroup);
    }
    const [likedGroups, setLikedGroups] = useState(() => {
        return groups.reduce((acc, group) => {
            if(group.likes.includes(userId)){
                acc.push(group._id);
            }
            return acc;
        }, [])
        
    });
    

    const likesClickHandler = (group) => {

        if(group._ownerId === userId ){
            return;
        }

        if (!group.likes.includes(userId)) {
            setLikedGroups((prevGroupLikes) => [
                ...prevGroupLikes, group._id
            ]);
            group.likes.push(userId);
        }
    }


    return (
        <div className={styles.main}>

            <div className={styles.details}>
                <h2 className={styles.titleStudios} >Зала {studio.name}</h2>
                <div className={styles.studioDetails}>
                    <p><b>Адрес: </b> {studio.address}</p>
                    <span><b>Ръководител:</b> {studio.instructor}</span>
                </div>
                {isAdmin && (
                    <div className={styles.adminBtns}>
                        <button className={styles.deleteBtn} onClick={deleteClickHandler}>Премахни Зала {studio.name}</button>
                        <button className={styles.addBtn} onClick={addClickHandler}>Добави нова група</button>
                    </div>
                )}

                {groups.length > 0 && (
                    <h4>Групи в зала {studio.name}</h4>
                )}

                {/* TODO add schedule */}
                {groups.length <= 0 && (
                    <h4>Няма добавени групи в зала {studio.name}</h4>
                )}
            </div>


            <div className={styles.cards}>
                {groups.map(group => (

                    <div className={styles.card} key={group._id} >
                        <img className={styles.cardImg} src={group.imageUrl} alt="img" />
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

                                <button className={styles.btnLike} disabled={!userId} onClick={(e) => {
                                    e.preventDefault;
                                    likesClickHandler(group)
                                }} >
                                    
                                    {(likedGroups.includes(group._id) || group._ownerId === userId) && (
                                        <span>{group.likes.length}</span>
                                    )}
                                    {(!likedGroups.includes(group._id) && group._ownerId !== userId)&& (
                                        <span>Харесай</span>
                                    )}


                                    <span className={styles.materialSymbolsOutlined}>
                                        <i className="fa-solid fa-heart"></i>
                                    </span>
                                </button>

                            </div>

                            {/* <Link className={styles.btnEdit} to='#'>Харесай</Link> */}

                        </div>

                    </div>



                ))}
            </div>


        </div>
    );



}
