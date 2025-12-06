import axios from "axios";

const HARDCODED_TOKEN = "78a7040dd704b5776e27845fcd9225de8fada144da9355c8a2ca2504c8d77cdf60e301362167c26cc4b0ccb8f69bc46a3c324f9da2fdfb22f0e9abcf1852a67d72cb889ef1fc26463988b07030b33ac6183331cb091d64c8fba47699bbfd117a84abd3925b8f9f3d9cb60537327400a625fefc6847be98bb7ff350ce433ef68d";

const params = {
    headers: {
        Authorization: "Bearer " + HARDCODED_TOKEN,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        console.log("Using Hardcoded Token for test...");
        
        const baseUrl = process.env.REACT_APP_DEV_URL || "http://localhost:1337";
        
        console.log("Request URL:", baseUrl + url); 

        const { data } = await axios.get(baseUrl + url, params);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};