
import styles from "../components/all.module.scss";

const Refund = () =>{
    return(
        <div className={styles.about}>
          <title>Информация о возврате! У нас вы можете заказать аналоги Виагры по самым низким ценам (доставка по Москве и другим городам России)</title>
            <h1 style={{marginBottom:"30px",fontWeight:"700"}}>Возврат</h1>

<p> У нас действует беспрецедентная акция. Начиная с 01.11.2018 и по настоящее время вы можете совершить возврат любых препарат (в т.ч. надлежащего качества).
      </p>
      <p className={styles.refundi}>
      <i>Возврат стоит расценивать как уникальную услугу One Pill, т.к. согласно Постановление Правительства РФ от 19.01.1998 № 55 лекарственные средства надлежащего качества обязательному возврату не подлежат.</i>
      </p>
<h3 style={{marginBottom:"30px",fontWeight:"700"}}>Условия возврата</h3> 
<h4 style={{marginBottom:"10px",fontWeight:"700"}}>Общие</h4> 
<ul style={{marginBottom:"20px",paddingLeft:"20px"}}>
  <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>стоимость доставки ложится на клиента и возврату не подлежит;</span></li>
  <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>у позиций, которые продаются поштучно, возврат также осуществляется поштучно;</span></li>
  <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>препараты, которые продаются только целыми упаковками, возвращаются тоже целыми упаковками;</span></li>
</ul>
<h4 style={{marginBottom:"10px",fontWeight:"700"}}>Возврат препаратов надлежащего качества:</h4>
<ul style={{marginBottom:"20px",paddingLeft:"20px"}}>
  <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>можете воспользоваться возвратом в течение 3х месяцев с момента покупки;</span></li>
  <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>но не позднее, чем за полгода до истечения срока годности;</span></li>
</ul>
<h4 style={{marginBottom:"10px",fontWeight:"700"}}>Брака:</h4>
<ul style={{marginBottom:"20px",paddingLeft:"20px"}}>
  <li style={{color:"#316ab1",marginBottom:"10px"}}><span style={{color:"#000"}}>можете воспользоваться возвратом не позднее, чем за полгода до истечения срока годности;</span></li>
</ul>
<p style={{opacity:"70%"}}>
* срок годности в среднем 2 года с момента покупки. Точные сроки годности смотрите в карточках препаратов.
</p>
        </div>
    )
};

export default Refund;