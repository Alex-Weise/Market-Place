import styles from "./styles.module.scss";
import shop from "../../assets/link/shop.svg";
import {motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Product } from "../../store/globalStore";
import { observer } from "mobx-react-lite";

const Category = observer(() => {
    const { Category, setCategory} = Product;

    return (
        <section className={styles.wrapper}>
            <LayoutGroup>
                <motion.div className={styles.category} layout>
                    <button type="button" className={styles.all} onClick={() => setCategory('')}>все товары</button> 
                    <button type="button" className={styles.bookmark} onClick={() => setCategory('bookmark')}>закладки</button>
                    <button type="button" className={styles.pin} onClick={() => setCategory('pin')}>значки</button>
                    <button type="button" className={styles.postcard} onClick={() => setCategory('postcard')}>открытки</button>
                    <button type="button" className={styles.stickers} onClick={() => setCategory('stickers')}>стикеры</button>
                    <button type="button" className={styles.trinket} onClick={() => setCategory('trinket')}>брелки</button>
                </motion.div>
                <motion.div className={styles.products} layout>
                    <AnimatePresence initial={false} mode='wait'>
                        {Category && Category.map( (item, index) => {
                        return (
                            <motion.div className={styles.product} key={index}
                                layout
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.5}}
                            >
                                <p className={item.ishot ? styles.ishot : "display: none"}></p>
                                <p className={item.isnew ? styles.isnew : "display: none"}></p>
                                <img src={ typeof item.images === "string" ? item.images : item.images[0]} alt={item.title} />
                                <p className={styles.text}>{item.title}</p>
                                <p className={styles.price}>{item.price}</p>
                                <button type="button" className={styles.shop}><img src={shop} alt="shop"/></button>

                            </motion.div>
                        )})}
                    </AnimatePresence>
                </motion.div>
            </LayoutGroup>
        </section>
    )
});

export { Category };