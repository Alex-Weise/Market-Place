import styles from "./styles.module.scss";
import { NewHotProduct } from "../../store/globalStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import shop from "../../assets/link/shop.svg";

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
    const { hotProduct, newProduct } = NewHotProduct;
    return (
        <section className={styles.wrapper} id="Slider">
            <div className={styles.nav}>
                <p className={styles.hit} onClick={() => setActive("hot")}>хиты продаж</p>
                <p className={styles.new} onClick={() => setActive("new")}>новинки</p>
            </div>
            <div className={styles.cards}>
                {active === "hot" && hotProduct.map( (item, index) => {
                    return (                
                    <div className={styles.card} key={index}>
                        <p className={styles.ishot}></p>
                        <img src={ typeof item.images === "string" ? item.images : item.images[0]} alt={item.title} />
                        <p className={styles.text}>{item.title}</p>
                        <p className={styles.price}>{item.price}</p>
                        <button type="button" className={styles.shop}><img src={shop} alt="shop"/></button>
                    </div>)
                })}
                {active === "new" && newProduct.map( (item) => {
                    return (                
                    <div className={styles.card}>
                        <p className={styles.isnew}></p>
                        <img src='' alt={item.title} />
                        <p className={styles.text}>{item.title}</p>
                        <p className={styles.price}>{item.price}</p>
                        <div className={styles.add}>
                            <button type="button" className={styles.shop}>добавить в</button>
                        </div>
                    </div>)
                })}
            </div>
        </section>
    )
})

export { Slider };