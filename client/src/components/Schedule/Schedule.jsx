import Table from 'react-bootstrap/Table';
import styles from './Schedule.module.css';

export default function Schedule() {
    return (
        <div className={styles.schedule}>
            <div>
                <h4 className={styles.title}>Зала Младост</h4>
                <Table responsive="sm" >
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
            <div>
                <h4 className={styles.title}>Зала Дружба</h4>
                <Table responsive="sm">
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
                            <td>Сини</td>
                            <td>Оранжеви</td>
                            <td>Сини</td>
                            <td>Оранжеви</td>
                            <td>Лилави</td>

                        </tr>
                        <tr>
                            <td>19.45ч</td>
                            <td>Жълти</td>
                            <td>Лилави</td>
                            <td>Червени</td>
                            <td>Жълти</td>
                            <td>Червени</td>

                        </tr>
                    </tbody>
                </Table>
            </div>

            <div>
                <h4 className={styles.title}>Зала Студенски Град</h4>
                <Table responsive="sm">
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
                            <td>18:30ч</td>
                            <td>-</td>
                            <td>Червени</td>
                            <td>-</td>
                            <td>Червени</td>
                            <td>-</td>

                        </tr>
                        <tr>
                            <td>18:45ч</td>
                            <td>Шарени</td>
                            <td>-</td>
                            <td>Шарени</td>
                            <td>-</td>
                            <td>Шарени</td>

                        </tr>
                        <tr>
                            <td>20:00ч</td>
                            <td>Лилави</td>
                            <td>-</td>
                            <td>Лилави</td>
                            <td>-</td>
                            <td>-</td>

                        </tr>
                    </tbody>
                </Table>
            </div>

            <div>
                <h4 className={styles.title}>Зала Люлин ет.2</h4>
                <Table responsive="sm">
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
                            <td>Сини</td>
                            <td>Лилави</td>
                            <td>Червени</td>
                            <td>Сини</td>
                            <td>Червени</td>

                        </tr>
                        <tr>
                            <td>19.45ч</td>
                            <td>Жълти</td>
                            <td>Розови</td>
                            <td>Жълти</td>
                            <td>Лилави</td>
                            <td>Розови</td>

                        </tr>
        
                    </tbody>
                </Table>
            </div>
            <div>
                <h4 className={styles.title}>Зала Люлин</h4>
                <Table responsive="sm">
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
                            <td>Сини</td>
                            <td>Зелени</td>
                            <td>Сини</td>
                            <td>Зелени</td>
                            <td>Сини</td>

                        </tr>
                        <tr>
                            <td>19.40ч</td>
                            <td>Червени</td>
                            <td>Оранжеви</td>
                            <td>Червени</td>
                            <td>-</td>
                            <td>Оранжеви</td>

                        </tr>

                    </tbody>
                </Table>
            </div>

            <div>
                <h4 className={styles.title}>Зала Център</h4>
                <Table responsive="sm">
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
                            <td>-</td>
                            <td>Червени</td>
                            <td>-</td>
                            <td>-</td>

                        </tr>
                        <tr>
                            <td>19.45ч</td>
                            <td>Розови</td>
                            <td>-</td>
                            <td>Розови</td>
                            <td>-</td>
                            <td>-</td>

                        </tr>

                    </tbody>
                </Table>
            </div>

        </div>
    );
}

