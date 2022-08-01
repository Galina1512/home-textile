import { useDispatch, useSelector } from 'react-redux';

import {getCartItems, getTotalPrice, removeAll} from '../../redux/cartSlice';
import CartItemF from './CartItemF';

const CartFavor = () => {
    const cartItemsF = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (<div>
        
<h3 className='h3-favor'> ИЗБРАННОЕ</h3>
{totalPrice === 0 ? <h4 className='h4-favor'>Вы ещё ничего не добавили в Избранное. Вернитеcь во вкладку "Каталог". </h4> :
<div>
<div className='one-product'>
{cartItemsF.map(cartItemF => <CartItemF cartItemF = {cartItemF}/>)}
</div>
<h3 className='h3-favor'> ИТОГО: {totalPrice} руб.</h3>
</div>}
</div>
    )
}
export default CartFavor;