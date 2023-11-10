
import  { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product from '../productcard/productcard';
import styles from './popular.module.scss';
import { useAppState } from "../layout";

const Popular = ({
    popularProduct
}) =>{
    const { windowWidth } = useAppState();
    const toShow = windowWidth >= 1000 ? 4 : ~~(windowWidth/170);

    const settings = {
        infinite: true, // Бесконечная прокрутка
        speed:500,
        slidesToShow: toShow, // Количество видимых товаров
        slidesToScroll: 1, // Количество товаров, прокручиваемых за раз
        swipeToSlide: true, // Возможность перетаскивать для прокрутки
        autoplay: true,
        autoplaySpeed: 2800,
        cssEase: "linear",
        arrows: windowWidth >= 1000 ?true:false,
      };
    return(
        <>
        <div className={styles.root}>
            <h1 className={styles.title}>Популярные товары</h1>
            <div className={styles.gooodblock}>
                {windowWidth>100&&
                <Slider {...settings} className={styles.slideslick}>
                    {popularProduct.map((product,i)=>(
                        <Product product={product} key={i} windowWidth={windowWidth}/>
                    ))}
                </Slider>}
            </div>
        </div>
        </>
        
    )
};






export default Popular;