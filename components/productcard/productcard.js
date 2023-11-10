import styles from "./productcard.module.scss";
import Link from "next/link";
import Image from 'next/image';

const Product =({product, keynum,windowWidth})=>{
    const w = windowWidth>=1000?'240':'140';
    const h = windowWidth>=1000?'190':'150';
    return (
        <>
        <div className={styles.root} key={keynum}>
            <div className={styles.saleblock}>
            {product.discount>0&&(<><div className={styles.rasprodazha}><b>Распродажа</b></div><div className={styles.percentdiscount}>-{product.discount}%</div></>)}
            </div>
            <Link href={`/preparations/${product.group_type}/${product.name}`} ><Image 
            src={`${process.env.NEXT_PUBLIC_API_URL}${product.avatar}`} 
            className={styles.img} 
            alt={product.name}
            width={w}
            height={h}/></Link>
            <h3 className={styles.titlename}>{product.name}</h3>
            <h5 className={styles.type}>{product.type}</h5>
            <div className={styles.priceall}>
            <div className={product.discount===0?styles.priceactual:styles.pricediscount}>от {product.discount===0?product.price:Math.round(((100-product.discount)/100)*product.price)} руб.</div>
            {product.discount>0&&(<div className={styles.priceold}>от {product.price} руб.</div>)}
            </div>
            <div className={styles.buybutton}><Link href={`/preparations/${product.group_type}/${product.name}`} >Купить</Link></div>
            </div>
        </>
    )
};
export default Product;