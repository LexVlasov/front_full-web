import styles from "../components/all.module.scss";
import Link from "next/link";
const Contact = () =>{
    return(
        <div className={styles.about}>
            <title>наши контакты! У нас вы можете заказать аналоги Виагры по самым низким ценам (доставка по Москве и другим городам России)</title>
            <h1 style={{marginBottom:"30px"}}>Контакты</h1>

<p> Специалисты компании One Pill всегда рады проконсультировать Вас по любому интересующему вопросу.
      </p>
      <p>
      Для нас самым важным является предоставление каждому нашему клиенту только качественыне препараты по самым низким ценам и в самые короткие сроки. One Pill - одна из не многих компаний, предоставляющая лучшие аналоги виагры (сиалис, левитра и т.д.).
      </p> <p>
      Компания One Pill основана в 2022 году. За это время наши услуги и продукты оценили более 10 000 клиентов.
      </p><p>
      Для One Pill ценен каждый покупатель. Присоединяйтесь к числу наших постоянных клиентов. Вы приятно удивитесь высокому уровню обслуживания и выгодным ценам: <Link href="/">перейти в каталог препаратов для потенции</Link>
</p>
        </div>
    )
};

export default Contact;