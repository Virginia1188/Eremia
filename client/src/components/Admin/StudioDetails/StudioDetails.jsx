import { Link } from 'react-router-dom';
import styles from './StudioDetails.module.css';
import Table from 'react-bootstrap/Table';
// import {} from '../../../../'

export default function StudioDetails() {

    return (
        <div className={styles.main}>

            <h2 className={styles.titleStudios} >Зала Младост</h2>
            <div className={styles.studioDetails}>
                <p>св. кипрян 254</p>
                <span>Цветомир</span>
            </div>
            <h4>Групи в зала Младост</h4>


            {/* TODO add schedule */}
            {/* <div className={styles.tableDiv}>
                <h5>График на репетициите</h5>
                <Table responsive="sm" className={styles.table}>
                    <thead>
                        <tr>
                            <th>Час/Ден</th>
                            <th>Понеделник</th>
                            <th>Бторник</th>
                            <th>Сряда</th>
                            <th>Четвъртък</th>
                            <th>Петък</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>18.30ч</td>
                            <td>Червени</td>
                            <td>Зелени</td>
                            <td>Зелени</td>
                            <td>Червени</td>
                            <td>Зелени</td>

                        </tr>
                        <tr>
                            <td>19.45ч</td>
                            <td>Розови</td>
                            <td>Жълти</td>
                            <td>Розови</td>
                            <td>Жълти</td>
                            <td>Жълти</td>

                        </tr>

                    </tbody>
                </Table>
            </div> */}

            <div className={styles.cards}>


                <div className={styles.card} >
                    <img className={styles.cardImg} src='https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/384220642_705558081613582_1456725998677837583_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=3d9721&_nc_ohc=CxfqeDrdzC8AX8TRgzM&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCAcVS0V0HDVMAIqwl6JIpudgl4pcHlCmv69fdHKm1aIw&oe=657380F4' alt="logo" />
                    <div >
                        <h2 className={styles.cardH2}>
                            Зелена група
                        </h2>
                        <h5 className={styles.cardH5}>
                            Зала Младост
                        </h5>

                    </div>

                    <div className={styles.cardText}>
                        <div className={styles.cardP}>
                            <p >
                                Създанена: 2018
                            </p>
                            <p >
                                Брой хора: 80
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
                                Добави в любими
                                <span className={styles.materialSymbolsOutlined}>
                                    <i className="fa-solid fa-heart"></i>
                                </span>
                            </Link>
                        </div>


                        {/* <Link className={styles.btnEdit} to='#'>Edit</Link> */}


                    </div>

                </div>


            </div>

        </div>
    );



}