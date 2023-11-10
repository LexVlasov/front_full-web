import React, {useState} from "react";
import styles from "./productinfo.module.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Addremove from "../addremove/addremove";
import { useAppState } from "../layout";
import Image from 'next/image';
import Slider from 'react-slick';
import Infomenu from "./infomenu";
import Popular from "../popular/popular";

 const ProductInfo = ({data,host, popularProduct}) => {
  const { count, setCount,windowWidth } = useAppState();
  const [quant,setQuant] = useState(parseInt(data.min_q));
  const [index,setIndex] = useState(0)
  const [selectBut,setSelectBut] = useState('discription');
  const backHost = process.env.NEXT_PUBLIC_API_URL;
  const currentHREF = host;
  const NextImg = () =>{
    if(index===(data.info[0].avatarUrl.length-1)){
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  };
  const PrevImg = () =>{
    if(index===0){
      setIndex(data.info[0].avatarUrl.length-1)
    } else {
      setIndex(index - 1)
    }
  };
  let currentPrice = data.price[0].p;
  for (var i = 0; i < data.price.length;i++){
      if(parseInt(data.price[i].n)<=quant&&quant>= data.min_q&&((quant-data.min_q)%data.step_q===0)){
        currentPrice = data.price[i].p;
      }
    };

  const offers = data.price.map((obj) => {
    return {
      "@type": "Offer",
      "price": obj.p,
      "priceCurrency": "RUB",
      "availability": "InStock"
    };
  });
  const JsonLd = ({ data }) => {
    const script = {
      __html: JSON.stringify(data, null, 2), 
    };
  
    return <script
      type="application/ld+json"
      dangerouslySetInnerHTML={script}
    />;
  };
  
  const productData =
  {
    "@context": "http://schema.org",
    "@type": "Product",
    "name": `${data.name}`,
    "description": `Закажите ${data.info[0].group_type} ${data.name} в интернет-аптеке One Pill в Москве. Насладитесь качественным продуктом с быстрой доставкой в день заказа. При покупке от 3000 рублей скидка на доставку по Москве. Ваше здоровье в надежных руках с One Pill!  Все оттенки твоих желаний... +7(800)511-31-02`,
    "sku": `${data.name.slice(0,3).toUpperCase()}${data.name.replace(/\s/g,'').substring(data.name.length-6).toUpperCase()}`,
    "brand": {
      "@type": "Brand",
      "name": `${data.f_manufacturer}`
    },
    "offers": data.price.map((obj) => {
      return {
        "@type": "Offer",
        "price": obj.p,
        "priceCurrency": "RUB",
        "availability": "InStock"
      };
    }),
    "image": [
      `${backHost}${data.info[0].avatarUrl[0]}`,
      `${backHost}${data.info[0].avatarUrl[1]}`,
      `${backHost}${data.info[0].avatarUrl[2]}`
    ],
    "url": `${currentHREF}`
  };
  const settings = {
    infinite: true, // Бесконечная прокрутка
    speed:500,
    slidesToShow: 1, // Количество видимых товаров
    slidesToScroll: 1, // Количество товаров, прокручиваемых за раз
    swipeToSlide: true, // Возможность перетаскивать для прокрутки
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2800,
    cssEase: "linear",
  };
  return (
    <>
    <title>{data.ie_search.split(',')[0]} купить в Москве и РФ | {data.info[0].group_type} купить недорого | {data.ie_search} {data.name}</title>
    <meta name="keywords" content={`${data.ie_search} купить москва санкт-петербург волгоград доставка`}></meta>
    <meta name="description" content={`Закажите ${data.info[0].group_type} ${data.name} в интернет-аптеке One Pill в Москве. Насладитесь качественным продуктом с быстрой доставкой в день заказа. При покупке от 3000 рублей скидка на доставку по Москве. Ваше здоровье в надежных руках с One Pill!  Все оттенки твоих желаний... +7(800)511-31-02`} />
    <JsonLd data={productData} /> 
    <div className={styles.mainroot}>
      
    <div className={styles.root}>
      <div className={styles.blockmain}>
        <div className={styles.blockimgs}>
        {data.info[0].avatarUrl.map((img,i)=>(
          <picture key={i}>
          <Image width={800} height={800} src={`${backHost}${img}`} className={index===i ? styles.chosenimg :styles.everyimg} onClick={()=>{setIndex(i)}} alt={img}/>
          </picture>
        ))}
        </div>
        <div className={styles.blockimg}>
          <button className={styles.arrow} onClick={PrevImg}>&#8249;</button>
          <div >
          {data.discount>0? ( <div className={styles.disinfo}> <div className={styles.rasprodazha}><b>Распродажа</b></div><div className={styles.percentdiscount}><b>-{data.discount}%</b></div></div>):''}
          {windowWidth>=1000?
            <Image width={800} height={800} src={`${backHost}${data.info[0].avatarUrl[index]}`} className={styles.mainimg} alt={data.info[0].avatarUrl[index]}/>:
            <Slider {...settings} className={styles.slideslick}>
                {data.info[0].avatarUrl.map((img,ind)=>(
                  <Image width={800} height={800} src={`${backHost}${img}`} className={styles.mainimg} key={ind} alt={img}/>
                ))}
              </Slider> 
               } 
          </div>
          <button onClick={NextImg} className={styles.arrow}>&#8250;</button>
        </div>
        <div className={styles.blockbuy}>
          <div className={styles.forcustomer}>
            <div className={styles.rank}><Rating className={styles.icon}  precision={0.5} readOnly value={data.comments.length>0?Math.round(data.comments.map((el,i)=>(el.rating)).reduce((a,b)=>a+b,0)/data.comments.length,1):0} /> &#40;{data.comments.length>0?Math.round(data.comments.map((el,i)=>(el.rating)).reduce((a,b)=>a+b,0)/data.comments.length,1):0}&#41; </div>
            <div className={styles.viewsbougth}><b>{data.viewsCount}</b> <EyeIcon className={styles.icon}/> </div>
            <div className={styles.viewsbougth}><b>{data.bougthCount}</b> <ShoppingCartOutlinedIcon className={styles.icon}/></div>
          </div>
          <h1>{data.name}</h1>
          <h4>{data.info[0].type}</h4>
          <div className={styles.txtpro}><i>Цена за штуку</i></div>
          <div className={styles.priceandsale}>
          <div className={data.discount===0?styles.priceforone:styles.pricediscount}>{Math.round(currentPrice*((100-data.discount)/100),0)} </div>
          {data.discount>0&&<div className={styles.oldprice}>{currentPrice} </div>}
          </div>
          <Addremove 
          setCount={setCount} 
          count={count} 
          min_q={data.min_q}
          step_q={data.step_q}
          quant={quant}
          setQuant={setQuant}
          name = {data.name}
          discount ={data.discount}
          kda = {data.kda}
          price = {data.price}
          avatar = {data.info[0].avatarUrl[0]}
          type = {data.info[0].type}
          currentPrice = {currentPrice}
          id={data.id}
          group_type={data.info[0].group_type}
          ie_recomented={data.ie_recomented}
          />
          <table className={styles.table}>
            <thead>
                        <tr>
                          <th className={styles.countandpr}>Кол-во:</th>
                          <th className={styles.countandpr}>Цена за шт.</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.price.map((row,key)=>( 
                          <tr key={key} >
                            <td 
                                      className={styles.pricecell}
                                      align="center"
                                      
                                      >{(data.price.length-1) === key ? 'от '+row.n : row.n+'-'+(data.price[key+1].n-1)}</td>
                                      <td 
                                      className={styles.pricecell}
                                      align="center"
                                      
                                      >{row.p}</td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
        </div>
      
      </div>
      
    </div>
    <Infomenu
        selectBut = {selectBut}
        setSelectBut = {setSelectBut}
        windowWidth = {windowWidth}
        backHost = {backHost}
        data = {data}
        />

        <Popular popularProduct={popularProduct}/>
    </div>
    </>
    )
};



export default ProductInfo;