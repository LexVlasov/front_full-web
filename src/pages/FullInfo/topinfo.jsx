import styles from "./fullInfo.module.scss";
import  Grid  from "@mui/material/Grid";
import { Box } from "@mui/system";
import { Button, ButtonGroup, TableHead, TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export const TopInfo =({data,backHost,setImage,image})=>{

    return(
        <>
        <Grid item xs={12} sm={12} lg={12} >
                    <Box className={styles.textmobile}>
                    <div className={styles.analogmobile}>{data.info[0].type}:</div>
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
        </>
    )
};


export const BuyButtonAndTable = ({
    data
    ,currentPrice
    ,dicreaseItem
    ,value
    ,getText
    ,increaseItem
}) =>{


    return(
        <>
            <div > 
                      <div className={styles.pricemobileall}>
                      <div className={styles.priceforonetextmobile}><b>Цена за шт:</b></div>
                      <span  className={styles.price}>{currentPrice}</span>
                      <span className={styles.xmobile}>X</span>  
                      <span >
                        <ButtonGroup sx={{verticalAlign:"middle", margin:"0 auto"}}>
                          <Button aria-label="reduce" style={{height:"28px", padding:0, minWidth:"30px",borderColor:"#2b91a7",backgroundColor:"#2b91a7",opacity:"70%"}} onClick={dicreaseItem}><RemoveIcon style={{height:"10px",width:"10px",color:"#fff"}}/> </Button>
                          <TextField inputProps={{style:{padding:0,height:"28px",textAlign:"center",width:"50px", fontSize:"12px",border:"0px"}}} defaultValue={value} value={(value<=0)||(!value)?parseInt(data.min_q):value} onChange={e=>getText(e.target.value)}></TextField>
                          <Button aria-label="increase" size="small" style={{height:"28px", padding:0, minWidth:"30px",borderColor:"#2b91a7",backgroundColor:"#2b91a7",opacity:"70%"}} onClick={increaseItem} ><AddIcon sx={{height:"10px",color:"#fff"}}/></Button>
                          <div className={styles.undercount}>Кол-во шт.</div>
                        </ButtonGroup>
                      </span>
                      </div>
                      <TableContainer  sx={{ m:"0 auto",minHeight:"10px",padding:0,pt:2 }}>
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
                  </div>
        </>
    )
}