import styles from './style.module.css';
export const Amazon = ({ data }) => {
    return (
        <div>
            <div className={styles.all}>
                <div className={styles.head}>
                    <h4 className={styles.date}>{data.date}</h4>
                    <img src={data.logo} className={styles.image} alt="" />
                </div>
                <div>
                    <button className={styles.case}>{data.case}</button>
                    <h1 className={styles.title}>{data.title}</h1>
                    <h3 className={styles.method}>{data.method}</h3>
                    <div className={styles.head}>
                        <h4 className={styles.mode}>{data.mode}</h4>
                        <i className={styles.arrow}>{`->`}</i>
                    </div>
                </div>
            </div>
        </div>
    );
}