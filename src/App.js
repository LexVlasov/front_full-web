
import {Routes, Route} from 'react-router-dom';
import Container from '@mui/material/Container';
import { Header, MainInfo, Middle, Footer,PreFooter, UnderMiddle,HeaderMobile } from './components';
import { Home
  , HomeMob
  , FullPost
  , GoodsByType
  ,ShoppingCart
  ,PopularGoods
  ,Sale
  ,AboutCompany
  ,Contact
  ,MakeOrder
  ,MakeOrderM
  , GoodsByTypeMobile
  ,FullPostMobile
  ,ShoppingCartMobile
  ,SaleM
  ,PopularGoodsM
  ,Refund
  ,Delivery
  ,Payments
  ,Questions
  ,Certificates
  ,Terms
   } from './pages';
import React, { useState } from 'react';
import MobileDetect from 'mobile-detect';
import {Helmet} from "react-helmet";




function App() {
  const [currentPath,setCurrentPath] = useState(window.location.pathname);
  const [count, setCount] = useState(JSON.parse(window.localStorage.getItem('countcart')) ? JSON.parse(window.localStorage.getItem('countcart'))  : []);
  const [url,setUrl] = useState(null);

  React.useEffect(()=>{

    window.localStorage.setItem('countcart',JSON.stringify(count));
  },[count])

  let md = new MobileDetect(window.navigator.userAgent);



  return (
    <>

      {md.os()!=='AndroidOS'&&md.os()!=='iOS' ?
      (currentPath.substring(1)==='checkout'? 
      (
      <Container maxWidth="md">
        <Routes>
          <Route path='/checkout' element={<MakeOrder count={count} setCount={setCount} setCurrentPath={setCurrentPath}/>}/>
        </Routes>
      </Container>
      )
      :
      (
      <>
      <Helmet>
          <title>Хотите купить дженерики Виагры дешево в Москве? У нас вы можете заказать аналоги Виагры по самым низким ценам (доставка по Москве и другим городам России)</title>
        </Helmet>
      <Header/>
      <Container maxWidth="lg" minWidth="xs">
      <MainInfo count={count}/>
      </Container>
      <Middle count={count}/>
      <UnderMiddle count={count} url={url}/>
      <Container maxWidth="lg" minWidth="xs">
        <Routes>
        
        <Route path="/" element={<Home count={count} setCount={setCount} setUrl={setUrl}/>} /> 
        <Route path="/good/:id" element={<FullPost count={count} setCount={setCount} setUrl={setUrl} url={url}/>} />
        <Route path="/types/:type" element={<GoodsByType count={count} setCount={setCount} setUrl={setUrl}/>} />
        <Route path="/cart/" element={<ShoppingCart count={count} setCount={setCount} setUrl={setUrl}/>} />
        <Route path="/popular" element={<PopularGoods count={count} setCount={setCount} setUrl={setUrl}/>}/>
        <Route path="/sale" element={<Sale count={count} setCount={setCount} setUrl={setUrl}/>}/>
        <Route path="/refund" element={<Refund setUrl={setUrl}/>}/>
        <Route path="/about" element={<AboutCompany setUrl={setUrl}/>}/>
        <Route path="/contact" element={<Contact setUrl={setUrl}/>}/>
        <Route path="/deliveryinfo" element={<Delivery setUrl={setUrl}  />}/>
        <Route path="/paymentinfo" element={<Payments setUrl={setUrl}  />}/>
        <Route path="/questions" element={<Questions setUrl={setUrl}  />}/>
        <Route path="/certificates" element={<Certificates setUrl={setUrl}  />}/>
        <Route path="/terms" element={<Terms setUrl={setUrl}  />}/>
        </Routes>
      </Container>
      <PreFooter/>
      <Footer/>
      </>
      ))
    :
      (currentPath.substring(1)==='checkout'? 
      (
      <Container maxWidth="md">
        <Routes>
          <Route path='/checkout' element={<MakeOrderM count={count} setCount={setCount} setCurrentPath={setCurrentPath}/>}/>
        </Routes>
      </Container>
      )
      :
      ( 
      <><HeaderMobile count={count}/>
      <Container>
        <Routes>
        <Route path="/" element={<HomeMob count={count} setCount={setCount} />} /> 
        <Route path="/good/:id" element={<FullPostMobile count={count} setCount={setCount}  />} />
        <Route path="/types/:type" element={<GoodsByTypeMobile count={count} setCount={setCount} />} />
        <Route path="/cart/" element={<ShoppingCartMobile count={count} setCount={setCount} />} />
        <Route path="/popular" element={<PopularGoodsM count={count} setCount={setCount} />}/>
        <Route path="/sale" element={<SaleM count={count} setCount={setCount} />}/>
        <Route path="/about" element={<AboutCompany />}/>
        <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Container>
      <PreFooter/>
      <Footer/>
      </>
      ))
      } 
      
      
    </>
  );
}

export default App;