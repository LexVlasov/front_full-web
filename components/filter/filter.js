import { useState } from "react";
import styles from "./filter.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Filter =({
    dosage,
    manuf,
    manufacturer,
    setManuf,
    dosageNew,
    setDosageNew,
    alcohol,
    fun_time,
    alco,
    setAlco,
    ftime,
    setFtime,
    setMobFilter,
    mobFilter,
    reset
}) =>{

    const [select,setSelect] = useState(['d']);

    const chooseSelect = (e)=>{
        let os = [...select];
        
        if(os.includes(e)){
          os.splice(os.indexOf(e), 1);
        } else{
          os.push(e)
        }
        setSelect(os);
    };

    const handleDosage = (event) => {
        const { name, checked } = event.target;
        
        if (checked) {
          if(dosageNew.length===dosage.length){
            setDosageNew([name])
          }else{
            setDosageNew((prevDosageNew) => [...prevDosageNew, name]);
          }
          
        } else {
            if(dosageNew.length===1){
            setDosageNew(dosage)
          } else{
            setDosageNew((prevDosageNew) => prevDosageNew.filter((d) => d !== name));
          }
        }
      };
    const handleManufacture = (event) => {
        const { name, checked } = event.target;
        
        if (checked) {
          if(manuf.length===manufacturer.length){
            setManuf([name])
          }else{
            setManuf((prevManuf) => [...prevManuf, name]);
          }
          
        } else {
          if(manuf.length===1){
            setManuf(manufacturer)
          } else{
            setManuf((prevManuf) => prevManuf.filter((d) => d !== name));
          }
          
        }
      };
      // const handleAlco = (event) => {
      //   const { name, checked } = event.target;
        
      //   if (checked) {
      //     if(alco.length===alcohol.length){
      //       setManuf([name])
      //     }else{
      //       setAlco((prevAlco) => [...prevAlco, name]);
      //     }
          
      //   } else {
      //     if(alco.length===1){
      //       setManuf(alcohol)
      //     } else{
      //       setAlco((prevAlco) => prevAlco.filter((d) => d !== name));
      //     }
          
      //   }
      // }; 
      const handleTime = (event) => {
        const { name, checked } = event.target;
        
        if (checked) {
          if(ftime.length===fun_time.length){
            setFtime([name])
          }else{
            setFtime((prevFtime) => [...prevFtime, name]);
          }
          
        } else {
          if(ftime.length===1){
            setFtime(fun_time)
          } else{
            setFtime((prevFtime) => prevFtime.filter((d) => d !== name));
          }
        }
      };   
    return(
        <div className={mobFilter!==1?styles.root:styles.rootmob}>
          <div className={styles.firstdiv}><div className={styles.maintitle}>Фильтры</div><div onClick={()=>setMobFilter(0)} div className={styles.closebut}>&#9932;</div></div>
            <div className={styles.dosage} onClick={()=>chooseSelect('d')}><div className={styles.title}>Дозировка</div> <KeyboardArrowDownIcon/> </div>
            <ul className={styles.allcheckboxes}>
              
            {select.includes('d')&&dosage.map((d,i)=>(
                <li className={styles.checkboxdosage} key={i}>
                <input 
                    type="checkbox" 
                    id={d} 
                    name={d} 
                    // checked={dosageNew.includes(d)}
                    onChange={handleDosage}
                    className={styles.checkbox}/>
                    <label  className={styles.labelname}>{d}
                    </label>
                </li>
            ))}</ul>
            <div className={styles.other} onClick={()=>chooseSelect('m')}><div className={styles.title}>Производитель</div> <KeyboardArrowDownIcon/></div>
            <ul className={styles.allcheckboxes}>
            {select.includes('m')&&manufacturer.map((d,i)=>(
                <li className={styles.checkboxdosage} key={i}>
                <input 
                    type="checkbox" 
                    id={d} 
                    name={d} 
                    // checked={manuf.includes(d)}
                    onChange={handleManufacture}
                    className={styles.checkbox}/>
                    <label  className={styles.labelname}>{d}
                    <div className={styles.tooltip}>{d}</div>
                    </label>
                </li>
            ))}
            </ul>
            {/* <div className={styles.other} onClick={()=>chooseSelect('a')}><div className={styles.title}>Алкоголь</div> <KeyboardArrowDownIcon/></div>
            <ul className={styles.allcheckboxes}>
            {select.includes('a')&&alcohol.map((d,i)=>(
                <li className={styles.checkboxdosage} key={i}>
                  
                <input 
                    type="checkbox" 
                    id={d} 
                    name={d} 
                    // checked={alco.includes(d)}
                    onChange={handleAlco}
                    className={styles.checkbox}/>
                    <label  className={styles.labelname} >{d}
                    <div className={styles.tooltip}>{d}</div></label>
                </li>
            ))}</ul> */}
            <div className={styles.other} onClick={()=>chooseSelect('f')}><div className={styles.title}>Время действия</div> <KeyboardArrowDownIcon/></div>
            <ul className={styles.allcheckboxes}>
            {select.includes('f')&&fun_time.map((d,i)=>(
                <li className={styles.checkboxdosage} key={i}>
                <input 
                    type="checkbox" 
                    id={d} 
                    name={d} 
                    // checked={ftime.includes(d)}
                    onChange={handleTime}
                    className={styles.checkbox}/>
                    <label  className={styles.labelname}>{d}
                    </label>
                </li>
            ))}</ul>
            {mobFilter===1?<div className={styles.reset} onClick={()=>setMobFilter(0)}>Применить</div>:''}
            {/* <div className={styles.reset} onClick={()=>reset()}>Сбросить</div> */}
        </div>
    )
}
export default Filter;