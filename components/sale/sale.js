
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product from '../productcard/productcard';
import styles from './sale.module.scss';
import { useAppState } from "../layout";

const Sale = ({
    saleProduct
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
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows:windowWidth >= 1000 ?true:false,
      };

    return(
        <>
        <div className={styles.root}>
            <h1 className={styles.title}>Товары со скидкой</h1>
            <div className={styles.gooodblock}>
            {windowWidth>100&&
                <Slider {...settings} className={styles.slideslick}>
                    {saleProduct.map((product,i)=>(
                        <Product product={product} key={i} windowWidth={windowWidth}/>
                    ))}
                </Slider>}
            </div>
        </div>
        </>
        
    )
};






export default Sale;