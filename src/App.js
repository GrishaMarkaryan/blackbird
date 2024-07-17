
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}> Shop </Route>
          <Route path='/men' element={<ShopCategory category='men'/>}/> 
          <Route path='/women' element={<ShopCategory category='women'/>}/> 
          <Route path='/kids' element={<ShopCategory category='kid'/>}/> 
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>                    
          </Route>
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;