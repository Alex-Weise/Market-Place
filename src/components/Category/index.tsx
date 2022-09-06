import styles from "./styles.module.scss";
import { allProd, bookmark, pin, postcard, stickers, trinket } from "../../store/products";
import { useState } from "react";
import shop from "../../assets/link/shop.svg";

const Category = () => {
    const [category, setCategory] = useState(allProd);

    return (
        <section className={styles.wrapper}>
            <div className={styles.category}>
                <button type="button" className={styles.all} onClick={() => setCategory(allProd)}>все товары</button> 
                <button type="button" className={styles.bookmark} onClick={() => setCategory(bookmark)}>закладки</button>
                <button type="button" className={styles.pin} onClick={() => setCategory(pin)}>значки</button>
                <button type="button" className={styles.postcard} onClick={() => setCategory(postcard)}>открытки</button>
                <button type="button" className={styles.stickers} onClick={() => setCategory(stickers)}>стикеры</button>
                <button type="button" className={styles.trinket} onClick={() => setCategory(trinket)}>брелки</button>
            </div>
            <div className={styles.products}>
                {category && category.map( (item, index) => {
                return (
                    <div className={styles.product} key={index}>
                        <p className={item.ishot ? styles.ishot : "display: none"}></p>
                        <p className={item.isnew ? styles.isnew : "display: none"}></p>
                        <img src={ typeof item.images === "string" ? item.images : item.images[0]} alt={item.title} />
                        <p className={styles.text}>{item.title}</p>
                        <p className={styles.price}>{item.price}</p>
                        <button type="button" className={styles.shop}><img src={shop} alt="shop"/></button>

                    </div>
                )})}
            </div>
        </section>
    )
};

export { Category };