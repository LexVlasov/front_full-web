
import {Routes, Route} from 'react-router-dom';
import Container from '@mui/material/Container';
import { Header, MainInfo, Middle, Footer,PreFooter, UnderMiddle } from './components';
import { Home
   , FullPost
  , GoodsByType
  ,ShoppingCart
  ,PopularGoods
  ,Sale
  ,AboutCompany
  ,Contact
  ,MakeOrder
  ,Refund
  ,Delivery
  ,Payments
  ,Questions
  ,Certificates
  ,Terms
   } from './pages';
import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import { fetchTypes } from "./redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [currentPath,setCurrentPath] = useState(window.location.pathname);
  const [count, setCount] = useState(JSON.parse(window.localStorage.getItem('countcart')) ? JSON.parse(window.localStorage.getItem('countcart'))  : []);
  const [url,setUrl] = useState(null);
  const dispatch = useDispatch();
  const {types} = useSelector((state)=>state.goods);
  const isTypesLoading = types.status === 'loaded';
  const hostname = window.location.href;
  const [menu,setMenu] = useState(1);
  const [group,setGroup] = useState(1);
  React.useEffect(()=>{

    window.localStorage.setItem('countcart',JSON.stringify(count));
    dispatch(fetchTypes());
  },[count,dispatch]);


  return (
    <>

     
      {currentPath.substring(1)==='checkout'? 
      (
      <Container maxWidth="md">
        <link rel="canonical" href={`${hostname}`}/>
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
      <Header 
          types={types} 
          isTypesLoading={isTypesLoading}
          menu={menu}
          setMenu={setMenu}
          group={group}
          setGroup={setGroup} />
      <link rel="canonical" href={`${hostname}`}/>
      <Container maxWidth="lg" minWidth="xs">
      <MainInfo count={count}/>
      </Container>
      <Middle count={count}/>
      <UnderMiddle count={count} url={url}/>

      <Container maxWidth="lg" minWidth="xs">
        <Routes>
        
        <Route path="/" element={<Home count={count} setCount={setCount} setUrl={setUrl} blockTypes={types} isTypesLoading={isTypesLoading}/>} /> 
        <Route path="/:type/:id" element={<FullPost count={count} setCount={setCount} setUrl={setUrl} url={url}/>} />
        <Route path="/:type" element={<GoodsByType count={count} setCount={setCount} setUrl={setUrl}/>} />
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
      <Footer
        types={types} 
        isTypesLoading={isTypesLoading}
        menu={menu}
        setMenu={setMenu}
        group={group}
        setGroup={setGroup}
      />
      </>
      )}
    
      
      
    </>
  );
}

export default App;