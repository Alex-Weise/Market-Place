import styles from "./styles.module.scss";
import post1 from "../../assets/Img1.jpg";
import stick from "../../assets/Img4.jpg";
import left from "../../assets/link/left.svg";
import right from "../../assets/link/right.svg";


const Slider = () => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.nav}>
                <div className={styles.category}>
                    <button type="button" className={styles.button}>популярное</button>
                    <button type="button" className={styles.button}>новинки</button>
                </div>
                <div className={styles.move}>
                    <button type="button" className={styles.back}><img src={left} alt="Back"/></button>
                    <button type="button" className={styles.next}><img src={right} alt="Next"/></button>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <p className={styles.hot}>популярный</p>
                    <p className={styles.new}>новинка</p>
                    <img src={post1} alt="Открытка мини" />
                    <p className={styles.text}>открытка мини</p>
                    <p className={styles.price}>80</p>
                    <div className={styles.add}>
                        <button type="button" className={styles.shop}>добавить в</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <p className={styles.hot}>популярное</p>
                    <p className={styles.new}>новинка</p>
                    <img src={stick} alt="Стикеры" />
                    <p className={styles.text}>стикеры</p>
                    <p className={styles.price}>300</p>
                    <button type="button" className={styles.shop}>добавить в</button>
                </div>
                <div className={styles.card}>
                    <p className={styles.hot}>популярное</p>
                    <p className={styles.new}>новинка</p>
                    <img src={post1} alt="Открытка мини" />
                    <p className={styles.text}>открытка мини</p>
                    <p className={styles.price}>80</p>
                    <div className={styles.add}>
                        <button type="button" className={styles.shop}>добавить в</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <p className={styles.hot}>популярное</p>
                    <p className={styles.new}>новинка</p>
                    <img src={stick} alt="Стикеры" />
                    <p className={styles.text}>стикеры</p>
                    <p className={styles.price}>300</p>
                    <button type="button" className={styles.shop}>добавить в</button>
                </div>
                <div className={styles.card}>
                    <p className={styles.hot}>популярное</p>
                    <p className={styles.new}>новинка</p>
                    <img src={post1} alt="Открытка мини" />
                    <p className={styles.text}>открытка мини</p>
                    <p className={styles.price}>80</p>
                    <div className={styles.add}>
                        <button type="button" className={styles.shop}>добавить в</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <p className={styles.hot}>популярное</p>
                    <p className={styles.new}>новинка</p>
                    <img src={stick} alt="Стикеры" />
                    <p className={styles.text}>стикеры</p>
                    <p className={styles.price}>300</p>
                    <button type="button" className={styles.shop}>добавить в</button>
                </div>
                <div className={styles.card}>
                    <p className={styles.hot}>популярное</p>
                    <p className={styles.new}>новинка</p>
                    <img src={stick} alt="Стикеры" />
                    <p className={styles.text}>стикеры</p>
                    <p className={styles.price}>300</p>
                    <button type="button" className={styles.shop}>добавить в</button>
                </div>
                <div className={styles.card}>
                    <p className={styles.hot}>популярное</p>
                    <p className={styles.new}>новинка</p>
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