import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product.Jsx';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<shopCategory category="men"/>}/>
        <Route path='/mens' element={<shopCategory category="women"/>}/>
        <Route path='/kids' element={<shopCategory category="kid"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path='productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
