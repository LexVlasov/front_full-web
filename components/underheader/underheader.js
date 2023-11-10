import React,{useState,useEffect} from 'react';
import styles from "./underheader.module.scss";
import Link from 'next/link';
import {BsCart3, BsSearch} from "react-icons/bs";
import { useAppState } from "../layout";
import axios from '../axios';
import Dropdown from '../dropdown/dropdown';
import Filter from '../filter/filter';
import Image from 'next/image';

 const UnderHeader = () => {
    const { count, setCount, } = useAppState();
    const [search,setSearch] = useState('');
    const [order,setOrder] = useState();
    const  [isLoad,setIsLoad] = useState(false);
    const [burger,setBurger] = useState(0);
    const [groups,setGroups] = useState(0);

    useEffect(()=>{
      axios.get(`/searchproduct`).then(({data})=>{
        setOrder(data);
        setIsLoad(true);
      }).catch(err=>{
          console.log(err);
      })
    },[])
    const handleSubmit= async (e)=>{
      try{
        e.preventDefault();

      }catch(err){
        console.warn(err);
        alert('Заказ с таким номером ненайден')
      }
    };
    const filterData = isLoad?order.filter(item => item.name.toLowerCase().includes(search.toLowerCase())):[];
    return (
        <div id='under'>
      <div className={styles.root}>
        <div className={styles.burger} onClick={()=>setBurger(burger===0?1:0)}> {burger===1?<span>&#9932;</span>:<span> &#9776;</span>}</div>
        <div className={styles.maindiv}>
            <Link href="/">
                <Image width={800} height={800} src="/upload/logo.webp" alt='One Pill' className={styles.image}/>
                <div className={styles.head}>One Pill</div>
                <div className={styles.subhead}>Все оттенки твоих желаний...</div>
            </Link>
        </div>
        <div className={styles.search}>
            <form className={styles.forminput} onSubmit={handleSubmit}>
              <div className={styles.input_group}>
              <button  type="submit" className={styles.submit}><BsSearch /></button>
            <input type="text" id="searchunderhead" className={styles.input_group_input} placeholder='Введите название продукта' name="input" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </div> 
            </form>
            {search.length>0&&(<ul className={search.length>0 ? styles.droparrayactive : styles.droparray} >
              {filterData.map((li,ind) => (
                <Link href={`/preparations/${li.group_type}/${li.name}`} key={ind}><li   className={styles.lidroparray} onClick={()=>setSearch('')}>{li.name}</li></Link>
              ))}
              </ul>)}
        </div>
        <div className={styles.cart}>
          <Link href='/cart_items'>
            <span className={styles.iconcart}>
              <BsCart3 className={styles.iconcart}/>
              <span className={styles.countitem}>{count&&count.length}</span>

              </span>
              </Link>
        </div>
</div>
{<div className={burger===1?styles.burgermenuactive:styles.burgermenudisable}> <Dropdown/></div>}

</div>
    )
};

export default UnderHeader;