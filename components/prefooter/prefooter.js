import styles from "./prefooter.module.scss";
import Link from "next/link";
import { useAppState } from "../layout";
import Image from 'next/image';
const Prefooter = () =>{
    const { windowWidth } = useAppState();
    return(
        <>
        {windowWidth >1000 ? (<div className={styles.root}>
            <div className={styles.subroot}>
                <div className={styles.leftside}>
                    <h3>Интернет-магазин</h3>
                    <ul className={styles.ullist}>
                        <li className={styles.lilist}><Link href="about">О нас</Link></li>
                        <li className={styles.lilist}><Link href="deliveryinfo">Доставка</Link></li>
                        <li className={styles.lilist}><Link href="paymentinfo">Оплата</Link></li>
                        <li className={styles.lilist}><Link href="refund">Возврат</Link></li>
                        <li className={styles.lilist}><Link href="questions">Вопросы</Link></li>
                        <li className={styles.lilist}><Link href="certificates">Сертификаты</Link></li>
                        <li className={styles.lilist}><Link href="contact">Контакты</Link></li>
                    </ul>
                    <div className={styles.logodiv}>
                        <Link href='/'>
                        <Image width={800} height={800} alt='logo' src='/upload/logo.webp' className={styles.logoimg}/>
                        <div className={styles.logotext}>One Pill</div>
                        </Link>
                    </div>
                </div>
                <div className={styles.rightside}>
                <h3>Мы в соц. сетях</h3>
                <div className={styles.socialmedia}>
                <Link href='https://t.me/one_pill'><Image alt='telegram' width={800} height={800} src='/upload/telegram.png' className={styles.telegram}/></Link>
                </div>
                <div className={styles.contactinfo}>
                <h2>+7 (800) 511-31-02</h2>
                <span>Ежедневно, с 10 до 21-го ч. Звонок бесплатный</span>
                </div>
                <div className={styles.paymentmethod}>
                    <Image width={800} height={800} alt='visa' src='/upload/visa.webp' className={styles.paytype}/>
                    <Image width={800} height={800} alt='master-card' src='/upload/master-card.webp' className={styles.paytype}/>
                    <Image width={800} height={800} alt='mir-logo' src='/upload/mir-logo.svg' className={styles.paytype}/>
                </div>
                </div>
            </div>
        </div>):
        (<div className={styles.root}>
            <div className={styles.subroot}>
                <div className={styles.leftside}>
                <div className={styles.logodiv}>
                        <Link href='/'>
                        <Image width={800} height={800} alt='logo' src='/upload/logo.webp' className={styles.logoimg}/>
                        <div className={styles.logotext}>One Pill</div>
                        </Link>
                    </div>
                    <div className={styles.contactinfo}>
                    <h2>+7 (800) 511-31-02</h2>
                    <span>Ежедневно, с 10 до 21-го ч. Звонок бесплатный</span>
                    </div>
                    <div className={styles.socialmedia}>
                    <Link href='https://t.me/one_pill'><Image alt='telegram' width={800} height={800} src='/upload/telegram.png' className={styles.telegram}/></Link>
                    </div>
                    <div  className={styles.menubutton} ><h3>Интернет-магазин</h3></div>
                        <ul className={styles.ullist}>
                        <li className={styles.lilist}><Link href="about">О нас</Link></li>
                        <li className={styles.lilist}><Link href="deliveryinfo">Доставка</Link></li>
                        <li className={styles.lilist}><Link href="paymentinfo">Оплата</Link></li>
                        <li className={styles.lilist}><Link href="refund">Возврат</Link></li>
                        <li className={styles.lilist}><Link href="questions">Вопросы</Link></li>
                        <li className={styles.lilist}><Link href="certificates">Сертификаты</Link></li>
                        <li className={styles.lilist}><Link href="contact">Контакты</Link></li>
                    </ul>
                <div className={styles.paymentmethod}>
                    <Image width={800} height={800} alt='visa' src='/upload/visa.webp' className={styles.paytype}/>
                    <Image width={800} height={800} alt='master-card' src='/upload/master-card.webp' className={styles.paytype}/>
                    <Image width={800} height={800} alt='mir-logo' src='/upload/mir-logo.svg' className={styles.paytype}/>
                </div>
                </div>

            </div>
        </div>)
    }
    </>
    )
};

export default Prefooter;