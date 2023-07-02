import React from "react";
import styles from "./fullInfo.module.scss";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system";
import  Grid  from "@mui/material/Grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import { Button, ButtonGroup, TableHead, TextField } from "@mui/material";
import { BuyButton,BuyButtonMobile } from "../../components";
import {useParams} from 'react-router-dom';
import {TopInfo, BuyButtonAndTable} from "./topinfo";



export const InfoOfGood = ({
    data,
    count,
    setCount,
    backHost
    }) => {

      const {id} = useParams();
      const [value,setValue] = React.useState(parseInt(data.default_q));
      const [flgCart,setFlgCart] = React.useState(false);
      const [selectBut,setSelectBut] = React.useState('discription');
      const [image,setImage] = React.useState(0);

      let currentPrice = data.price[0].p;
      
      for (var i = 0; i < data.price.length;i++){
        if(parseInt(data.price[i].n)<=value){
          currentPrice = data.price[i].p;
        }
      };

    let catValue = 0;
    if(count){
      count.some(obj => obj.id === id ? catValue = obj.cnt : catValue = 0);
    }
    
    const increaseItem = async ()=> {
        let oldVal = value;
        setValue(oldVal+=data.step_q);
    };

    const dicreaseItem = async () =>{
      if(value<=data.min_q){
        setValue(parseInt(data.min_q));
      } else{
        let oldVal = value;
        setValue(oldVal-=data.step_q);
      }
    };

    const getText = async (e) =>{

         if((parseInt(e)<=0)||(!e)){
          setValue(parseInt(data.min_q));
        }
        else{
          setValue(parseInt(e));
        }
        
        
    };
    const addGoodToCart = async ()=>{

      const items ={
        id,
        cnt:value,
        "maxPrice":currentPrice,
        sum: value*parseInt(currentPrice),
        product_id:data.id,
        discount:data.discount,
        kda:data.kda,
        price:data.price,
        step_q:data.step_q,
        min_q:data.min_q,
        avatar:data.info[0].avatarUrl[0],
        type:data.info[0].type,
        name:data.name,

      };
      
      let oldCount = [...count];
      let prodIn = oldCount.findIndex((p)=> p.id === items.id);
      if (prodIn===-1 && value!==0){
        
        oldCount.push(items);
        setCount(oldCount);
        setFlgCart(true)
      } else if (value!==0){

        oldCount[prodIn].cnt =value;
        oldCount[prodIn].sum = value* parseInt(currentPrice);
        oldCount[prodIn].maxPrice = currentPrice;
        setCount(oldCount);
      } else{
        setFlgCart(false)
        setCount(oldCount.filter(item=>item.id !== oldCount[prodIn].id));
      }
      catValue = value;
    };

    return(
        <>
        <Grid item xs={12} sm={12} lg={12} >
                    <Box className={styles.text}>
                    <div className={styles.analog}>{data.info[0].type}:</div>
                    {data.name}                     
                    </Box>
                  </Grid>
                  <Grid item lg={4.4} >
                    <Box sx={{Width: 270, textAlign:"center"}}>
                      <Box component="img" className={styles.imagemain}
                            src={data.info[0].avatarUrl ? `${backHost}${data.info[0].avatarUrl[image]}` : ''} />
                            <div className={styles.divimag}><Box component="img" className={styles.iamgeother}
                            src={data.info[0].avatarUrl ? `${backHost}${data.info[0].avatarUrl[0]}` : ''} alt="0" onMouseEnter ={(e)=>{setImage(parseInt(e.target.alt))}} onMouseLeave={(e)=>{setImage(parseInt(e.target.alt))}} /><Box component="img" className={styles.iamgeother}
                            src={data.info[0].avatarUrl ? `${backHost}${data.info[0].avatarUrl[1]}` : ''} alt="1" onMouseEnter ={(e)=>{setImage(parseInt(e.target.alt))}} onMouseLeave={(e)=>{setImage(parseInt(e.target.alt))}}/><Box component="img" className={styles.iamgeother}
                            src={data.info[0].avatarUrl ? `${backHost}${data.info[0].avatarUrl[2]}` : ''} alt="2" onMouseEnter ={(e)=>{setImage(parseInt(e.target.alt))}} onMouseLeave={(e)=>{setImage(parseInt(e.target.alt))}}/></div></Box> 
                  </Grid>
                   <Grid item lg={3.4} comtainer alignItems="stretch" direction="column"> 
                      <Box sx={{fontSize:"12px", fontWeight:"900", opacity:"60%", letterSpacing:"0px"}}>Цена за шт:</Box>
                      <Box  className={styles.price}>{currentPrice}</Box>
                      <Box sx={{display:"inline-block", verticalAlign:"middle", ml:"10px", mr:"10px", fontSize:"10px"}}>X</Box>  
                      <Box sx={{display:"inline-block", m:"0 auto",minHeight:"28px"}}>
                        <ButtonGroup sx={{verticalAlign:"middle", margin:"0 auto"}}>
                          <Button aria-label="reduce" style={{height:"28px", padding:0, minWidth:"30px",borderColor:"#2b91a7",backgroundColor:"#2b91a7",opacity:"70%"}} onClick={dicreaseItem}><RemoveIcon style={{height:"10px",width:"10px",color:"#fff"}}/> </Button>
                          <TextField inputProps={{style:{padding:0,height:"28px",textAlign:"center",width:"50px", fontSize:"12px",border:"0px"}}} defaultValue={value} value={(value<=0)||(!value)?parseInt(data.min_q):value} onChange={e=>getText(e.target.value)}></TextField>
                          <Button aria-label="increase" size="small" style={{height:"28px", padding:0, minWidth:"30px",borderColor:"#2b91a7",backgroundColor:"#2b91a7",opacity:"70%"}} onClick={increaseItem} ><AddIcon sx={{height:"10px",color:"#fff"}}/></Button>
                          <div className={styles.undercount}>Кол-во шт.</div>
                        </ButtonGroup>
                      </Box>
                      <TableContainer  sx={{ m:"0 auto",minHeight:"10px",padding:0, pt:5 }}>
                      <Table aria-label="customized table">
                      
                        <TableHead>
                          <TableRow>
                            <TableCell size="small"
                                      align="left" className={styles.countandpr}>Кол-во:</TableCell>
                            <TableCell size="small"
                                      align="left" className={styles.countandpr}>Цена за шт.</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.price.map((row,key)=>( 
                          <TableRow key={key} className={styles.rowsvoers}>
                            <TableCell 
                                      className={styles.pricecell}
                                      align="center"
                                      
                                      >{(data.price.length-1) === key ? 'от '+row.n : row.n+'-'+(data.price[key+1].n-1)}</TableCell>
                                      <TableCell 
                                      className={styles.pricecell}
                                      align="center"
                                      
                                      >{row.p}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      </Table>
                      </TableContainer>
                  </Grid>
                    
                  <Grid item lg={4.2} sx={{pl:2,pr:2}}>
                  <BuyButton 
                      value={value} 
                      totalSum={value*currentPrice} 
                      flgCart={flgCart} 
                      addToCart={addGoodToCart} 
                      id={id}
                      catValue={catValue}/>
                  </Grid>
                 <Grid item lg={12} sx={{pt:5}}>
                  <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button  className={selectBut === 'discription' ? styles.headselection:styles.headdisable} onClick={()=>setSelectBut("discription")}>Описание</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button  className={selectBut === 'annotation' ? styles.headselection:styles.headdisable} onClick={()=>setSelectBut("annotation")}>Аннотация</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button  className={selectBut === 'instruction' ? styles.headselection:styles.headdisable} onClick={()=>setSelectBut("instruction")}>Инструкция</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button className={selectBut === 'rewiev' ? styles.headselection:styles.headdisable} onClick={()=>setSelectBut("rewiev")}>Отзывы</button>
                    </li>
                  </ul>
                  <div className={styles.maindiv}>
                    {selectBut === 'discription' && <div >
                      <button onClick={()=>setSelectBut("annotation")} className={styles.anotherannotation}>Показать аннотацию и оновную информацию по препарату "{data.info[0].name}"</button>
                      {data.info[0].about.map((obj,key)=>(
                        <div>
                        <h5 className={styles.h5title}>{obj.title}</h5>
                      {obj.info.map((item,index)=>(
                          ( item.includes(';') ? 
                          ( <ul >{
                            item.split(';').map((li,lik)=>
                              <li>{li}</li>)}
                              </ul>)
                          
                          :     
                          (<p>{item}</p>))
                          
                      ))}
                      </div>
                      ))}

                    </div>}
                  {selectBut === 'annotation' &&  <div>
                      {data.f.map((obj,ind)=>(
                        <><h5 className={styles.h5annotation}>{obj.title}</h5>
                        <p> - {obj.text}</p></>

                      ))}
                      
                    </div>}
                    {selectBut === 'instruction' && <div >
                      <object  type="application/pdf" data={`${backHost}${data.info[0].description}`} style={{width:"100%",height:"800px"}}></object> 
                    </div>}
                    {selectBut === 'rewiev' && <div >Пока нет отзывов</div>}
                  </div>
                  </Grid>       
                  </>
    )
  };





  export const InfoOfGoodMobile = ({
    data,
    count,
    setCount,
    backHost
    }) => {

      const {id} = useParams();
      const [value,setValue] = React.useState(parseInt(data.default_q));
      const [flgCart,setFlgCart] = React.useState(false);
      const [selectBut,setSelectBut] = React.useState('discription');
      const [image,setImage] = React.useState(0);

      let currentPrice = data.price[0].p;
      
      for (var i = 0; i < data.price.length;i++){
        if(parseInt(data.price[i].n)<=value){
          currentPrice = data.price[i].p;
        }
      };

    let catValue = 0;
    if(count){
      count.some(obj => obj.id === id ? catValue = obj.cnt : catValue = 0);
    }
    
    const increaseItem = async ()=> {
        let oldVal = value;
        setValue(oldVal+=data.step_q);
    };

    const dicreaseItem = async () =>{
      if(value<=data.min_q){
        setValue(parseInt(data.min_q));
      } else{
        let oldVal = value;
        setValue(oldVal-=data.step_q);
      }
    };

    const getText = async (e) =>{

         if((parseInt(e)<=0)||(!e)){
          setValue(parseInt(data.min_q));
        }
        else{
          setValue(parseInt(e));
        }
        
        
    };
    const addGoodToCart = async ()=>{

      const items ={
        id,
        cnt:value,
        "maxPrice":currentPrice,
        sum: value*parseInt(currentPrice),
        product_id:data.id,
        discount:data.discount,
        kda:data.kda,
        price:data.price,
        step_q:data.step_q,
        min_q:data.min_q,
        avatar:data.info[0].avatarUrl[0],
        type:data.info[0].type,
        name:data.name,

      };
      
      let oldCount = [...count];
      let prodIn = oldCount.findIndex((p)=> p.id === items.id);
      if (prodIn===-1 && value!==0){
        
        oldCount.push(items);
        setCount(oldCount);
        setFlgCart(true)
      } else if (value!==0){

        oldCount[prodIn].cnt =value;
        oldCount[prodIn].sum = value* parseInt(currentPrice);
        oldCount[prodIn].maxPrice = currentPrice;
        setCount(oldCount);
      } else{
        setFlgCart(false)
        setCount(oldCount.filter(item=>item.id !== oldCount[prodIn].id));
      }
      catValue = value;
    };

    return(
        <>  
        <TopInfo data={data} backHost={backHost} setImage={setImage} image={image}/>
                   <BuyButtonAndTable 
                    data={data}
                    currentPrice={currentPrice}
                    dicreaseItem={dicreaseItem}
                    value={value}
                    getText={getText}
                    increaseItem={increaseItem}
                   />

                  <BuyButtonMobile 
                      value={value} 
                      totalSum={value*currentPrice} 
                      flgCart={flgCart} 
                      addToCart={addGoodToCart} 
                      id={id}
                      catValue={catValue}/>

                 <Grid item lg={12} sx={{pt:5}}>
                  <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button  className={selectBut === 'discription' ? styles.headselection:styles.headdisable} onClick={()=>setSelectBut("discription")}>Описание</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button  className={selectBut === 'annotation' ? styles.headselection:styles.headdisable} onClick={()=>setSelectBut("annotation")}>Аннотация</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button  className={selectBut === 'instruction' ? styles.headselection:styles.headdisable} onClick={()=>setSelectBut("instruction")}>Инструкция</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button className={selectBut === 'rewiev' ? styles.headselection:styles.headdisable} onClick={()=>setSelectBut("rewiev")}>Отзывы</button>
                    </li>
                  </ul>
                  <div className={styles.maindiv}>
                    {selectBut === 'discription' && <div >
                      <button onClick={()=>setSelectBut("annotation")} className={styles.anotherannotation}>Показать аннотацию и оновную информацию по препарату "{data.info[0].name}"</button>
                      {data.info[0].about.map((obj,key)=>(
                        <div>
                        <h5 className={styles.h5title}>{obj.title}</h5>
                      {obj.info.map((item,index)=>(
                          ( item.includes(';') ? 
                          ( <ul >{
                            item.split(';').map((li,lik)=>
                              <li>{li}</li>)}
                              </ul>)
                          
                          :     
                          (<p>{item}</p>))
                          
                      ))}
                      </div>
                      ))}

                    </div>}
                  {selectBut === 'annotation' &&  <div>
                      {data.f.map((obj,ind)=>(
                        <><h5 className={styles.h5annotation}>{obj.title}</h5>
                        <p> - {obj.text}</p></>

                      ))}
                      
                    </div>}
                    {selectBut === 'instruction' && <div >
                      <object  type="application/pdf" data={`${backHost}${data.info[0].description}`} style={{width:"100%",height:"800px"}}></object> 
                    </div>}
                    {selectBut === 'rewiev' && <div >Пока нет отзывов</div>}
                  </div>
                  </Grid>       
                  </>
    )
  };