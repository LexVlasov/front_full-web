import { useState } from "react";
import styles from "./productinfo.module.scss"
import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from "react-icons/md"
const Infomenu = ({
    selectBut,
    setSelectBut,
    windowWidth,
    backHost,
    data
}) =>{
    const [latChose,setLAstShose] = useState("discription");
    return(
        <div className={styles.allinfo}>
    <ul id="myTab" role="tablist" className={styles.ultab}>
                    <li  role="presentation" className={styles.lievery} key={1}>
                      <button  className={selectBut === 'discription'||latChose==='discription' ? styles.headselectionfirst:styles.headdisablefirst} onClick={()=>{setSelectBut(selectBut==="discription"&&windowWidth<1000?'':"discription");setLAstShose('discription')}}><div className={styles.div1} >Описание</div>{selectBut!=="discription"?<div className={styles.div2}><MdOutlineKeyboardArrowDown/></div>:<div className={styles.div2}><MdOutlineKeyboardArrowUp/></div>}</button>
                      {selectBut === 'discription' && <div className={styles.maindivmob}>
                      <button onClick={()=>setSelectBut("annotation")} className={styles.anotherannotation}>Показать аннотацию и оcновную информацию по препарату &quot;{data.info[0].name}&quot; </button>
                      {data.info[0].about.map((obj,key)=>(
                        <div key={key}>
                        <h3 className={styles.h5title}>{obj.title}</h3>
                      {obj.info.map((item,index)=>(
                          ( item.includes(';') ? 
                          ( <ul style={{margin:"20px 40px 20px 40px"}} key={index}>{
                            item.split(';').map((li,lik)=>
                              <li key={lik} className={styles.litext}>{li}</li>)}
                              </ul>)
                          
                          :     
                          (<p className={styles.ptext} key={index}>{item}</p>))
                          
                      ))}
                      </div>
                      ))}

                    </div>}
                    </li>
                    <li  role="presentation" className={styles.lievery} key={2}>
                      <button  className={selectBut === 'annotation'||latChose==='annotation' ? styles.headselection:styles.headdisable} onClick={()=>{setSelectBut(selectBut==="annotation"&&windowWidth<1000?'':"annotation");setLAstShose("annotation");}}><div className={styles.div1} >Аннотация</div> {selectBut!=="annotation"?<div className={styles.div2}><MdOutlineKeyboardArrowDown/></div>:<div className={styles.div2}><MdOutlineKeyboardArrowUp/></div>}</button>
                      {selectBut === 'annotation' &&  <div className={styles.maindivmob}>
                      {data.f.map((obj,ind)=>(
                        <div key={ind}><h3 className={styles.h5title}>{obj.title}</h3>
                        <p  className={styles.ptext}> - {obj.text}</p></div>

                      ))}
                      
                    </div>}
                    </li>
                    <li  role="presentation" className={styles.lievery} key={3}>
                      <button  className={selectBut === 'instruction'||latChose==='instruction'? styles.headselection:styles.headdisable} onClick={()=>{setSelectBut(selectBut==="instruction"&&windowWidth<1000?'':"instruction");setLAstShose("instruction");}}> <div className={styles.div1} >Инструкция</div> {selectBut!=="instruction"?<div className={styles.div2}><MdOutlineKeyboardArrowDown/></div>:<div className={styles.div2}><MdOutlineKeyboardArrowUp/></div>}</button>
                      {selectBut === 'instruction' && <div className={styles.maindivmob}>
                      <object  type="application/pdf" data={`${backHost}${data.info[0].description}`} style={{width:"100%",height:"800px"}}></object> 
                    </div>}
                    </li>
                    <li  role="presentation" className={styles.lievery} key={4}>
                      <button className={selectBut === 'rewiev'||latChose==='rewiev' ? styles.headselection:styles.headdisable} onClick={()=>{setSelectBut(selectBut==="rewiev"&&windowWidth<1000?'':"rewiev");setLAstShose("rewiev");}}><div className={styles.div1} >Отзывы</div> {selectBut!=="rewiev"?<div className={styles.div2}><MdOutlineKeyboardArrowDown/></div>:<div className={styles.div2}><MdOutlineKeyboardArrowUp/></div>}</button>
                      {selectBut === 'rewiev' && <div className={styles.maindivmob}>Пока нет отзывов</div>}
                    </li>
                  </ul>
                  <div className={styles.maindiv}>
                    {selectBut === 'discription' && <div >
                      <button onClick={()=>setSelectBut("annotation")} className={styles.anotherannotation}>Показать аннотацию и оcновную информацию по препарату &quot;{data.info[0].name}&quot;</button>
                      {data.info[0].about.map((obj,key)=>(
                        <div key={key}>
                        <h3 className={styles.h5title}>{obj.title}</h3>
                      {obj.info.map((item,index)=>(
                          ( item.includes(';') ? 
                          ( <ul style={{margin:"20px 40px 20px 40px"}} key={index}>{
                            item.split(';').map((li,lik)=>
                              <li key={lik} className={styles.litext}>{li}</li>)}
                              </ul>)
                          
                          :     
                          (<p className={styles.ptext} key={index}>{item}</p>))
                          
                      ))}
                      </div>
                      ))}

                    </div>}
                  {selectBut === 'annotation' &&  <div>
                      {data.f.map((obj,ind)=>(
                        <><h3 className={styles.h5title}>{obj.title}</h3>
                        <p key={ind} className={styles.ptext}> - {obj.text}</p></>

                      ))}
                      
                    </div>}
                    {selectBut === 'instruction' && <div >
                      <iframe frameborder="0" src={`${backHost}${data.info[0].description}`} className={styles.instruct}/>
                    </div>}
                    {selectBut === 'rewiev' && <div >Пока нет отзывов</div>}
                  </div>
    </div>
    )
};

export default Infomenu;