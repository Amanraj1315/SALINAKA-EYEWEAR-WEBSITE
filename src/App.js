

import NavBar from './components/Navbar/NavBar';

import Product from './components/Product/Product'
import RecommendedProduct from './components/RecommendedProduct/RecommendedProduct'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    
    
      <NavBar>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/recommended' element={<RecommendedProduct/>} />
           <Route path='/product' element={<Product/>} />
           <Route path='/shop' element={<Shop/>} />
           <Route path='/signin' element={<SignIn/>}/>
           <Route path='/signup' element={<SignUp/>}/>
           <Route path='/cart' element={<Cart/>}/>
        </Routes>
        
      </NavBar>
     
     
     
        
    
    

  );
}

export default App;
