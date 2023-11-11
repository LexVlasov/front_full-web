
import styles from "../components/all.module.scss";

const PaymentInfo = () =>{
    return(
        <div className={styles.delivery}>
            <title>Информация об оплате! У нас вы можете заказать аналоги Виагры по самым низким ценам (доставка по Москве и другим городам России)</title>
            <h1 >Оплата</h1>

<p>
Мы предоставляем скидку <b style={{color:"rgb(255, 0, 0)"}}>5%</b> на все способы онлайн оплаты! Таким образом, деньги сразу поступают в оборот и могут использоваться в целях улучшения сервисов и расширения ассортимента продуктов.
</p>
<table >
    <tbody>
    <tr>
    <th  colSpan="2"><b>Банковские карты</b></th>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Скидка за выбор</b></td>
        <td className={styles.tddesc}><b>5%</b></td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Комиссия</b></td>
        <td className={styles.tddesc}>0%</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Службы доставки</b></td>
        <td className={styles.tddesc}>Все</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Примечание</b></td>
        <td className={styles.tddesc}>Доступный и безопасный способ оплаты за товары и услуги через интернет. Оплата происходит с банковской карты.  </td>
    </tr>
    </tbody>
</table>
<table >
    <tbody>
    <tr>
    <th  colSpan="2"><b>Qiwi кошелек</b></th>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Скидка за выбор</b></td>
        <td className={styles.tddesc}><b>5%</b></td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Комиссия</b></td>
        <td className={styles.tddesc}>0%</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Службы доставки</b></td>
        <td className={styles.tddesc}>Все</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Примечание</b></td>
        <td className={styles.tddesc}>У нас идентифицированный кошелёк в Qiwi – это дополнительно увеличивает надёжность платежа. </td>
    </tr>
    </tbody>
</table>
<table >
    <tbody>
            <tr>
    <th  colSpan="2"><b>Яндекс.Деньги</b></th>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Скидка за выбор</b></td>
        <td className={styles.tddesc}><b>5%</b></td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Комиссия</b></td>
        <td className={styles.tddesc}>0%</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Службы доставки</b></td>
        <td className={styles.tddesc}>Все</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Примечание</b></td>
        <td className={styles.tddesc}>У нас идентифицированный кошелёк в Яндекс деньгах – это дополнительно увеличивает надёжность платежа.</td>
    </tr></tbody>
</table>
<table >
    <tbody>
    <tr>
    <th  colSpan="2"><b>Наложенный платёж на почте</b></th>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Скидка за выбор</b></td>
        <td className={styles.tddesc}>нет</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Комиссия</b></td>
        <td className={styles.tddesc}>4-9% (в зависимости от стоимости заказа, рассчитывается автоматически)</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Службы доставки</b></td>
        <td className={styles.tddesc}>Почта России, EMS Экспресс доставка</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Примечание</b></td>
        <td className={styles.tddesc}>Наложенный платёж — это способ расчетов, при котором посылка выдаётся получателю после её оплаты в почтовом отделении во время получения.</td>
    </tr></tbody>
</table>
<table ><tbody>
    <tr>
    <th  colSpan="2"><b>Наличными курьеру One Pill</b></th>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Скидка за выбор</b></td>
        <td className={styles.tddesc}>нет</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Комиссия</b></td>
        <td className={styles.tddesc}>0%</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Службы доставки</b></td>
        <td className={styles.tddesc}>Курьерская служба One Pill</td>
    </tr>
    <tr>
        <td className={styles.tdname}><b>Примечание</b></td>
        <td className={styles.tddesc}>Оплата наличными курьеру происходит в момент доставки товаров. Данный способо подходит тем, то первый раз покупает у нас.</td>
    </tr></tbody>
</table>
        </div>
    )
};

export default PaymentInfo;