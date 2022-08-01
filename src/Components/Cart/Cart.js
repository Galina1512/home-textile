import { useDispatch, useSelector } from 'react-redux';
import {getCartItems, getTotalPrice, removeAll} from '../../redux/cartSlice';
import CartItem from './CartItem';
import { useState } from 'react';


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();

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

    return (<div>
<h3 className='h3-delivery-is'> ИЗБРАННОЕ</h3>
{cartItems.map(cartItem => <CartItem cartItem = {cartItem}/>)}
<button onClick={() => {dispatch(removeAll());}} className='btn btn1' 
onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} >ОЧИСТИТЬ ИЗБРАННОЕ</button>
<h3> ИТОГО: {totalPrice} руб.</h3>
</div>
    )
}
export default Cart;