import styles from "./styles.module.scss";
import shop from "../../assets/link/shop.svg";
import { FC } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
// import { useEffect } from "react";
type THeader = {
    offset: number[],
    scrollY: MotionValue<number>,
}

const Header:FC<THeader> = ({offset, scrollY}) => {
    const heightSizes = ["100vh", "10vh"];
    const height = useTransform(scrollY, offset, heightSizes);
    // useEffect( () => {
    //     const handleScroll = () => {
    //         const scrolled = Math.round(window.scrollY);
    //         console.log(scrolled);
    //         const screen = document.getElementById("Screen");
    //         if (screen) screen.style.height = `calc(100vh - ${scrolled}px)`;
    //     };
    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     }
    // }, [])
    return (
        <motion.section className={styles.wrapper} id="Screen" style={{height}}>
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
        </motion.section>
    )
}
export { Header };