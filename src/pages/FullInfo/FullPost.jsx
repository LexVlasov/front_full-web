import React from "react";
import {useParams} from 'react-router-dom';
import styles from "./fullInfo.module.scss"
import { Post } from "../../components/Post";
import axios from "../../axios";
import { fetchTypes } from '../../redux/slices/posts';
import { useDispatch, useSelector } from "react-redux";
import { TypesBlock,DeliveryAdvertise } from "../../components/BlockTypes";
import {InfoOfGood,} from "./infoOfGood";
import { OneClick } from "../../components";

export const FullPost = ({count,setCount, setUrl}) => {

  const {types} = useSelector((state) => state.goods);
  const backHost = 
  process.env.REACT_APP_API_URL?process.env.REACT_APP_API_URL:
  'http://localhost:4444';
  const [data,setData] = React.useState();
  const [oneClick,setOneClick] = React.useState(0);
  const [isLoading,setLoading] = React.useState(true);
  const {id} = useParams();
  const dispatch = useDispatch();
  const isTagsLoading =types.status==='loading';
  React.useEffect(()=>{
    axios.get(`/good/${id}`).then(res=>{
      setData(res.data);
      setLoading(false);
    }).catch((err)=>{
      console.warn(err);
      alert('Error in getting post');
    });
    
    dispatch(fetchTypes());
  },[dispatch,id]);
  
  if(data)
  {setUrl(String(data.info[0].group_type)+'('+String(data.info[0].group_type) + '|'+String(data.info[0].group_type)+'/'+String(id) +'('+String(data.name));
  document.title = `${data.ie_search.split(',')[0]} купить в Москве и РФ | ${data.info[0].group_type} купить недорого | ${data.ie_search} ${data.name}`; }
  if(isLoading){
    return <Post isLoading={isLoading} isFullPost/>;
  }
  // const canonical = data.alias === 0 ? "canonical" :'';
  // const hostname = window.location.origin;
  let offers = []
  if(!isLoading){data.price.map((obj,i)=>{
    offers.push(
      `{
        "@type": "Offer",
        "price": ${obj.p},
        "priceCurrency": "RUB",
        "availability": "InStock"
      }`
    )
  })};
  return (


  

       <div className={styles.rootgriffull}>
          
          <div className={styles.rootproductgrid}>
          <meta name="keywords" content={`${data.ie_search} купить москва санкт-петербург волгоград доставка`}></meta>
          <meta name="description" content={`Закажите ${data.info[0].group_type} ${id} в интернет-аптеке One Pill в Москве. Насладитесь качественным продуктом с быстрой доставкой в день заказа. При покупке от 3000 рублей скидка на доставку по Москве. Ваше здоровье в надежных руках с One Pill!  Все оттенки твоих желаний... +7(800)511-31-02`} />
          {isLoading?'':
           <script type="application/ld+json">
          {`
             {
              "@context": "http://schema.org",
              "@type": "Product",
              "name": "${id}",
              "description": "Закажите ${data.info[0].group_type} ${id} в интернет-аптеке One Pill в Москве. Насладитесь качественным продуктом с быстрой доставкой в день заказа. При покупке от 3000 рублей скидка на доставку по Москве. Ваше здоровье в надежных руках с One Pill!  Все оттенки твоих желаний... +7(800)511-31-02",
              "sku": "${id.slice(0,3).toUpperCase()}${id.replace(/\s/g,'').substring(id.length-6).toUpperCase()}",
              "brand": {
                "@type": "Brand",
                "name": "${id}"
              },
              "offers": [${offers}],
              "image": [
                "${backHost}${data.info[0].avatarUrl[0]}",
                "${backHost}${data.info[0].avatarUrl[1]}",
                "${backHost}${data.info[0].avatarUrl[2]}"
              ],
              "url": "${window.location.href}"
            }
          `}
          </script> 
        }
          {isLoading?'':
          <InfoOfGood 
            data={data}
            count={count}
            setCount={setCount}
            backHost={backHost}
            oneClick={oneClick}
            setOneClick={setOneClick}
          />}
          <OneClick  
              oneClick={oneClick}            
              setOneClick={setOneClick}
              />
          </div> 
          <div  className={styles.typesblockgrid} >
          {(isTagsLoading?[...Array(5)]:types.items).map((obj,index)=> isTagsLoading ? '' :
            (<TypesBlock title={obj.lvl1_type} items={obj.group_type} isLoading={isTagsLoading} key={index} />)
          )}
          <DeliveryAdvertise/>
          </div>            
       </div>
                      

      

  );
};



