import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/layout/Footer/Footer';
import Header from './component/layout/Header/Header';
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
