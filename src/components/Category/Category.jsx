import "./Category.scss";
import Products from "../Products/Products"

const Category = () =>{
    return (
<div className="category-main-contain">
    <div className="layout">
        <div className="category-tittle">Category Title</div>
        <Products innerPage= {true}/>
    </div>
    
</div>
    );
};

export default Category;