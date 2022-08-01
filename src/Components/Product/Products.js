import Product from "./Product";
import data from "../../data";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/productsSlice";


const Products = () =>{
    const selectedCategory = useSelector(getSelectedCategory);

    return ( <div className="div-map">
        {data
        .filter(item =>{
            if (selectedCategory === 'ВСЕ') return true;
            return selectedCategory === item.category;
                    })

        .map (item => 
        <Product prod = {item}/>)
        }
    </div>)
}
export default Products;