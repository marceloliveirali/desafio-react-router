import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody';
import Products from './routes/Home/Products';

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path='products' element={<Products />}>
            <Route path='computers' element={<Computers />} />
            <Route path='eletronics' element={<eletronics />} />
            <Route path='books' element={<Books />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

