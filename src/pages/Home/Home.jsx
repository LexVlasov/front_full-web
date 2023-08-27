import React, { useState } from 'react';

import { TypesBlock, DeliveryAdvertise } from '../../components/BlockTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes,fetchPopular,fetchSale } from '../../redux/slices/posts';
import {Popular, Sales,PostByType,Reviews} from '../../components';
import axios from "../../axios";
import styles from "./home.module.scss";

export const Home = ({count,setCount,setUrl,blockTypes,isTypesLoading}) => {

  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const dispatch = useDispatch();
  
  const {allgood,types,sale} = useSelector((state) => state.goods);
  const [viagra,setViagra] = useState();
  const [sialis,setSialis] = useState();
  const [levitra,setLevitra] = useState();
  const isPostsLoading =allgood.status==='loading';
  const isTagsLoading =types.status==='loading';
  const isSaleLoading =sale.status==='loading';
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
                           
      </div>                        
</div>
  );
};

