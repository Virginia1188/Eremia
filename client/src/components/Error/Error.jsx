import { useState } from 'react';

import styles from './Error.module.css';

export default function Error({ type, message }) {                                              
    const [isShowMessage, setIsShowMessage] = useState(true);                                           

    const closeHandler = () => {                                                                        
        setIsShowMessage(false);
    };
    // console.log(message);

    if (isShowMessage) {
        return (
            <div className={`${styles['alert']} ${styles[`${type}-alert`]} ${styles['clear-error']}`}>
                <h6>{message}</h6>
                <p onClick={closeHandler} className={styles['close']}><span>&times;</span></p>
            </div>
        );
    }

    return null;
}