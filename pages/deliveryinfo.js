import styles from "../components/all.module.scss";
import Image from 'next/image';

const DeliveryInfo = () =>{
    return(
        <>
        <div className={styles.delivery}>
        <title>Информация о доставке! У нас вы можете заказать аналоги Виагры по самым низким ценам (доставка по Москве и другим городам России)</title>
        <meta name="description" content="Добро пожаловать в интернет-аптеку One Pill в Москве! У нас вы найдете широкий выбор дженериков виагры, левитры, сиалиса, БАД для здоровья, презервативов, женской виагры и многое другое. Гарантируем качественный сервис и быструю доставку в день заказа. При покупке от 3000 рублей скидка на доставку по Москве. Все оттенки твоих желаний... +7(800)511-31-02"/>
            <h1>100% анонимная доставка</h1>

            <ul >
                <li><span>Нейтральная упаковка без опознавательных знаков</span></li>
                <li><span>Посылка отправляется персонально от сотрудника компании</span></li>
                <li><span>Сотрудники служб доставки не имеют информации о содержании почтовой бандероли</span></li>
            </ul>

            <table >
            <tbody>
                <tr>
                <th colSpan="2"><b>Почта России: 1 класс</b></th>
                </tr>
                <tr>
                    <td className={styles.tdname}><b>Регион</b></td>
                    <td className={styles.tddesc}>Вся Россия</td>
                </tr>
                <tr>
                    <td className={styles.tdname}><b>Стоимость</b></td>
                    <td className={styles.tddesc}>350 руб.</td>
                </tr>
                <tr>
                    <td className={styles.tdname}><b>Сроки</b></td>
                    <td className={styles.tddesc}>~6-10 дней</td>
                </tr>
                <tr>
                    <td className={styles.tdname}><b>Реальное ФИО</b></td>
                    <td className={styles.tddesc}>Обязательно (сотрудники не знают о содержании посылки)</td>
                </tr>
                </tbody>
            </table>

            <table >
                <tbody>
                <tr>
                <th colSpan="2" ><b>
                            Курьерская доставка по Москве</b></th>
                </tr>
                <tr>
                    <td  className={styles.tdname}><b>По городу</b></td>
                    <td className={styles.tddesc}>350 руб. (от 3000 руб. бесплатно)</td>
                </tr>
                <tr>
                    <td  className={styles.tdname}><b>За МКАД к метро</b></td>
                    <td className={styles.tddesc}>350 руб. (от 3000 руб. бесплатно)</td>
                </tr>
                <tr>
                    <td  className={styles.tdname} rowSpan="3"><b>За МКАД на дом</b></td>
                    <td className={styles.tddesc}>До 5 км от МКАД - 550 р.</td>
                </tr>
                <tr>
                    <td className={styles.tddesc}>До 10 км от МКАД - 800 р.</td>
                </tr>
                <tr>
                    <td className={styles.tddesc}>Свыше 10 км от МКАД - 20 р/км, лимит до 30 км от МКАД.</td>
                </tr>
                <tr>
                    <td  className={styles.tdname}><b>Сроки</b></td>
                    <td className={styles.tddesc}>В день заказа </td>
                </tr>
                <tr>
                    <td  className={styles.tdname}><b>Реальное ФИО</b></td>
                    <td className={styles.tddesc}>Не обязательно</td>
                </tr>
                </tbody>
            </table>


            <table >
            <tbody>
                <tr>
                <th colSpan="2"  ><b>Экспресс-доставка EMS Russian Post</b></th>
                </tr>
                <tr>
                    <td  className={styles.tdname}><b>Регион</b></td>
                    <td className={styles.tddesc}>Вся Россия</td>
                </tr>
                <tr>
                    <td  className={styles.tdname}><b>Стоимость</b></td>
                    <td className={styles.tddesc}>	700р.</td>
                </tr>
                <tr>
                    <td  className={styles.tdname}><b>Сроки</b></td>
                    <td className={styles.tddesc}>~2-5 дней</td>
                </tr>
                <tr>
                    <td  className={styles.tdname}><b>Реальное ФИО</b></td>
                    <td className={styles.tddesc}>Обязательно (сотрудники не знают о содержании посылки) </td>
                </tr>
                    </tbody>
            </table>


            <h3>Наша упаковка</h3>
                <table >
                <tbody>
                    <tr className={styles.trimg}>
                        <td ><b>1. Сбор заказа</b></td>
                        <td><b>2. Защитное покрытие</b></td>
                        <td><b>3. Бандероль</b></td>
                    </tr>
                    <tr>
                        <td><Image width={800} height={800} src='/upload/deliverypost/packaging_1.jpg' alt="Сбор заказа One Pill"  /></td>
                        <td><Image width={800} height={800} src='/upload/deliverypost/packaging_3.jpg' alt="Зашитное покрытие One Pill"  /></td>
                        <td><Image width={800} height={800} src='/upload/deliverypost/packaging_4.jpg' alt="Бандероль One Pill"  /></td>
                    </tr>   
                    </tbody>
                </table>

    </div>
    </>
    )
};

export default DeliveryInfo;