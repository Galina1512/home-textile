import data from "../../data";
import { addItemToCart, removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItemF = ({cartItemF}) => {
const products = data.find(item => item.id === cartItemF.prodId)
const dispatch = useDispatch();

return(<div>
    <div className="cart-favor">
    <p className="chek-name">{products.name} </p>
        <div className="image-favor">
        <img src={products.img} alt='' className="image"/>
        </div>
        <p className="chek-desk">{products.description} </p>
        <p className="chek">количество {cartItemF.quantity } </p>
        <p className="chek">Цена: {products.price * cartItemF.quantity} руб.</p>
    
        <button onClick = {() => dispatch(removeItemFromCart({cartItemId: cartItemF.id})) } className="btn-delete">
        УДАЛИТЬ
        </button>
        </div>
    </div>
    )
}
export default CartItemF;