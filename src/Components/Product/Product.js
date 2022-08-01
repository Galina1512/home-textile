import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Product = ({prod, more}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(<div className="pic-catalog">
        <img src={`${prod.img}`}className="img-cart1" alt="products" />
        <h4>{prod.name} </h4>
        <p className="p-price"> Цена: {prod.price} рублей </p>
        {/* <button onClick = { More } className="btn1">ПОДРОБНЕЕ</button> */}
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
    <button onClick={()=>{dispatch(addItemToCart({prod, quantity}));}} className="btn">ДОБАВИТЬ В ИЗБРАННОЕ</button>

    </div>)
}
export default Product;