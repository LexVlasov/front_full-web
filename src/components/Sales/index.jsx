import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { Post,PostMobile } from '../Post';
import styles from '../Popular/popular.module.scss';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper'; 
import { useTheme } from '@mui/material/styles';

export const Sales = ({
    isPostsLoading,
    allgood,
    backHost,
    count,
    setCount,
})=>{
  
  const sortallGoods = [...allgood.items].sort((a, b) => parseInt(b.bougthCount) - parseInt(a.bougthCount)).slice(0,3);
    return(
        <>
        <div className={styles.head}>
        <h4>Распродажа</h4>
        <a className={styles.atext} href="/sale">Каталог препаратов</a>
        </div>
        {(isPostsLoading?[...Array(5)]:sortallGoods).map((obj,index) => isPostsLoading ? (
            <Grid item xs={6} lg={4}>  
              <Post key={index} isLoading={true}/>
              </Grid> 
            ) : (
              
              <Grid item xs={6} lg={4} styles={{paddingBottom:"20px"}}> 
              <Post 
               key={index}
               id={obj._id}
               title={obj.name}
               imageUrl={obj.info[0].avatarUrl[0] ? `${backHost}${obj.info[0].avatarUrl[0]}`:''} 
               price={obj.price[sortallGoods[0].price.length-1].p}
               viewsCount={obj.viewsCount}
               count={count} setCount={setCount}
               maxPrice={obj.price[0].p}
               buysCount={obj.bougthCount}
              />
              </Grid> 
            ))}

        </>
    )
};


export const SalesM = ({
  isPostsLoading,
  allgood,
  backHost,
  count,
  setCount,
})=>{

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const [activeStep, setActiveStep] = React.useState(0);
const maxSteps = parseInt(10);
const sortallGoods = [...allgood.items].sort((a, b) => parseInt(b.bougthCount) - parseInt(a.bougthCount)).slice(0,maxSteps);
const theme = useTheme();

const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

const handleStepChange = (obj) => {
  setActiveStep(obj);
};

  return(
      <>
      <div className={styles.head}>
      <h4>Распродажа</h4>
      <a className={styles.atext} href="/sale">Каталог препаратов</a>
      </div>
      <Box sx={{ maxWidth: 360, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
              {(isPostsLoading?[...Array(5)]:sortallGoods).map((obj,index) => isPostsLoading ? (
          <Grid item xs={6} lg={4} >  
            <Post key={index} isLoading={true}/>
            </Grid> 
          ) : (
            

            <PostMobile
              key={index}
              id={obj._id}
              title={obj.name}
              imageUrl={obj.info[0].avatarUrl[0] ? `${backHost}${obj.info[0].avatarUrl[0]}`:''} 
              price={obj.price[sortallGoods[0].price.length-1].p}
              viewsCount={obj.viewsCount}
              count={count} setCount={setCount}
              maxPrice={obj.price[0].p}
              buysCount={obj.bougthCount}
            />

          ))}

    </AutoPlaySwipeableViews>
    <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      </Box>

      </>
  )
}