import './App.css';
import Filter from './Components/Filter/Filter';
import Products from './Components/Product/Products';
import AllCategory from './Components/Filter/AllCategory';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import up from './up-24.jpg';

function Catalog () {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
  const scrolled = document.documentElement.scrollTop;
      if (scrolled > 250) setVisible(true)
      else if (scrolled <= 250) setVisible(false)
    };   

  const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    window.addEventListener('scroll', toggleVisible);


  return (<div className='catalog' >
    <div className='blok'>
    <AllCategory/>
    <Cart/>
    </div>
    <div className='blok'>
    <Products/>
    </div>
    <button className='scrollBack' onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} >
        <img src={up} className='up'/>
      </button>

  </div>)
}

export default Catalog;
