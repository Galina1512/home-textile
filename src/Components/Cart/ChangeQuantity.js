const ChangeQuantity = ({quantity, setQuantity}) =>{
    
    const addQuantity = () =>{
        const NewQuantity = quantity + 1;
        setQuantity(NewQuantity)
    }
    const removeQuantity = () =>{
        if (quantity <=1) return;
        const  NewQuantity = quantity-1;
        setQuantity(NewQuantity)
    }
    return (<div>
        <button onClick={addQuantity} className="btn">+</button>
       <span>  {quantity}  </span>
       <button onClick={removeQuantity} className="btn">-</button>
    </div>)
}
export default ChangeQuantity;