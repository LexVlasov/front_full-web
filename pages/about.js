import styles from "../components/all.module.scss";
import Link from "next/link";
const AboutPage = () =>{
    return(
        <div className={styles.about}>
            <title>О нас! У нас вы можете заказать аналоги Виагры по самым низким ценам (доставка по Москве и другим городам России)</title>
            <h1 style={{marginBottom:"30px",fontWeight:"700"}}>О нас</h1>

            <p> Компания One Pill - официальный представитель индийский и китайский фармацевтических препаратов в России. Наши партнеры представлены в каждом городе: крупные аптечные сети, филилалы в регионах. 
                </p>
                <p>
                Для нас самым важным является предоставление каждому нашему клиенту только качественыне препараты по самым низким ценам и в самые короткие сроки. One Pill - одна из не многих компаний, предоставляющая лучшие аналоги виагры (сиалис, левитра и т.д.).
                </p> <p>
                Компания One Pill основана в 2017 году. За это время наши услуги и продукты оценили более 10 000 клиентов.
                </p><p>
                Для One Pill ценен каждый покупатель. Присоединяйтесь к числу наших постоянных клиентов. Вы приятно удивитесь высокому уровню обслуживания и выгодным ценам: <Link href="/">перейти в каталог препаратов для потенции</Link>
            </p>
        </div>
    )
};

export default AboutPage;