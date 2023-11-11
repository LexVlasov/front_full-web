import styles from "./types.module.scss"
import React, {useState } from 'react';
import axios from '../../components/axios';
import NextError from 'next/error';
import Product from "../../components/productcard/productcard";
import Filter from "@/components/filter/filter";
import { useRouter } from 'next/router';
import { useAppState } from "@/components/layout";
import {LuSettings2} from 'react-icons/lu';
const ProductType = ({
    statusCode,
    data,
    dosages,
    manufactures,
    alcohol,
    fun_time,
    type
}) =>{
    // const router = useRouter();
    // const { type } = router.query;
    const { windowWidth } = useAppState();
    const [mobFilter,setMobFilter] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const pageNumbers = [];
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.value));
      };
    const [dosageNew,setDosageNew] = useState(dosages);
    const [manuf,setManuf] = useState(manufactures);
    const [alco,setAlco] = useState(alcohol);
    const [ftime,setFtime] = useState(fun_time)
    const reset = () =>{
        setDosageNew(dosages);
        setManuf(manufactures);
        setAlco(alcohol);
        setFtime(fun_time);
    };
    const filterItems = [...data]
    .filter((item)=> dosageNew.includes(item.f_dosage))
    .filter((item)=> manuf.includes(item.f_manufacturer))
    .filter((item)=> alco.includes(item.f_alcohol))
    .filter((item)=> ftime.includes(item.f_time))
    ;

    for (let i = 1; i <= Math.round(filterItems.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    let keywords = data.map((obj,i)=>obj.ie_search).reduce((a,b)=> a+ ' '+b,'');
    const currentItems = [...filterItems].slice(indexOfFirstItem, indexOfLastItem);
    return(
        <div>
        {statusCode < 200 || statusCode>= 300?
        <NextError statusCode={statusCode} /> :
        (<div>
        <title>{`${type} купить в Москве и РФ | ${type} купить недорого | ${type}`}</title>
        <div className={styles.root}>
            <meta name="description" content={`Ищете ${type} в Москве? Посетите интернет-аптеку One Pill (1pill.net)! Мы предлагаем высококачественные ${type} по доступным ценам с возможностью доставки в день заказа. При покупке от 3000 рублей скидка на доставку по Москве. Заботьтесь о своем здоровье с One Pill! Все оттенки твоих желаний... +7(800)511-31-02`} />
            <meta name="keywords" content={keywords} />
            
            <div className={styles.filtrlock}>
            <Filter
                dosage={dosages}
                dosageNew={dosageNew}
                setDosageNew={setDosageNew}
                manufacturer={manufactures}
                manuf={manuf}
                setManuf={setManuf}
                alco={alco}
                setAlco={setAlco}
                ftime={ftime}
                setFtime={setFtime}
                alcohol={alcohol}
                fun_time={fun_time}
                setMobFilter={setMobFilter}
                mobFilter={mobFilter}
                reset={reset}
                />
                {windowWidth<1000?<div className={styles.divsort}><div className={styles.sort}> Сортировка </div><LuSettings2 className={styles.iconsetting} onClick={()=> setMobFilter(mobFilter===0?1:0)}/></div>:undefined}
            </div>
            
            <div >
                <div className={styles.linegrid}>
                {currentItems.map((obj,ind)=>(
                    <Product product={obj} keynum={ind} key={ind}/>
                ))}
                </div>
                {pageNumbers.length > 1 ? (
            <>
            <button className={styles.butnext} onClick={()=>{let e = currentPage; setCurrentPage(e>1?(e-1):e)}}> <a href={windowWidth>=1000?'#header':'#under'}>&#60; Назад</a></button>
          {pageNumbers.map((number) => (
            <button key={number} value={number} onClick={handleClick} className={currentPage===number ? styles.activepage : styles.page}>
              {number}
            </button> 
          ))}
          <button className={styles.butnext} onClick={()=>{let e = currentPage; setCurrentPage(e<pageNumbers[pageNumbers.length-1]? (e+1):e)}}> <a href={windowWidth>=1000?'#header':'#under'}>Вперед &#62;</a></button> </>)    : ''} 
            </div>
            
        </div></div>)
         } 
        </div>        
    )
}
export default ProductType;

export async function getServerSideProps(context) {
    const { type } = context.query;
    let data = null;
    let statusCode = 200;
    let response
    let dosages = []
    let manufactures = []
    let alcohol = []
    let fun_time = []
    try {
        if (type) {
            response = await axios.get(`/types/${type}`);
            statusCode = response ? response.status : '';
            data =  response ? response.data : '';
            data.map((obj,i)=>{
                dosages.push(obj.f_dosage)
                manufactures.push(obj.f_manufacturer)
                alcohol.push(obj.f_alcohol)
                fun_time.push(obj.f_time)
            })
            dosages = [...new Set(dosages)];
            manufactures = [...new Set(manufactures)];
            alcohol = [...new Set(alcohol)];
            fun_time= [...new Set(fun_time)];
        }
    } catch (error) {
        console.warn(error);
        context.res.statusCode = error.response?.status || 500;
        statusCode = error.response?.status || 500;
    }
    return {
        props: {
            statusCode, 
            data,
            dosages,
            manufactures,
            alcohol,
            fun_time,
            type
        },
    };
};