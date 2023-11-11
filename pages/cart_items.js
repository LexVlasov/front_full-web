import Link from "next/link";
import axios from '../components/axios';
import styles from "../components/cart/cart.module.scss";
import { useAppState } from "../components/layout";
import {useState} from "react";
import Popular from '@/components/popular/popular';
import Image from "next/image";
const Cart =({popularProduct})=>{

    const { count, setCount,backHost,windowWidth } = useAppState();
    const [error,setError] = useState(0);
    const w = windowWidth>=1000?'220':'120';
    const h = windowWidth>=1000?'220':'170';
    const totalAmount = count.length > 0 ? count.map((obj,i)=> obj.sum).reduce((a,b)=>a+b,0):'-';
    const dicreseItem = (id) =>{
        let oldCount =[...count];
        let prodIn = oldCount.findIndex((p)=> p.id === id);
        let currentPrice = oldCount[prodIn].maxPrice
        oldCount[prodIn].cnt = oldCount[prodIn].cnt === oldCount[prodIn].min_q ? oldCount[prodIn].min_q : (oldCount[prodIn].cnt-oldCount[prodIn].step_q)
        for (var i = 0; i < oldCount[prodIn].price.length;i++){
            if(parseInt(oldCount[prodIn].price[i].n)<=oldCount[prodIn].cnt&&oldCount[prodIn].cnt>= oldCount[prodIn].min_q&&((oldCount[prodIn].cnt-oldCount[prodIn].min_q)%oldCount[prodIn].step_q===0)){
              currentPrice = oldCount[prodIn].price[i].p;
            }
          };
        oldCount[prodIn].sum = parseInt(oldCount[prodIn].cnt)* parseInt(Math.round(currentPrice*((100-oldCount[prodIn].discount)/100),0))
        oldCount[prodIn].maxPrice = parseInt(Math.round(currentPrice*((100-oldCount[prodIn].discount)/100),0))
        setCount(oldCount);
    }

    const increaseItem = (id) =>{
        let oldCount =[...count];
        let prodIn = oldCount.findIndex((p)=> p.id === id);
        let currentPrice = oldCount[prodIn].maxPrice
        oldCount[prodIn].cnt = oldCount[prodIn].cnt+oldCount[prodIn].step_q
        for (var i = 0; i < oldCount[prodIn].price.length;i++){
            if(parseInt(oldCount[prodIn].price[i].n)<=oldCount[prodIn].cnt
            &&oldCount[prodIn].cnt>= oldCount[prodIn].min_q
            &&((oldCount[prodIn].cnt-oldCount[prodIn].min_q)%oldCount[prodIn].step_q===0)){
              currentPrice = oldCount[prodIn].price[i].p;
            }
          };
        oldCount[prodIn].sum = parseInt(oldCount[prodIn].cnt)* parseInt(Math.round(currentPrice*((100-oldCount[prodIn].discount)/100),0))
        oldCount[prodIn].maxPrice = parseInt(Math.round(currentPrice*((100-oldCount[prodIn].discount)/100),0))
        setCount(oldCount)
    }

    const inputItem = (id, value) =>{
        let oldCount =[...count];
        let prodIn = oldCount.findIndex((p)=> p.id === id);
        let currentPrice = oldCount[prodIn].maxPrice;

        if(value < oldCount[prodIn].min_q || value%oldCount[prodIn].step_q!==0){
            if(value < oldCount[prodIn].min_q){setError(1);}
            else if(value%oldCount[prodIn].step_q!==0){setError(2);}
            oldCount[prodIn].cnt = value;
            for (var i = 0; i < oldCount[prodIn].price.length;i++){
                if(parseInt(oldCount[prodIn].price[i].n)<=oldCount[prodIn].cnt
                &&oldCount[prodIn].cnt>= oldCount[prodIn].min_q
                &&((oldCount[prodIn].cnt-oldCount[prodIn].min_q)%oldCount[prodIn].step_q===0)){
                  currentPrice = oldCount[prodIn].price[i].p;
                }
              };
            oldCount[prodIn].sum = parseInt(oldCount[prodIn].cnt)* parseInt(Math.round(currentPrice*((100-oldCount[prodIn].discount)/100),0));
            oldCount[prodIn].maxPrice = parseInt(Math.round(currentPrice*((100-oldCount[prodIn].discount)/100),0));
            setCount(oldCount);
        }else{
            setError(0);
            oldCount[prodIn].cnt = value;
            for (var i = 0; i < oldCount[prodIn].price.length;i++){
                if(parseInt(oldCount[prodIn].price[i].n)<=oldCount[prodIn].cnt
                &&oldCount[prodIn].cnt>= oldCount[prodIn].min_q
                &&((oldCount[prodIn].cnt-oldCount[prodIn].min_q)%oldCount[prodIn].step_q===0)){
                  currentPrice = oldCount[prodIn].price[i].p;
                }
              };
            oldCount[prodIn].sum = parseInt(oldCount[prodIn].cnt)* parseInt(Math.round(currentPrice*((100-oldCount[prodIn].discount)/100),0));
            oldCount[prodIn].maxPrice = parseInt(Math.round(currentPrice*((100-oldCount[prodIn].discount)/100),0));
            setCount(oldCount);
        }
    };


    const deleteItem = (id) =>{
        let oldCount =[...count];
        let prodIn = oldCount.findIndex((p)=> p.id === id);
        setCount(oldCount.filter(item=>item.id !== oldCount[prodIn].id));
    }

    return(
        <>
        <title>Дженерики Виагры дешево. Проверенные поставщики, оригинальные компоненты, сертифицированные производитли! 1pill.net. Осуществляем доставку по всей России</title>
        <meta name="description" content="Добро пожаловать в интернет-аптеку One Pill в Москве! У нас вы найдете широкий выбор дженериков виагры, левитры, сиалиса, БАД для здоровья, презервативов, женской виагры и многое другое. Гарантируем качественный сервис и быструю доставку в день заказа. При покупке от 3000 рублей скидка на доставку по Москве. Все оттенки твоих желаний... +7(800)511-31-02"/>
        <div className={styles.root}>
            <h1>Корзина</h1>
            <div className={styles.block}>
                <div className={styles.blockitems}>
                <ul>
                {count.length > 0? count.map((item,ind)=>(
                    <li key={ind}>
                        <div className={styles.item}>
                            <Link href={`/preparations/${item.group_type}/${item.name}`}><Image width={800} height={800} src={`${backHost}${item.avatar}`} alt={item.name}/></Link>
                            <div className={styles.maininfo}>
                            <Link href={`/preparations/${item.group_type}/${item.name}`}><h3 className={styles.title}>{item.name}</h3></Link>
                            <div className={styles.itemtype}>{item.type}</div>
                            <div className={styles.price}>{item.sum}</div>
                            <div className={styles.blockbutton}>
                                <button className={styles.buttonminus} onClick={()=>dicreseItem(item.id)}>-</button>
                                <input type="text" className={styles.inputtext} value={item.cnt} onChange={(e)=>{inputItem(item.id,e.target.value)}} required />
                                <button className={styles.buttonplus} onClick={()=>increaseItem(item.id)}>+</button>
                                
                            </div>
                            {error===1&&item.min_q>item.cnt&&<div className={styles.error}> Количество товара не может быть меньше {item.min_q}</div>}
                            {error===2&&item.cnt%item.step_q!==0&&<div className={styles.error}> Количество товара должно быть кратно {item.step_q}</div>}
                            </div>
                            <div className={styles.deletebutton}>
                                <button onClick={()=>deleteItem(item.id)}>╳</button>
                            </div>
                        </div>
                    </li> 
                )):
                <div className={styles.emptycar}>
                    В корзине пусто
                    </div>}
                </ul>
                
                </div>
                <div className={styles.totalcard}>
                    <div className={styles.totalsum}>
                        <div className={styles.itogo}>
                         <b>Итого к оплате:</b>
                        </div>
                        <div className={styles.amount}>
                        <b>{totalAmount} руб.</b>
                        </div>
                    </div>
                    <div className={error===0?styles.makeorder : styles.makeordererror}><Link href={error!==0||count.length === 0 ? 'cart_items':'make_order'}>Оформить заказ</Link></div>
                    
                </div>
            </div>
            
        </div>
        <Popular popularProduct={popularProduct}/>
        </>
    )
};




export async function getServerSideProps() {
    let popularProduct = null;
    let product;
    try {

      product = await axios.get(`/popular/`);
      popularProduct =  product ? product.data : '';
    } catch (error) {
        console.warn(error);
    }
    return {
        props: {
            popularProduct,
        },
    };
  
};

export default Cart;