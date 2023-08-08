import { Button, ButtonGroup, TextField } from "@mui/material";
import React from "react";
import styles from "./itemcart.module.scss";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


export const ItemCart = ({
  id,
  avatarUrl,
  count,
  setCount,
  name,
  type,
  price,
  maxPrice,
  totalCart,
  step_q,
  min_q
}) => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';

  var priceNow = price[0].p;
  for (var i = 0; i < price.length;i++){
    if(parseInt(price[i].n)<=count){
      
        priceNow = price[i].p;
      
    }
  };
 

  const addToCart = async ()=> {
    let newVal = [...totalCart];
    let prodIn = newVal.findIndex((p)=> p.id === id);
    if(prodIn>-1){
       newVal[prodIn].cnt += step_q;
       newVal[prodIn].sum = newVal[prodIn].cnt * parseInt(priceNow);
      newVal[prodIn].maxPrice = priceNow;
    }
    setCount(newVal);
  };

  const removeFromCart = async () =>{
    let newVal = [...totalCart];

    let prodIn = newVal.findIndex((p)=> p.id === id);
    if(parseInt(newVal[prodIn].cnt) === step_q){
      setCount(newVal.filter(item=>item.id !== newVal[prodIn].id));

    } else{
      newVal[prodIn].cnt -= step_q;
      newVal[prodIn].sum = newVal[prodIn].cnt * parseInt(priceNow);
     newVal[prodIn].maxPrice = priceNow;
     setCount(newVal);
    }
    
  };

  const getText = async (e) =>{
    if(!e){
      e=min_q
    };
    let newVal = [...totalCart];
    let prodIn = newVal.findIndex((p)=> p.id === id);
    if(parseInt(e) === 0){
      setCount(newVal.filter(item=>item.id !== newVal[prodIn].id));

    } else{
      newVal[prodIn].cnt = parseInt(e);
      newVal[prodIn].sum = parseInt(e) * parseInt(priceNow);
     newVal[prodIn].maxPrice = priceNow;
     setCount(newVal);
    }
    
  };

  const deleteItem = async ()=>{

  };

    return (
        <div className={styles.main}>
          <a href={`/${type}/${name}`}><img src={`${backHost}${avatarUrl}`} className={styles.image}></img></a>
          <div className={styles.info}><div className={styles.name}>{name}</div><div className={styles.type}>{type}</div></div>
          <div className={styles.divprice}>
            <div>
              <div className={styles.price}>{priceNow}</div>
              <div className={styles.x}>x</div>
              <ButtonGroup sx={{width:"110px",float:"right",margin:"35px 15px 10px 0px",display:"inline-flex", }}>
                <Button aria-label="reduce" style={{height:"28px", padding:0, minWidth:"30px",borderColor:"#2b91a7",backgroundColor:"#2b91a7",opacity:"70%"}} onClick={removeFromCart}><RemoveIcon style={{height:"10px",width:"10px",color:"#fff"}}/> </Button>
                <TextField inputProps={{style:{padding:0,height:"28px",textAlign:"center",width:"50px", fontSize:"12px",border:"0px"}}} value={count} onChange={e=>getText(e.target.value)}></TextField>
                <Button aria-label="increase" size="small" style={{height:"28px", padding:0, minWidth:"30px",borderColor:"#2b91a7",backgroundColor:"#2b91a7",opacity:"70%"}} onClick={addToCart} ><AddIcon sx={{height:"10px",color:"#fff"}}/></Button>
                <div className={styles.undercount}>Кол-во шт.</div>
                
              </ButtonGroup>
            </div>
            <div className={styles.divdelete}><button className={styles.delete} onClick={removeFromCart}>удалить</button></div>
          </div>
          
        </div>
    );
};


export const ItemCartMobile = ({
  id,
  avatarUrl,
  count,
  setCount,
  name,
  type,
  price,
  maxPrice,
  totalCart,
  step_q,
  min_q
}) => {
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';



  var priceNow = price[0].p;
  for (var i = 0; i < price.length;i++){
    if(parseInt(price[i].n)<=count){
      
        priceNow = price[i].p;
      
    }
  };
 

  const addToCart = async ()=> {
    let newVal = [...totalCart];
    let prodIn = newVal.findIndex((p)=> p.id === id);
    if(prodIn>-1){
       newVal[prodIn].cnt += step_q;
       newVal[prodIn].sum = newVal[prodIn].cnt * parseInt(priceNow);
      newVal[prodIn].maxPrice = priceNow;
    }
    setCount(newVal);
  };

  const removeFromCart = async () =>{
    let newVal = [...totalCart];

    let prodIn = newVal.findIndex((p)=> p.id === id);
    if(parseInt(newVal[prodIn].cnt) === step_q){
      setCount(newVal.filter(item=>item.id !== newVal[prodIn].id));

    } else{
      newVal[prodIn].cnt -= step_q;
      newVal[prodIn].sum = newVal[prodIn].cnt * parseInt(priceNow);
     newVal[prodIn].maxPrice = priceNow;
     setCount(newVal);
    }
    
  };

  const getText = async (e) =>{
    if(!e){
      e=min_q
    };
    let newVal = [...totalCart];
    let prodIn = newVal.findIndex((p)=> p.id === id);
    if(parseInt(e) === 0){
      setCount(newVal.filter(item=>item.id !== newVal[prodIn].id));

    } else{
      newVal[prodIn].cnt = parseInt(e);
      newVal[prodIn].sum = parseInt(e) * parseInt(priceNow);
     newVal[prodIn].maxPrice = priceNow;
     setCount(newVal);
    }
    
  };

  const deleteItem = async ()=>{
    let newVal = [...totalCart];
    setCount(newVal.filter(item=>item.id !== id));
  };

    return (
        <div className={styles.mainmboile}>
          <div className={styles.infomobile}>
          <a href={`/${type}/${name}`} className={styles.imagemobile}><img src={`${backHost}${avatarUrl}`} className={styles.imagemobile}></img></a>
          <div className={styles.name}>{name}</div><div className={styles.type}>{type}</div></div>
          <div className={styles.divpricemobile}>
  
              <div className={styles.pricemobile}>{priceNow}</div>
              <div className={styles.xmobile}>x</div>
              <ButtonGroup className={styles.buttongroup}>
                <Button aria-label="reduce" style={{marginLeft:"10px",height:"28px", padding:0, minWidth:"30px",borderColor:"#2b91a7",backgroundColor:"#2b91a7",opacity:"70%"}} onClick={removeFromCart}><RemoveIcon style={{height:"10px",width:"10px",color:"#fff"}}/> </Button>
                <TextField inputProps={{style:{padding:0,height:"28px",textAlign:"center",width:"40px", fontSize:"12px",border:"0px"}}} value={count} onChange={e=>getText(e.target.value)}></TextField>
                <Button aria-label="increase" size="small" style={{height:"28px", padding:0, minWidth:"30px",borderColor:"#2b91a7",backgroundColor:"#2b91a7",opacity:"70%"}} onClick={addToCart} ><AddIcon sx={{height:"10px",color:"#fff"}}/></Button>
                <div className={styles.undercountmobile}>Кол-во шт.</div>
                
              </ButtonGroup>

            <div className={styles.divdelete}><button className={styles.delete} onClick={deleteItem}>удалить</button></div>
          </div>
          
        </div>
    );
};