
import {Routes, Route} from 'react-router-dom';
import Container from '@mui/material/Container';
import { Header, MainInfo, Middle, Footer,PreFooter, UnderMiddle } from './components';
import { Home, FullPost, GoodsByType,ShoppingCart,PopularGoods,Sale,AboutCompany,Contact,MakeOrder, Registration,SiteMap } from './pages';
import React, { useState } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, fetchTypes } from './redux/slices/posts';





function App() {
  const [currentPath,setCurrentPath] = useState(window.location.pathname);
  const [count, setCount] = useState(JSON.parse(window.localStorage.getItem('countcart')) ? JSON.parse(window.localStorage.getItem('countcart'))  : []);
  const [url,setUrl] = useState(null);
  React.useEffect(()=>{
    // dispatch(fetchAuthMe());
    window.localStorage.setItem('countcart',JSON.stringify(count));
  },[count])

  const dispatch = useDispatch();
  
  const {allgood,types} = useSelector((state) => state.goods);
  const isPostsLoading =allgood.status==='loading';
  const isTagsLoading =types.status==='loading';
  React.useEffect(()=>{
    dispatch(fetchGoods());
    dispatch(fetchTypes());
    
    },[]);

  return (
    <>
   
      {currentPath.substring(1)==='checkout'|| currentPath.substring(1)==='sitemap.xml'? 
      (
      <Container maxWidth="md">
        <Routes>
          <Route path='/checkout' element={<MakeOrder count={count} setCount={setCount} setCurrentPath={setCurrentPath}/>}/>
          <Route path='/sitemap.xml' element={<SiteMap/>}/>
        </Routes>
      </Container>
      )
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
        <Route path="/test" element={<Registration/>}/>
        </Routes>
      </Container>
      <PreFooter/>
      <Footer/>
      </>
      )}
      
      
    </>
  );
}

export default App;