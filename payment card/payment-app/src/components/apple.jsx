import styles from './style.module.css';
export const Apple = ({ data }) => {
    return (
        <div>
            <div className={styles.apple_all}>
                <div className={styles.apple_head}>
                    <h4 className={styles.apple_date}>{data.date}</h4>
                    <img src={data.logo} className={styles.apple_image} alt="" />
                </div>
                <div>
                    <button className={styles.apple_case}>{data.case}</button>
                    <h1 className={styles.apple_title}>{data.title}</h1>
                    <h3 className={styles.apple_method}>{data.method}</h3>
                    <div className={styles.apple_head}>
                        <h4 className={styles.apple_mode}>{data.mode}</h4>
                        <i className={styles.apple_arrow}>{`->`}</i>
                    </div>
                </div>
            </div>
        </div>
    );
}