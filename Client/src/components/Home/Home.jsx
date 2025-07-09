import { useEffect } from "react";

import "./Home.scss";

import Banner from "./Banner/Banner";
import Category  from "./Category/Category";
import Products  from "../Products/Products";
import {fetchDataFromApi} from "../../utils/api";
const Home = () => {

    useEffect (() => {
     fetchDataFromApi()
    },[])

    const getCategories = () =>{
        fetchDataFromApi("/api/categories?populates=*").then((res) => console.log(res));

    }
    return <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
               <Category/>
               <Products headingText = "Popular Produts"/>
               
            </div>
        </div>
        
    </div>;
};

export default Home;
