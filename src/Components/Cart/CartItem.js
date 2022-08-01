import data from "../../data";
import { addItemToCart, removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {
const products = data.find(item => item.id === cartItem.prodId)
const dispatch = useDispatch();

return(<div>
    <div className="cart-chek">
        <p className="chek-name">{products.name} </p>
        <p className="chek">количество {cartItem.quantity } </p>
        <p className="chek">Цена: {products.price * cartItem.quantity} руб.</p>
    
        <button onClick = {() => dispatch(removeItemFromCart({cartItemId: cartItem.id})) } className="btn-delete">
        УДАЛИТЬ
        </button>
        </div>
    </div>
    )
}
export default CartItem;