import styles from "./styles.module.scss";
import shop from "../../assets/link/shop.svg";

const Header = () => {
    return (
        <section className={styles.wrapper}>
            <button type="button" className={styles.shop}><img src={shop} alt="Корзина" /></button>
            <input type="checkbox" id="check"/> 
            <label htmlFor="check" className={styles.burger}>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className={styles.navigate}>
                <p>Магазин</p>
                <p>Категории</p>
                <p>Отзывы</p>
                <p>О Нас</p>
                <p>Адреса</p>
                <p>Контакты</p>
            </div>
            <div className={styles.container_text}>
                <h1 className={styles.title}>сияние звезд твоей души</h1>
                <p className={styles.text}>авторская канцелярия с любовью для тебя</p>
            </div>
        </section>
    )
}
export { Header };