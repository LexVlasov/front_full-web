import React from "react";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Skeleton from "@mui/material/Skeleton";
import styles from "./TypesBlock.module.scss";
import Delivery from "../../uploads/mainInfo/delivery.jpg";
import OneCall from "../../uploads/mainInfo/onecall.jpg";
import Adv from "../../uploads/mainInfo/advertise.jpg";
import CallDOne from "../../uploads/mainInfo/calldone.jpg";
import { fetchOneClick } from "../../redux/slices/makeorder";
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
export const TypesBlock = ({ title,items, isLoading = true }) => {

  return (
    <div className={styles.roottypes}>
      <h4 className={styles.main}>&#8801; {title}</h4>
      
      <ul className={styles.root}>
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <a
            className={styles.a}
            href={`/${name}`}
          >
            <li key={i} className={styles.li}>                
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <>
                  <div className={styles.div}>{name} <ChevronRightIcon /></div> 
                  </>
                )}
            </li>
          </a>
        ))}
      </ul>
</div>

  );
};

export const DeliveryAdvertise = () =>{

  const [name,setName] = React.useState();
  const [phoneNumber,setPhoneNumber] = React.useState();
  const [oneClick,setOneClick] =React.useState();
  const [call,setCall] =React.useState('0');
  const dispatch = useDispatch();

  const handleNameChange =(e)=>{
    setName(e.target.value);
    let newOneClick = [];
    const newData = {
      auth:process.env.REACT_APP_API_KEY ,
      shop_id:31 ,
      phone:0,
      name:e.target.value,
    };
    newOneClick.push(newData);
    setOneClick(newOneClick);
  }

  const handlePhoneNumberChange =(e)=>{
    setPhoneNumber(e.target.value);
    let newOneClick = [...oneClick];
    newOneClick[0].phone = e.target.value;
    setOneClick(newOneClick);
  };

  const handleSubmit= async (e)=>{
    try{
      e.preventDefault();
      const data = await dispatch(fetchOneClick(oneClick));
      if(!data.payload){
        alert('Error in make order!');
      }else{
        setCall(data.payload);
      }
    }catch(err){
      console.warn(err);
      alert('Не удалось заказать звонок')
    }
    
  }

  return(
    <>
    <div className={styles.delivery}>
    
      <img src={Delivery} style={{position:"absolute",opacity:"0.9",width:"100%", height:"300px"}} alt="Курьерская доставка по Москве в день заказа"></img>
      <div className={styles.txtdelivery}><b>БЫСТРАЯ ДОСТАВКА</b></div>
      <div className={styles.txtmsc}>Курьерская доставка по <b>Москве</b> в день заказа.</div>
      <div className={styles.txtmsc}>Доставка во все города Почтой России (1 класс) или EMS.</div>
    </div>

    <div className={styles.onecall}>
      {call==='0' ?
      <>
    <img src={OneCall} className={styles.onecall_img} alt="Остались вопросы?"></img>
      <div className={styles.callhead}><b>Остались вопросы?</b></div>
      <form className={styles.forminput} onSubmit={handleSubmit}>
      <div className={styles.input_group}>
        <input type="text" id="name" className={styles.input_group_input} name="input" value={name} onChange={handleNameChange} required/>
        <label for="name" className={styles.input_group_label}>Укажите имя</label>
      </div>
      <div className={styles.input_group}><input type="tel" id="phone" className={styles.input_group_input} name="input" value={phoneNumber} onChange={handlePhoneNumberChange} required/> <label for="phone" className={styles.input_group_label}>+74951234567</label> </div>
      <div className={styles.txtcall}>Нажимая на «Заказать звонок», вы подтверждаете, что ознакомились с <a href="/terms">Пользовательским соглашением</a></div>
      <button className={styles.submit} type="submit">Заказать звонок</button>
      </form></>
      :
      <>
      <img src={CallDOne} className={styles.onecall_img} alt="Звонок заказан"></img>
      <div className={styles.calldone_text}><b>Звонок заказан!</b></div>
      <div className={styles.calldone_text1}><b>В ближайшее время наш менеджер свяжется с Вами</b></div>
      </>
      }

    </div>
    <div className={styles.adv}>
      <a href="/Презервативы/Durex%20Classic">
        <img src={Adv} className={styles.adv_image} alt="Добавьте ПРЕЗЕРВАТИВ в свой заказ" />
    <div className={styles.adv_text}>Добавьте <b style={{color:"#316bb1"}}>ПРЕЗЕРВАТИВ</b> в свой заказ</div>
    </a>
    </div>



    </>
  )
}


export const TypesBlockMbile =({
  menu,
  types,
  isTypesLoading,
  group,
  ChooseType,
  LinkTo
})=>{
  return(
    <div className={styles.menum} id="header">
            {menu === 2 ? 
                <ul className={styles.ulmobile}>
                    {types.map((obj,ind)=>(
                        (isTypesLoading ? 
                            (
                                group === 1 ? <li className={styles.limobile} key={ind} onClick={()=>ChooseType(obj.lvl1_type)}>{obj.lvl1_type}</li>
                            :
                            (group===obj.lvl1_type?
                                obj.group_type.map((gr,i)=>(<li className={styles.limobile} key={i}>
                                    <Link to={`/${gr}`} onClick={LinkTo}>
                                        <button className={styles.typemobilet}>{gr}</button>
                                        </Link>
                                </li>)) : '')
                            )
                            : ''
                            )
                    ))}
                </ul>
            :''}
            </div>
  )
}