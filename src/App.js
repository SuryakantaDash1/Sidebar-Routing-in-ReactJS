
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  return (
    <>
     <Navbar/>
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/"element={<Dashboard/>}/>
        <Route path="/dashboard"element={<Dashboard/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/comment"element={<Comment/>}/>
        <Route path="/analytics"element={<Analytics/>}/>
        <Route path="/product"element={<Product/>}/>
        <Route path="/productlist"element={<ProductList/>}/>
      </Routes>
      </Sidebar>
    </BrowserRouter>
   
   

 

   
    </>
  );
}

export default App;
