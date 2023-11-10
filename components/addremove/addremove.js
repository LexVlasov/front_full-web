import styles from "./addremove.module.scss";


const Addremove = ({
    setCount,
    count,
    min_q,
    step_q,
    name,
    discount,
    kda,
    price,
    avatar,
    type,
    quant,
    setQuant,
    currentPrice,
    id,
    group_type,
    ie_recomented
}) =>{

const itemIntoCart = count.filter(item=>item.id === name).length>0? count.filter(item=>item.id === name)[0].cnt:0;

const removeItem =()=>{
    if(quant-step_q<=0){
        setQuant(parseInt(0))
    } else{
        setQuant(quant-parseInt(step_q));
    }

}



const addToCart = () =>{
    const items ={
        id:name,
        cnt:parseInt(quant),
        "maxPrice":currentPrice,
        sum: quant*parseInt(Math.round(currentPrice*((100-discount)/100),0)),
        product_id:id,
        discount:discount,
        kda:kda,
        price:price,
        step_q:step_q,
        min_q:min_q,
        avatar:avatar,
        type:type,
        group_type:group_type,
        name:name,
        ie_recomented:ie_recomented,
      };

      let oldCount = [...count];
      let prodIn = oldCount.findIndex((p)=> p.id === items.id);
      if (prodIn===-1 && parseInt(quant)!==0&&parseInt(quant)>=parseInt(min_q)){
        
        oldCount.push(items);
        setCount(oldCount);
      } else if (parseInt(quant)!==0&&parseInt(quant)>=parseInt(min_q)){

        oldCount[prodIn].cnt =parseInt(quant);
        oldCount[prodIn].sum = parseInt(quant)* parseInt(Math.round(currentPrice*((100-discount)/100),0));
        oldCount[prodIn].maxPrice = currentPrice;
        setCount(oldCount);
      } else{
        setCount(oldCount.filter(item=>item.id !== oldCount[prodIn].id));
      }
}

return(
    <>
    <div className={styles.root}>
        <button className={styles.button1}  onClick={removeItem}>-</button>
        <input type="text" value={quant} onChange={(e)=>{setQuant(e.target.value)}} className={(quant>= min_q||quant==0)&&((quant-min_q)%step_q===0) ?styles.innput :styles.errorinput} required/>
        
        <button className={styles.button2} onClick={()=>setQuant(parseInt(quant)+parseInt(step_q))}>+</button>
    </div>
    {itemIntoCart>0&&<div className={styles.already} >в корзине {itemIntoCart} шт.</div>}
    {quant<min_q&&parseInt(quant)!==0&&<div className={styles.errorhelp}><i>* количество не может быть меньше {min_q} штук</i></div>}
    {(quant-min_q)%step_q!==0&&<div className={styles.errorhelp}><i>* шаг изменение количества должен быть равен {step_q}</i></div>}
    <button className={styles.buy} onClick={addToCart} disabled={(quant<min_q&&quant>0)||(quant-min_q)%step_q!==0?true:false}>Купить</button>
    </>
)
};
export default Addremove;