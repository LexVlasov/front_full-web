
import {Routes, Route} from 'react-router-dom';
import Container from '@mui/material/Container';
import { Header, MainInfo, Middle, Footer,PreFooter, UnderMiddle } from './components';
import { Home, FullPost, GoodsByType,ShoppingCart,PopularGoods,Sale,AboutCompany,Contact,MakeOrder } from './pages';
import React, { useState } from 'react';






function App() {
  const currentPath = window.location.pathname;
  console.log();
  const [count, setCount] = useState(JSON.parse(window.localStorage.getItem('countcart')) ? JSON.parse(window.localStorage.getItem('countcart'))  : []);
  const [url,setUrl] = useState(null);
  React.useEffect(()=>{
    // dispatch(fetchAuthMe());
    window.localStorage.setItem('countcart',JSON.stringify(count));
  },[count])

  return (
    <>
   
      {currentPath.substring(1)==='checkout' ? 
      (<Container maxWidth="md">
        <Routes>
          <Route path='/checkout' element={<MakeOrder count={count}/>}/>
        </Routes>
      </Container>)
      :
      (
      <><Header/>
      <Container maxWidth="lg">
      <MainInfo count={count}/>
      </Container>
      <Middle count={count}/>
      <UnderMiddle count={count} url={url}/>
      <Container maxWidth="lg">
        <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} setUrl={setUrl}/>} /> 
        <Route path="/good/:id" element={<FullPost count={count} setCount={setCount} setUrl={setUrl} url={url}/>} />
        <Route path="/types/:type" element={<GoodsByType count={count} setCount={setCount} setUrl={setUrl}/>} />
        <Route path="/cart/" element={<ShoppingCart count={count} setCount={setCount} setUrl={setUrl}/>} />
        <Route path="/popular" element={<PopularGoods count={count} setCount={setCount} setUrl={setUrl}/>}/>
        <Route path="/sale" element={<Sale count={count} setCount={setCount} setUrl={setUrl}/>}/>
        <Route path="/about" element={<AboutCompany setUrl={setUrl}/>}/>
        <Route path="/contact" element={<Contact setUrl={setUrl}/>}/>
        </Routes>
      </Container>
      <PreFooter/>
      <Footer/>
      </>)}
      
      
    </>
  );
}

export default App;