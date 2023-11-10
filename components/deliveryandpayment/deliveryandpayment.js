import Link from "next/link";
import styles from "./dp.module.scss";
import Image from 'next/image';

const DeliveryAndPayment = () =>{
    return (
        <div className={styles.root}>
            <div className={styles.deliveryall}>
            <Image width={800} height={800} src="/upload/delivery.svg" alt='delivery' className={styles.imgpayment}/>
            <div className={styles.paymenttext}>
            <p>Наши гарантированные условия доставки:</p>

                <ul>
                <li><strong>Доставка в день заказа</strong> по Москве.</li>
                <li>При заказе на сумму <strong>от 3000 рублей</strong>, доставка по Москве <strong>бесплатная</strong>.</li>
                <li><strong>100% анонимная доставка</strong>.</li>
                <li>Мы осуществляем <strong>доставку по всей России</strong>. </li>
                </ul>

                <p>Мы заботимся о вашем комфорте и гарантируем быструю и безопасную доставку.</p>
    
                    <p>Подробнее о доставке можете найти <Link href='/deliveryinfo' className={styles.linkpayment}>здесь</Link></p>
                 </div>
            </div>
            <div className={styles.paymentall}>
                 <Image width={800} height={800} src="/upload/payment.svg" alt='payment' className={styles.imgpayment}/>
                 <div className={styles.paymenttext}>
                 <p>Оплачивайте заказ удобным для вас способом:</p>
                 <br/>
                    <ul className={styles.paylist}>
                    <li><strong>Наличными курьеру</strong> — оплата при получении.</li>
                    <li><strong>Онлайн оплата</strong> банковской картой.</li>
                    <li><strong>Наложенный платеж</strong> на почте.</li>
                    </ul>
                    <br/>
                    <p> <span className={styles.online}>Онлайн оплата дарит вам скидку 5%.</span> Это наше специальное предложение для вас!</p>
    
                    <p>Подробнее об оплате можете найти <Link href='/paymentinfo' className={styles.linkpayment}>здесь</Link></p>
                 </div>
            </div>
        </div>
    )
};
export default DeliveryAndPayment;