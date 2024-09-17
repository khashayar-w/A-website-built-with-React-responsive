import './App.css';
import { BrowserRouter as Br, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/service';
import Products from './components/products';
import SignUp from './components/sign-up';

function App() {
  return (
    <>
      <Br>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='*' element={<h1>Nothing Found</h1>}/>
        </Routes>
      </Br>
    </>
  );
}

export default App;
