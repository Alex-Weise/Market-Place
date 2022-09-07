import styles from "./styles.module.scss";
import { Product } from "../../store/globalStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import shop from "../../assets/link/shop.svg";
import { motion, AnimatePresence} from "framer-motion";

// const loadIMG = (item:OneProduct) => {
//     let loadWith = async() => {
//         let module = await import(`../../assets/data/${item.data}/${item.type}/${item.offtype}/1.jpg`);
//         return module.default;
//     };
//     let loadwithout = async() => {
//         return await import(`../../assets/data/${item.data}/${item.type}/1.jpg`);
//     };
//     try {
//         if (item.offtype) {
//             loadWith().then( (str:string) =>  {return str});
//         } else { 
//             loadwithout().then(obj => { return obj.default});
//         }
//     } catch (e) { console.log(e)};
// };

const Slider = observer(() => {
    const [active, setActive] = useState("hot");
    const { hotProduct, newProduct } = Product;
    return (
        <section className={styles.wrapper} id="Slider">
            <div className={styles.nav}>
                <p className={styles.hit} onClick={() => setActive("hot")}>хиты продаж</p>
                <p className={styles.new} onClick={() => setActive("new")}>новинки</p>
            </div>
            <motion.div className={styles.cards}>
                <AnimatePresence mode='wait'>
                    {active === "hot" && hotProduct.map( (item) => {
                        return (                
                        <motion.div className={styles.card} key={item.id}
                            layout
                            initial={{scale: 0.8 ,opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            exit={{scale: 1.2, opacity: 0}}
                            transition={{ duration: 0.5, type: 'spring' }}
                        >
                            <p className={styles.ishot}></p>
                            <img src={ typeof item.images === "string" ? item.images : item.images[0]} alt={item.title} />
                            <p className={styles.text}>{item.title}</p>
                            <p className={styles.price}>{item.price}</p>
                            <button type="button" className={styles.shop}><img src={shop} alt="shop"/></button>
                        </motion.div>)
                    })}
                    {active === "new" && newProduct.map( (item) => {
                        return (                
                        <motion.div className={styles.card}
                            layout
                            initial={{scale: 0.8 ,opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            exit={{scale: 1.2, opacity: 0}}
                            transition={{ duration: 0.5, type: 'spring' }}
                        >
                            <p className={styles.isnew}></p>
                            <img src='' alt={item.title} />
                            <p className={styles.text}>{item.title}</p>
                            <p className={styles.price}>{item.price}</p>
                            <div className={styles.add}>
                                <button type="button" className={styles.shop}>добавить в</button>
                            </div>
                        </motion.div>)
                    })}
                </AnimatePresence>
            </motion.div>
        </section>
    )
})

export { Slider };