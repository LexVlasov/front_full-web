import { useAppState } from "../components/layout";
import styles from "../components/makeorder/makeorder.module.scss";
import {useState} from "react";
import Link from "next/link";
import Place from "../components/makeorder/place";
import Checkout from "../components/makeorder/checkout";
import Delivery from "../components/makeorder/delivery";
import Customer from "../components/makeorder/customer";
import Paymethod from "../components/makeorder/paymethod";
import axios from '../components/axios';
import Image from 'next/image';

const MakeOrder =({
    deliveryMethod,
    paymentMethod,
})=>{
    const { count, setCount,backHost,windowWidth } = useAppState();

    const [page,setPage] = useState(1);
    const [order,setOrder] = useState([]);
    const [delivery, setDelivery] = useState([0]);
    const [returnData, setReturnData] = useState();
    const [paymentId,setPaymentId] = useState();
    const [newCount,setNewCount] = useState();
    const [sumTotal,setSumTotal] = useState();
    const w = '300';
    const h = '80';
    let product_id_count = '';
    let quantity = '';
    count.map((obj,ind)=>{
    if(ind===0){
        quantity= quantity+obj.cnt;
        product_id_count=product_id_count+obj.product_id;
    }else{
        quantity= quantity+':'+obj.cnt;
        product_id_count=product_id_count+':'+obj.product_id;
    }});
    
    const discount = order.length>0?(order[0].pay_id===5||order[0].pay_id===6||order[0].pay_id===3||order[0].discount>0?0.05:0):0;
    let totalSum = Math.round((count ? count.map((obj,i)=> Math.round(Math.round(obj.maxPrice*(100-obj.discount)/100,0)*(1-discount),0)*obj.cnt):[]).reduce((a,b)=>a+b,0),0);

    if(delivery[0]!==0){
        if(totalSum<delivery[0].free_delivery){
            totalSum = totalSum + delivery[0].price;
        } else if(delivery[0].id!==5&&delivery[0].id!==4){
            totalSum = totalSum + delivery[0].price;
        }
        
    }

    const nextPage = async ()=>{
        if(page !==4){

        const oldPage = page + 1;
        setPage(oldPage);
        } else {

            try{
                const data = await axios.post('/order',order);
                if(!data.data){
                  alert('Error in make order!');
                }
                setReturnData(data.data);
                const oldPage = page + 1;
                setPage(oldPage);
                setSumTotal(totalSum);
                setNewCount(count);
                setCount([]);
                data.data.pay_link&&window.open(data.data.pay_link,'_blank');
                if(document.cookie.includes('promo=')){document.cookie = `promo=`}
              }catch(err){
                console.warn(err);
                alert('Error create order')
              }
        }
        
    };
    const backPage = async ()=>{
        const oldPage = page - 1;
        setPage(oldPage);
    };

    let flgDisable = false;
    if(page===1){
        flgDisable = order.length===0? true:(order[0].address_1.length===0? true : false)
    } else if(page===3){
        flgDisable = (order[0].phone.length>0&&order[0].address_2.length>0) ? false : true
    };

    const MakeOrderButton = ((page)=>{
        if (page===5){
            return(
                <Link href='/' ><button className={styles.returninshop} >Вернутся в магазин</button></Link>
            );
        }
        else{
            return(
                <button className={flgDisable ?styles.nextdisabled :styles.next} onClick={nextPage} disabled={flgDisable}>Далее</button>
                );
        }
    });

    const renderSwitch = (page)=>{
        switch(page){
            case 1:
               return( 
                <Place 
                order={order} 
                setOrder={setOrder}
                count={count}/>
                )
            case 2:
                return( 
                    <Delivery 
                    order={order} 
                    setOrder={setOrder}
                    setDelivery={setDelivery}
                    delivery={deliveryMethod}
                    />
                    )
            case 3:
                return( 
                    <Customer 
                    order={order} 
                    setOrder={setOrder}
                      />
                    )
            case 4:
                return( 
                    <Paymethod
                    paymentId = {paymentId}
                    setPaymentId ={setPaymentId}
                    order={order} 
                    setOrder={setOrder}
                    payment={paymentMethod}
                    />
                    )
            case 5:
                return( 
                    <Checkout
                    order={order}
                    delivery={delivery}
                    returnData={returnData}
                    paymentId = {paymentId}
                    totalSum = {sumTotal}
                    newCount={newCount}
                    />
                    )
            default:
                return ''
        }
    };

    return(
        <>
        <title>Оформить заказ на сайте 1pill.net за несколько секунд</title>
    <div className={styles.root}>
        <h2>Оформление заказа</h2>
        <div className={styles.wrapper}>
                <ol className={styles.cstepper}>
                    <li className={styles.cstepper__item} key={1}><h4 className={page===1?styles.numberactive:styles.numberdone}>1</h4><h4 className={styles.h7mobile}>Населенный пункт</h4></li>
                    <li className={styles.cstepper__item} key={2}><h4 className={page ===2 ? styles.numberactive : (page>2 ? styles.numberdone:styles.numbernonactive)}>2</h4><h4 className={styles.h7mobile}>Способ доставки</h4></li>
                    <li className={styles.cstepper__item} key={3}><h4 className={page ===3 ? styles.numberactive : (page>3 ? styles.numberdone:styles.numbernonactive)}>3</h4><h4 className={styles.h7mobile}>Получатель</h4></li>
                    <li className={styles.cstepper__item} key={4}><h4 className={page ===4 ? styles.numberactive : (page>4 ? styles.numberdone:styles.numbernonactive)}>4</h4><h4 className={styles.h7mobile}>Оплата</h4></li>
                    <li className={styles.cstepper__item} key={5}><h4 className={page ===5 ? styles.numberdone:styles.numbernonactive}>5</h4><h4 className={styles.h7mobile}>Заказ оформлен</h4></li>
                </ol>
            </div>
        {renderSwitch(page)}
        
        <div className={styles.buttonall}> 
            <div className={styles.backbutton}>{page!==1&&page!==5 ? <button className={styles.back} onClick={backPage}>Назад</button>:''}</div>
                <div className={styles.nextbutton}>{MakeOrderButton(page)}</div>
        </div>
        {page!==5?
        (
            <>
            <div className={styles.wayorderhead}>Информация о заказе</div>
        <div className={styles.detailmainorder}>
            <div className={styles.productlist}>
            {count.map((obj,ind)=>(
  
            <div className={styles.mainorder} key={ind}>
                <Link href={`/preparations/${obj.group_type}/${obj.name}`}><Image src={`${backHost}${obj.avatar}`} className={styles.imagekda} alt={obj.name} width={800} height={800}/></Link>
                <div className={styles.infoorder}><h3 className={styles.nameorder}>{obj.name}</h3></div>
                <div className={styles.priceorder}>
                    <div className={styles.priceorder}>
                        <div className={styles.totalpriceorder}>{Math.round(Math.round(obj.maxPrice*(100-obj.discount)/100,0)*(1-discount),0)*obj.cnt}</div>
                        <div className={styles.calculorder}>{obj.cnt}шт. х {Math.round(Math.round(obj.maxPrice*(100-obj.discount)/100,0)*(1-discount),0)}</div>
                    </div>
                </div>
                
              </div>


            ))}
            </div>
            <div className={styles.totalsumcnt}> 
              <div className={styles.ts}>
                <div className={styles.descripttotal}>Доставка:</div> <div 
                className={ delivery[0]===0||(delivery[0].free_delivery<(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)&&(delivery[0].id===5||delivery[0].id===4)) ? styles.costdel :styles.costdelcost }>{delivery[0]===0 ? '-':(delivery[0].free_delivery<(count ? count.map((obj,i)=> obj.sum):[]).reduce((a,b)=>a+b,0)&&(delivery[0].id===5||delivery[0].id===4)?'Бесплатно':delivery[0].price)}</div>
              </div>
              <div className={styles.ts}>
                <div className={styles.descripttotal}>Скидка: </div><div className={discount ===0 ?styles.costdel:styles.costdelcost}>{(count ? count.map((obj,i)=> Math.round(Math.round(obj.maxPrice*(100-obj.discount)/100,0)*discount,0)*obj.cnt):[]).reduce((a,b)=>a+b,0)}</div>
                </div>
                <div className={styles.ts}>
                <div className={styles.descripttotal}>К оплате: </div> <div className={styles.totalpay}>{totalSum} </div>
                </div>
              </div>
        </div></>
        )
        : ''    
    }
    </div>
    </> )
};

export async function getServerSideProps() {
    let deliveryMethod = null;
    let delivery;
    let paymentMethod = null;
    let payment;
    try {
        delivery = await axios.get(`/delivery`);
        deliveryMethod =  delivery ? delivery.data : '';
        payment = await axios.get(`/payment`);
        paymentMethod =  payment ? payment.data : '';
    } catch (error) {
        console.warn(error);
    }
    return {
        props: {
            deliveryMethod,
            paymentMethod,
        },
    };
  
};


export default MakeOrder;