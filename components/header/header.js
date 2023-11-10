import Link from 'next/link';
import styles from "./header.module.scss";

const Header = () => {


    return(
        <header className={styles.root} id='header'>

            <nav className={styles.buttons}>
                <div className={styles.buttonshead}>

                                <Link href="/about" >
                                    <button className={styles.newpost}>О нас</button>
                                </Link>
                                <Link href="/deliveryinfo">
                                <button className={styles.newpost}>Доставка</button>
                                </Link>
                                <Link href="/paymentinfo">
                                    <button className={styles.newpost}>Оплата</button>
                                </Link>
                                <Link href="/refund">
                                    <button className={styles.newpost}>Возврат</button>
                                </Link>
                                <Link href="/questions">
                                    <button className={styles.newpost}>Вопросы</button>
                                </Link>
                                <Link href="/certificates">
                                    <button className={styles.newpost}>Сертификаты</button>
                                </Link>
                                <Link href="/contact">
                                    <button className={styles.newpost}>Контакты</button>
                                </Link>

                                </div>
                                <div className={styles.contacinfo}>
                                <div className={styles.childinfo}>Ежедневно, с 10 до 21-го ч. Звонок бесплатный</div>
                                <div className={styles.childnumber}>+7 (800) 511-31-02</div>
                                </div>
            </nav>
            
        </header>
    )
};

export default Header;