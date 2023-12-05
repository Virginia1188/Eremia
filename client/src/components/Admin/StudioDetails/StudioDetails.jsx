import { Link } from 'react-router-dom';
import styles from './StudioDetails.module.css';
import Table from 'react-bootstrap/Table';
// import {} from '../../../../'

export default function StudioDetails() {

    return (
        <div className={styles.main}>

            <h2 className={styles.titleStudios} >Зала Младост</h2>
            <div className={styles.studioDetails}>
                <p>address</p>
                <span>Instructor</span>
            </div>


            <div className={styles.tableDiv}>
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
            </div>


            <div className={styles.cards}>


                <div className={styles.card} >
                    {/* <img className={styles.cardImg} src='../../../../public/img/logo_orange.png' alt="logo" /> */}
                    <div >
                        <h2 className={styles.cardH2}>
                            Name
                        </h2>

                    </div>

                    <div className={styles.cardText}>

                        <p className={styles.cardP}>
                            something
                        </p>

                        <Link to='#' className={styles.button}>
                            Към зала Младост
                            <span className={styles.materialSymbolsOutlined}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </Link>

                        {/* <Link className={styles.btnEdit} to='#'>Edit</Link> */}


                    </div>

                </div>


            </div>

        </div>
    );



}