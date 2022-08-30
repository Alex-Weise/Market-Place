import styles from "./styles.module.scss";

const Header = () => {
    return (
        <section className={styles.wrapper}>
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