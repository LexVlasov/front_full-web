
import {Routes, Route} from 'react-router-dom';
import Container from '@mui/material/Container';


import { Header } from './components';
import { Home, FullPost, Registration, AddPost, Login, PostsByTag, Account } from './pages';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';




function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  React.useEffect(()=>{
    dispatch(fetchAuthMe());
  },[])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<FullPost />} />
        <Route path="/tags/:tag" element={<PostsByTag />} />
        <Route path="/posts/:id/edit" element={<AddPost />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/account/:id" element={<Account />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;