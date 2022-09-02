import styles from "./styles.module.scss";
import post1 from "../../assets/Img1.jpg";
import stick from "../../assets/Img2.jpg";


const Slider = () => {

    return (
        <section className={styles.wrapper} id="Slider">
            <div className={styles.cards}>
                <div className={styles.card}>
                    <p className={styles.new}></p>
                    <img src={post1} alt="Открытка мини" />
                    <p className={styles.text}>открытка мини</p>
                    <p className={styles.price}>80</p>
                    <div className={styles.add}>
                        <button type="button" className={styles.shop}>добавить в</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <p className={styles.hot}></p>
                    <img src={stick} alt="Стикеры" />
                    <p className={styles.text}>стикеры</p>
                    <p className={styles.price}>300</p>
                    <button type="button" className={styles.shop}>добавить в</button>
                </div>
            </div>
        </section>
    )
}

export { Slider };