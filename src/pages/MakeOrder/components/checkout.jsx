import { TextField } from '@mui/material';
import styles from "../makeorder.module.scss";

export const Checkout = ({order,totalSum,delivery,returnData,paymentId,newCount}) =>{

    const backHost = 
    process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
    'http://localhost:4444';

    return(
    <>
                <h3 className={styles.wayorderhead}>Заказ <b>№{returnData?returnData.id:''}</b> успешно оформлен</h3>
                <div className={styles.way}>
                    <p>Заказ <b>№{returnData?returnData.id:''}</b> на сумму <span className={styles.endsumorder}>{totalSum}</span> успешно создан. В ближайшее время с Вами свяжется наш менеджер для подтверждения заказа и уточнения деталей  </p>

                    <h3 className={styles.wayorderhead}>Детали заказа</h3> 
                    <p><i>Доставка:</i><b> {delivery[0].name} ({(delivery[0].free_delivery<totalSum?'Бесплатно':delivery[0].price)})</b></p>
                    <p><i>Способ оплаты:</i><b> {paymentId[0].name}</b></p>
                    <p><i>Контактный номер:</i><b> {order[0].phone}</b></p>      
                    <p><i>Адрес доставки:</i><b> {order[0].address_1 + ', ' + order[0].address_2}</b></p>
                    {order[0].zip.length >0 ? <p><i>Индекс:</i><b> {order[0].zip}</b></p>: ''}
                    <h3 className={styles.wayorderhead}>Заказ</h3> 
                    <div className={styles.detailmainorder}>
                        <div className={styles.productlistcheckout}>
                        {newCount.map((obj,ind)=>(
                            <>
                        <div className={styles.mainorder}>
                            <a href={`/good/${obj.id}`}><img src={`${backHost}${obj.avatar}`} className={styles.imagekda}></img></a>
                            <div className={styles.infoorder}><h7 className={styles.nameorder}>{obj.name}</h7></div>
                            <div className={styles.priceorder}>
                                <div className={styles.priceorder}>
                                    <div className={styles.totalpriceorder}>{obj.sum}</div>
                                    <div className={styles.calculorder}>{obj.cnt}шт. х {obj.maxPrice}</div>
                                </div>
                            </div>
                            
                        </div>

                            </>
                            ))}
                            </div>
                            
                        </div>

                    </div>
                     
                    </>);
};