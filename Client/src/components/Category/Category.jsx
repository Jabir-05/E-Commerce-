import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Category.scss";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";

const Category = () => {
    const { id } = useParams();
    const [products, setProducts] = useState(null);
    const [categoryName, setCategoryName] = useState("Category");

    useEffect(() => {
        // 1. FETCH ALL PRODUCTS (Bypass the API filter issue)
        // We ask for everything and will filter it ourselves in Javascript
        const query = `/api/products?populate=*`;
        
        console.log(`🔍 Fetching ALL products to find Category ID: ${id}`);

        fetchDataFromApi(query).then((res) => {
            if (!res || !res.data) {
                console.log("❌ No data received from API");
                return;
            }

            console.log("📦 All Products:", res.data);

            // 2. MANUAL FILTER
            // We look through every product to see if it belongs to this category
            const filteredData = res.data.filter((product) => {
                const cats = product.categories;
                if (!cats) return false;

                // Handle if Strapi returns an array or single object
                const catsArray = Array.isArray(cats) ? cats : [cats];

                // Check if ANY category matches our ID (DocumentId OR Number ID)
                return catsArray.some(cat => 
                    cat.documentId === id || cat.id == id
                );
            });

            console.log("✅ Filtered Products:", filteredData);

            // 3. UPDATE STATE
            // We create a fake API response structure so the Products component is happy
            setProducts({ data: filteredData });

            // 4. SET CATEGORY NAME
            if (filteredData.length > 0) {
                // Grab the name from the first product we found
                const firstMatch = filteredData[0];
                const matchedCat = Array.isArray(firstMatch.categories) 
                    ? firstMatch.categories.find(c => c.documentId === id || c.id == id)
                    : firstMatch.categories;
                
                if (matchedCat) setCategoryName(matchedCat.title);
            } else {
                setCategoryName("No Products Found");
            }
        });
    }, [id]);

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {categoryName}
                </div>
                
                {products && products.data && products.data.length > 0 ? (
                    <Products innerPage={true} products={products} />
                ) : (
                    <div className="no-products-msg" style={{padding: "50px", textAlign: "center"}}>
                        <h3>No Products Found</h3>
                        <p>We checked all products but none matched Category ID: {id}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Category;