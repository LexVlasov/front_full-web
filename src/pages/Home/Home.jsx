import React, { useState } from 'react';

import { TypesBlock, DeliveryAdvertise } from '../../components/BlockTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes,fetchPopular,fetchSale } from '../../redux/slices/posts';
import {Popular, Sales,PostByType,Reviews} from '../../components';
import axios from "../../axios";
import styles from "./home.module.scss";
import { useParams } from 'react-router-dom';
import girl from "../../uploads/mainInfo/girl.webp";
import bgpopup from "../../uploads/mainInfo/backgpopup.webp";

export const Home = ({count,setCount,setUrl,blockTypes,isTypesLoading}) => {

  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const dispatch = useDispatch();
  // const id = window.location.search;
  const {allgood,types,sale} = useSelector((state) => state.goods);
  const [viagra,setViagra] = useState();
  const [sialis,setSialis] = useState();
  const [levitra,setLevitra] = useState();
  const isPostsLoading =allgood.status==='loading';
  const isTagsLoading =types.status==='loading';
  const isSaleLoading =sale.status==='loading';
  const promo = window.location.search.length >0 ? window.location.search.split('=')[1] : 'NaN';
  if(promo!=='NaN'){
    document.cookie =  `promo=${promo}`
  }
  
  const discookie = document.cookie.split('; ').find((row)=>row.startsWith('promo')).split('=')[1];
  const [popup,setPopup] = useState(discookie==='TG2023'||discookie==='OP2023'?1:0)
  React.useEffect(()=>{

    dispatch(fetchPopular());
    dispatch(fetchTypes());
    dispatch(fetchSale());
    axios.get(`/types/Аналоги%20Виагры`).then(({data})=>{
      setViagra(data)
    }).catch(err =>{
      console.warn(err);
      alert('Error get post')
    })
    axios.get(`/types/Аналоги%20Сиалиса`).then(({data})=>{
      setSialis(data)
    }).catch(err =>{
      console.warn(err);
      alert('Error get post')
    })
    axios.get(`/types/Аналоги%20Левитры`).then(({data})=>{
      setLevitra(data)
    }).catch(err =>{
      console.warn(err);
      alert('Error get post')
    })
   },[dispatch]);
   setUrl(null);

   document.title = `Хотите купить дженерики Виагры дешево в Москве? У нас вы можете заказать аналоги Виагры по самым низким ценам (доставка по Москве и другим городам России)`;   
  return (
    
    <div>
      <meta name="description" content="Добро пожаловать в интернет-аптеку One Pill в Москве! У нас вы найдете широкий выбор дженериков виагры, левитры, сиалиса, БАД для здоровья, презервативов, женской виагры и многое другое. Гарантируем качественный сервис и быструю доставку в день заказа. При покупке от 3000 рублей скидка на доставку по Москве. Все оттенки твоих желаний... +7(800)511-31-02"/>

      <div className={styles.rootgrid}>
        <div className={styles.productgrid}>
            <Popular
              isPostsLoading={isPostsLoading} 
              allgood={allgood} 
              backHost={backHost}
              count={count}
              setCount={setCount}/> 
              <Sales 
              isPostsLoading={isSaleLoading} 
              allgood={sale} 
              backHost={backHost}
              count={count}
              setCount={setCount}/>
              <PostByType
              isPostsLoading={viagra?false:true} 
              allgood={viagra} 
              backHost={backHost}
              count={count}
              setCount={setCount}
              name={'Дженерики Виагры'}
              />

              <PostByType
              isPostsLoading={sialis?false:true} 
              allgood={sialis} 
              backHost={backHost}
              count={count}
              setCount={setCount}
              name={'Дженерики Сиалиса'}
              />
              <PostByType
              isPostsLoading={levitra?false:true} 
              allgood={levitra} 
              backHost={backHost}
              count={count}
              setCount={setCount}
              name={'Дженерики Левитры'}
              />
              <Reviews/>
              </div>
            <div className={styles.typesblockgrid}>
          {(blockTypes.items).map((obj,index)=> 
            (<TypesBlock title={obj.lvl1_type} items={obj.group_type} isLoading={false} key={index} />
            )
          )}
          <DeliveryAdvertise/>
        </div>        
        {popup === 1 && !isPostsLoading ? 
         <div className={styles.mainpopup}>
          <div className={styles.popup}>
          <img src={bgpopup} className={styles.imgbg}/>
          <img src={girl} className={styles.imggirl}/>
            <div className={styles.poptext}>
            <b className={styles.btext}>Скидка 5% активирована </b> Ваши покупки - выгоднее!
            </div>
            <div className={styles.buttonclose}>
            <button className={styles.buttonsubmit} onClick={()=>setPopup(0)}>К покупкам!</button>
            </div>
            
          </div>
          </div>
          : ''
          }                  
      </div>                        
</div>
  );
};

