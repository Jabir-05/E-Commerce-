import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();

    // Safety Check: If data hasn't loaded yet, don't crash
    if (!categories || !categories.data) return null;

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories.data.map((item) => {
                    // STRAPI V5: Access properties directly
                    const title = item.title;
                    
                    // Handle Image: Check if array or object, then get URL
                    const imgData = Array.isArray(item.img) ? item.img[0] : item.img;
                    const imgUrl = imgData?.url;

                    const serverUrl = process.env.REACT_APP_DEV_URL || "http://localhost:1337";

                    return (
                        <div
                            key={item.id}
                            className="category"
                            // NAVIGATE: We use documentId for the URL
                            onClick={() => navigate(`/category/${item.documentId}`)}
                            style={{ cursor: "pointer" }}
                        >
                            {/* IMAGE LOGIC */}
                            {imgUrl ? (
                                <img
                                    src={serverUrl + imgUrl}
                                    alt={title}
                                    style={{ 
                                        width: "100%", 
                                        height: "100%", 
                                        display: "block",
                                        objectFit: "cover" 
                                    }}
                                />
                            ) : (
                                // FALLBACK: Gray box if image is missing
                                <div style={{ 
                                    width: "100%", 
                                    height: "150px", // Standard height for category box
                                    backgroundColor: "#ddd", 
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center",
                                    color: "#555",
                                    fontWeight: "bold",
                                    textAlign: "center"
                                }}>
                                    {title}
                                </div>
                            )}
                            
                            {/* TITLE */}
                            <span className="category-title">{title}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Category;