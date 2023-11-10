import styles from "./path.module.scss";
import { useRouter } from 'next/router';
import Link from 'next/link';
const Path =() =>{
    const router = useRouter();
    const currentPath = router.query
    const asPath = router.asPath;
    const otherPath = {
        "/cart_items":"Корзина",
        "/about":"О нас",
        "/deliverymethod":"Доставка",
        "/make_order":"Оформление заказа",
        "/deliveryinfo":"Доставка",
        "/paymentinfo":"Оплата",
        "/refund":"Возврат",
        "/questions":"Вопросы и ответы",
        "/certificates":"Сертификаты",
        "/contact":"Контакты",
    }
    return(
        <div >
        {currentPath.type?
        <div className={styles.root}>
            <Link href={'/'} className={styles.link}>Главная</Link>
            <span className={styles.link}>/</span>
             <Link href={`/preparations/${currentPath.type}`} className={styles.link}>{currentPath.type} </Link> 
             {
                currentPath.id?
                <>
                <span className={styles.link}>/</span><Link href={`/preparations/${currentPath.type}/${currentPath.id}`} className={styles.link}>{currentPath.id}</Link></>
                : ''
            }    
            
        </div>
        :''}
        {asPath!=='/'&&!currentPath.type?
        <div className={styles.root}>
            <Link href={'/'} className={styles.link}>Главная</Link>
            <span className={styles.link}>/</span>
             <Link href={asPath} className={styles.link}>{otherPath[asPath]} </Link>  
            
        </div>
        :''}
        </div>
    )
};

export default Path;