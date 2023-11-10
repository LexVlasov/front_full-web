import styles from "./dropdown.module.scss";
import axios from '../axios';
import { useState,useEffect } from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useAppState } from "../layout";

const Dropdown = ({
})=> {
    const {windowWidth } = useAppState();
    const [groups,setGroups] = useState(0);
    const [mobile,setMobile] = useState(0);

    useEffect(()=>{
        axios.get(`/groups`).then(({data})=>{
            setGroups(data)
        }).catch(err=>{
            console.log(err);
        })
    },[])

    return(
        <>
        <div className={styles.root}>
        <nav>
            {windowWidth>=1000?
            <ul className={styles.ul}>
               {groups!==0 ? groups.map((obj,i)=>(
                <li key={i} className={styles.listyle}>
                    {obj.lvl1_type} <KeyboardArrowDownIcon className={styles.arrow}/>
                   <ul className={styles.droparray}>
                    {obj.group_type.map((o,ind)=>(
                        <li className={styles.lidroparray} key={ind}><a href={`/preparations/${o}`} >{o}</a></li>
                    ))}
                   </ul>
                    </li>
                    
               )):''}
            </ul>:
            <ul className={styles.ul}>
            {groups!==0 ? groups.map((obj,i)=>(
             <li key={i} className={styles.listyle} onClick={()=>setMobile(mobile===obj.lvl1_type?0:obj.lvl1_type)}>
                 <div className={obj.lvl1_type!=='Для мужчин'?styles.mainli:styles.mainliwot}> <div className={styles.divname}>{obj.lvl1_type}</div><div> <KeyboardArrowDownIcon className={styles.arrow}/></div></div>
                {mobile===obj.lvl1_type&&<ul className={styles.listmobile}>
                 {obj.group_type.map((o,ind)=>(
                     <li className={styles.lidroparray} key={ind}><a href={`/preparations/${o}`} >{o}</a></li>
                 ))}
                </ul>}
                 </li>
                 
            )):''}
            </ul>
            }
        </nav>
        </div>
        </>
    )
};


export default Dropdown;