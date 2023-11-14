import styles from './Studios.module.css'

export default function Studios() {
    return (
        <div>
            <h2 className={styles.titleStudios} >Нашите Зали</h2>
            <div className={styles.cards}>

                <div className={styles.card}>
                    <img className={styles.cardImg} src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
                    <h2 className={styles.cardH2}>
                        Младост
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
                    <img className={styles.cardImg} src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
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
                    <img className={styles.cardImg} src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
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
                    <img className={styles.cardImg} src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
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
                </div>


            </div>

        </div>


    );
}