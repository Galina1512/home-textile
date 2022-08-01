import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/productsDelSlice";

const FilterD = ({category}) =>{
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
      
        // 1) меняем класс контейнера payment на невидимый (display: none)
      
        // 2) заставляем работать {dispatch(filterCategory(category))}
    

    return (<div>
        <p onClick={()=>{dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}> 
        {category} </p>

    </div>)
}

export default FilterD;