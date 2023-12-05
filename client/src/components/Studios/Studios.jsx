import { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import styles from './Studios.module.css'

import * as studioService from '../../services/studioService';
import Path from '../../paths';
import AuthContext from '../../contexts/authContext';
import { pathToUrl } from '../../utils/pathToUrl';

export default function Studios() {
    const { userId, isAdmin } = useContext(AuthContext);

    const [studios, setStudios] = useState([]);

    useEffect(() => {
        studioService.getAll()
            .then(result => setStudios(result))
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div >
            <h2 className={styles.titleStudios} >Нашите Зали</h2>
            <div className={styles.cards}>

                {studios.map(studio => (
                    <div className={styles.card} key={studio._id}>
                        <img className={styles.cardImg} src={studio.imageUrl} alt="" />

                        <div className={styles.cardText}>
                            <h2 className={styles.cardH2}>
                                {studio.name}
                            </h2>
                            <p className={styles.cardP}>
                                {studio.address} Ръководител: {studio.instructor}
                            </p>

                            <Link to={pathToUrl(Path.StudioDetails, {studioId: studio._id})} className={styles.button}>
                                Към зала Младост
                                <span className={styles.materialSymbolsOutlined}>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </Link>
                            {isAdmin && (
                                <Link className={styles.btnEdit} to={pathToUrl(Path.EditStudio, {studioId: studio._id})}>Edit</Link>

                            )}
                        </div>

                    </div>
                ))}


                {/* <div className={styles.card}>
                    <img className={styles.cardImg} src="https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/345608724_276275501418825_7141408615547866733_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=RIuzDzJxH1sAX-xrHfR&_nc_ht=scontent-lhr6-2.xx&oh=00_AfBJ3urwcFT_lb2gsjcYsMjmkXr_OoRcDnDkNyLAiw9zZQ&oe=6573604A" alt="" />
                    <h2 className={styles.cardH2}>
                        Студенски град
                    </h2>
                    <p className={styles.cardP}>
                        Зала Младост 2, ул. Св. Кипрян 254. Ръководители Цветомир Борисов и Ани
                    </p>

                    <a href="#" className={styles.button}>
                        Към зала Младост
                        <span className={styles.materialSymbolsOutlined}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
                <div className={styles.card}>
                    <img className={styles.cardImg} src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/344235832_761659388939288_1015963407861136786_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=xGNZ8Y_xbX4AX_offma&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCP38Rhb8egWgi3i4lziCUHQHBRNBXsE0mUYOc7REXarg&oe=657324FC" alt="" />
                    <h2 className={styles.cardH2}>
                        Център
                    </h2>
                    <p className={styles.cardP}>
                        Зала Младост 2, ул. Св. Кипрян 254. Ръководители Цветомир Борисов и Ани
                    </p>

                    <a href="#" className={styles.button}>
                        Към зала Младост
                        <span className={styles.materialSymbolsOutlined}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
                <div className={styles.card}>
                    <img className={styles.cardImg} src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
                    <h2 className={styles.cardH2}>
                        Дружба
                    </h2>
                    <p className={styles.cardP}>
                        Зала Младост 2, ул. Св. Кипрян 254. Ръководители Цветомир Борисов и Ани
                    </p>

                    <a href="#" className={styles.button}>
                        Към зала Младост
                        <span className={styles.materialSymbolsOutlined}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
                <div className={styles.card}>
                    <img className={styles.cardImg} src="https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/384192163_705568114945912_852475768987353023_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a73e89&_nc_ohc=RfpVBEenCLcAX_MGvjL&_nc_ht=scontent-lhr6-2.xx&oh=00_AfCsjpbG9o2YwdZXcsYW6UJkvobNTkhZWOJbJNyU46ciGQ&oe=65721769" alt="" />
                    <h2 className={styles.cardH2}>
                        Люлин ет.-1
                    </h2>
                    <p className={styles.cardP}>
                        Зала Младост 2, ул. Св. Кипрян 254. Ръководители Цветомир Борисов и Ани
                    </p>

                    <a href="#" className={styles.button}>
                        Към зала Младост
                        <span className={styles.materialSymbolsOutlined}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
                <div className={styles.card}>
                    <img className={styles.cardImg} src="https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/342618951_1277990533154017_9219647624224700537_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=JPp8xnV3344AX-VGwwp&_nc_ht=scontent-lhr6-2.xx&oh=00_AfB4p_RCiSXUwFcpfyWuzvVxGiXIBnhWU2KBy6ZSpBy3zA&oe=6571EEB7" alt="" />
                    <h2 className={styles.cardH2}>
                        Люлин ет.2
                    </h2>
                    <p className={styles.cardP}>
                        Зала Младост 2, ул. Св. Кипрян 254. Ръководители Цветомир Борисов и Ани
                    </p>

                    <a href="#" className={styles.button}>
                        Към зала Младост
                        <span className={styles.materialSymbolsOutlined}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div> */}


            </div>

        </div>


    );
}