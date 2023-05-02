import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Products from './pages/products/Products';
import ProductDetails from './pages/products/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/products' Component={Products} />
        <Route path='/products/:productId' Component={ProductDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
