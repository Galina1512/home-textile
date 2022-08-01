import Filter from "./Filter";

const AllCategory = () => {
    return(
        <div>
          <h2 className="h3-delivery-k">Каталог</h2>
{['ПОСТЕЛЬНОЕ БЕЛЬЕ', 'ПОДУШКИ', 'ПОЛОТЕНЦА', 'СКАТЕРТИ', 'ВСЕ'].map(category => 
    <Filter category = {category}/> 
    )}
        </div>
    )

}
export default AllCategory;